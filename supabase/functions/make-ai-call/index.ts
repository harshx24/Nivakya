import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { phoneNumber } = await req.json();

    if (!phoneNumber) {
      throw new Error('Phone number is required');
    }

    console.log('AI call requested for phone number:', phoneNumber);

    // Send to Make.com webhook
    const webhookUrl = 'https://hook.eu2.make.com/s33jelcl7bonnscwkq3pu83d8cqn9v1i';
    
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: "AI Call Request",
        email: "",
        phone: phoneNumber,
        company: "",
        interest: "AI Voice Agent Call",
        message: `AI call requested for phone number: ${phoneNumber}`,
        type: "ai_call_request"
      }),
    });

    if (!webhookResponse.ok) {
      console.error('Make.com webhook error:', webhookResponse.status);
      return new Response(JSON.stringify({
        success: false,
        error: `Failed to initiate call through webhook (${webhookResponse.status})`
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Call request sent to Make.com successfully');

    return new Response(JSON.stringify({ 
      success: true, 
      message: "AI call request submitted successfully! You should receive a call shortly.",
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error making AI call:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
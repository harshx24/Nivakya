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
    console.log('Webhook endpoint called but functionality has been disabled');
    
    return new Response('Webhook functionality disabled', {
      status: 410,
      headers: { ...corsHeaders, 'Content-Type': 'text/plain' },
    });

  } catch (error) {
    console.error('Error processing webhook:', error);
    
    return new Response('Service unavailable', {
      status: 503,
      headers: { ...corsHeaders, 'Content-Type': 'text/plain' },
    });
  }
});
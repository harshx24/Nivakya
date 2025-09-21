import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Phone, PhoneCall, MessageSquare, BarChart3, Settings, Zap, Users, Globe } from "lucide-react";
import phoneDemoImage from "@/assets/phone-demo.jpg";
import voiceAnalyticsImage from "@/assets/voice-analytics.jpg";
import customerServiceImage from "@/assets/customer-service.jpg";
import aiAssistantHologram from "@/assets/ai-assistant-hologram.jpg";
import dashboardAnalytics from "@/assets/dashboard-analytics.jpg";
import multilingualSupportImage from "@/assets/multilingual-support.jpg";
import crmImage from "@/assets/crm-integration.jpg";
const HowItWorks = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDemo, setIsDemo] = useState(false);
  const {
    toast
  } = useToast();
  const handleDemoCall = async () => {
    if (!phoneNumber) return;
    setIsDemo(true);
    try {
      // Send phone number to webhook first
      await fetch('https://hook.eu2.make.com/s33jelcl7bonnscwkq3pu83d8cqn9v1i', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: "Demo Request",
          email: "",
          phone: phoneNumber,
          company: "",
          interest: "AI Voice Agent Demo",
          message: `Demo call requested for phone number: ${phoneNumber}`
        })
      });

      // Then initiate the AI call
      const {
        data,
        error
      } = await supabase.functions.invoke('make-ai-call', {
        body: {
          phoneNumber
        }
      });
      if (error) throw error;
      if (data.success) {
        toast({
          title: "Call Initiated",
          description: data.message
        });
        setPhoneNumber("");
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Error making call:', error);
      toast({
        title: "Call Failed",
        description: error.message || "Failed to initiate call. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsDemo(false);
    }
  };
  const steps = [{
    icon: Settings,
    title: "Configure Your AI Agent",
    description: "Set up your voice AI with custom scripts, languages, and personality traits that match your brand.",
    features: ["Custom Voice Selection", "Script Personalization", "Multi-language Support"]
  }, {
    icon: PhoneCall,
    title: "Deploy & Connect",
    description: "Integrate with your existing phone systems and CRM platforms for seamless operation.",
    features: ["Twilio Integration", "CRM Sync", "Real-time Analytics"]
  }, {
    icon: Users,
    title: "Engage Customers",
    description: "Your AI agent handles inbound calls, makes outbound campaigns, and qualifies leads automatically.",
    features: ["24/7 Availability", "Lead Qualification", "Appointment Booking"]
  }, {
    icon: BarChart3,
    title: "Analyze & Optimize",
    description: "Monitor performance, review call recordings, and continuously improve your AI agent's effectiveness.",
    features: ["Call Analytics", "Performance Metrics", "Continuous Learning"]
  }];
  const features = [{
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "AI agents that understand context and respond naturally to customer inquiries."
  }, {
    icon: Globe,
    title: "Global Reach",
    description: "Support for 50+ languages and regional dialects for worldwide customer engagement."
  }, {
    icon: Zap,
    title: "Instant Response",
    description: "Sub-second response times with advanced real-time AI processing capabilities."
  }];
  return <Layout>
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            How It Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of AI voice technology with our interactive demo
          </p>
        </div>

        {/* Interactive Demo Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Try Our AI Voice Agent</h2>
              <p className="text-muted-foreground mb-8">
                Enter your phone number and experience a live call from our AI agent. See how natural and intelligent our voice technology really is.
              </p>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 mx-[2px] px-[4px] my-[42px] py-[42px]">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Phone Number</label>
                    <div className="flex gap-2">
                      <PhoneInput placeholder="Enter your phone number" value={phoneNumber} onChange={setPhoneNumber} defaultCountry="+1" className="flex-1" />
                      <Button onClick={handleDemoCall} disabled={!phoneNumber || isDemo} className="gap-2">
                        {isDemo ? <>
                            <Phone className="w-4 h-4 animate-pulse" />
                            Calling...
                          </> : <>
                            <Phone className="w-4 h-4" />
                            Call Me
                          </>}
                      </Button>
                    </div>
                  </div>
                  
                   <div className="text-xs text-muted-foreground">
                     * Select your country code and enter your phone number. We support international calling.
                   </div>
                  
                  {isDemo && <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Phone className="w-4 h-4 animate-pulse" />
                        Connecting you with our AI agent...
                      </div>
                    </div>}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img src={phoneDemoImage} alt="AI Voice Demo Interface" className="rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* How It Works Steps */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple 4-Step Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get your AI voice agent up and running in minutes with our streamlined setup process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs">
                    Step {index + 1}
                  </Badge>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {step.features.map((feature, idx) => <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={voiceAnalyticsImage} alt="Voice Analytics Dashboard" className="rounded-2xl shadow-2xl" />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Powerful AI Capabilities</h2>
              <p className="text-muted-foreground mb-8">
                Our advanced AI technology delivers human-like conversations with industry-leading accuracy and responsiveness.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Customer Success */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Real Results, Real Impact</h2>
              <p className="text-muted-foreground mb-8">
                See how businesses across industries are transforming their customer interactions with Nivākya's AI voice platform.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">300%</div>
                  <div className="text-sm text-muted-foreground">ROI Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </div>
              </div>
            </div>
            
            <div>
              <img src={customerServiceImage} alt="Customer Service Excellence" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </section>

        {/* Innovation Gallery */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Innovation Gallery</h2>
            <p className="text-muted-foreground">A glimpse of the tech behind our AI voice platform</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src={aiAssistantHologram} alt="AI assistant hologram visualization" className="rounded-xl shadow-2xl" loading="lazy" />
            <img src={dashboardAnalytics} alt="Real-time analytics dashboard" className="rounded-xl shadow-2xl" loading="lazy" />
            <img src={multilingualSupportImage} alt="Multilingual capabilities and global reach" className="rounded-xl shadow-2xl" loading="lazy" />
            <img src={crmImage} alt="CRM integration and data pipelines" className="rounded-xl shadow-2xl md:col-span-2" loading="lazy" />
            <img src={voiceAnalyticsImage} alt="Voice analytics and insights" className="rounded-xl shadow-2xl" loading="lazy" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Customer Experience?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using Nivākya to deliver exceptional voice AI experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>;
};
export default HowItWorks;
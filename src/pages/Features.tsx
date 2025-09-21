import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageSquare, BarChart3, Users, Globe, Zap, Shield, Brain, Headphones, Clock, CheckCircle, ArrowRight } from "lucide-react";
import aiAssistantImage from "@/assets/ai-assistant-hologram.jpg";
import dashboardImage from "@/assets/dashboard-analytics.jpg";
import crmIntegrationImage from "@/assets/crm-integration.jpg";
import multilingualImage from "@/assets/multilingual-support.jpg";
import voiceAnalyticsImage from "@/assets/voice-analytics.jpg";
import globalNetworkImage from "@/assets/global-network.jpg";

const Features = () => {
  const coreFeatures = [
    {
      icon: Phone,
      title: "Inbound & Outbound AI Calls",
      description: "Handle unlimited inbound calls and execute outbound campaigns with human-like AI voice agents.",
      features: ["24/7 Availability", "Natural Conversations", "Call Transfer", "Voicemail Detection"]
    },
    {
      icon: MessageSquare,
      title: "Advanced Conversation AI",
      description: "Powered by latest LLMs with context awareness and dynamic script adaptation.",
      features: ["Context Memory", "Emotion Detection", "Script Customization", "Real-time Adaptation"]
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive analytics dashboard with live call monitoring and performance insights.",
      features: ["Live Call Tracking", "Performance Metrics", "Custom Reports", "ROI Analysis"]
    },
    {
      icon: Users,
      title: "Lead Management",
      description: "Intelligent lead qualification, scoring, and automated follow-up campaigns.",
      features: ["Lead Scoring", "Auto Qualification", "CRM Integration", "Follow-up Automation"]
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Support for 50+ languages with native accent and cultural adaptation.",
      features: ["50+ Languages", "Native Accents", "Cultural Context", "Regional Dialects"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with compliance for GDPR, TCPA, and industry regulations.",
      features: ["Data Encryption", "GDPR Compliant", "TCPA Compliant", "SOC 2 Type II"]
    }
  ];

  const advancedFeatures = [
    {
      icon: Brain,
      title: "AI Voice Cloning",
      description: "Clone your voice or use premium voice models for brand consistency."
    },
    {
      icon: Headphones,
      title: "Sentiment Analysis",
      description: "Real-time emotion detection and response adaptation during calls."
    },
    {
      icon: Clock,
      title: "Smart Scheduling",
      description: "Intelligent call timing based on prospect behavior and preferences."
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Sub-second response times with edge computing infrastructure."
    }
  ];

  const integrations = [
    "HubSpot", "Salesforce", "Pipedrive", "Zoho", "Monday.com", "Airtable",
    "Twilio", "Vonage", "Plivo", "Exotel", "Slack", "Microsoft Teams"
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Powerful AI Features
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the comprehensive capabilities that make Nivākya the most advanced AI voice platform
          </p>
        </div>

        {/* Hero Feature */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Core Technology</Badge>
              <h2 className="text-3xl font-bold mb-6">Human-like AI Voice Agents</h2>
              <p className="text-muted-foreground mb-8">
                Our AI agents don't just respond—they understand context, emotions, and intent to deliver 
                conversations that feel completely natural and engaging.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Sub-second Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">50+ Languages</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Enterprise Security</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={aiAssistantImage} 
                alt="AI Assistant Hologram" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to transform your customer interactions with AI-powered voice technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Advanced Capabilities */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={dashboardImage} 
                alt="Analytics Dashboard" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <Badge className="mb-4">Advanced AI</Badge>
              <h2 className="text-3xl font-bold mb-6">Next-Generation Capabilities</h2>
              <p className="text-muted-foreground mb-8">
                Go beyond basic voice automation with our advanced AI features designed for enterprise needs.
              </p>
              
              <div className="space-y-6">
                {advancedFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integration Showcase */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Integrations</Badge>
              <h2 className="text-3xl font-bold mb-6">Seamless CRM Integration</h2>
              <p className="text-muted-foreground mb-8">
                Connect with your existing tools and workflows. Our platform integrates with all major CRM systems,
                communication platforms, and business tools.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                {integrations.map((integration, index) => (
                  <div key={index} className="bg-card/30 border border-border/50 rounded-lg p-3 text-center text-sm">
                    {integration}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-2 text-primary">
                <span>View all integrations</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            <div>
              <img 
                src={crmIntegrationImage} 
                alt="CRM Integration" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Multi-language Support */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={multilingualImage} 
                alt="Multilingual Support" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <Badge className="mb-4">Global Reach</Badge>
              <h2 className="text-3xl font-bold mb-6">Global Communication</h2>
              <p className="text-muted-foreground mb-8">
                Reach customers worldwide with our comprehensive language support and cultural adaptation capabilities.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Languages Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Regional Dialects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Global Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Stats */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Performance</Badge>
              <h2 className="text-3xl font-bold mb-6">Industry-Leading Performance</h2>
              <p className="text-muted-foreground mb-8">
                Our platform delivers exceptional performance with enterprise-grade reliability and security.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Call Success Rate</span>
                  <span className="font-bold text-primary">99.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Average Response Time</span>
                  <span className="font-bold text-primary">0.8s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Customer Satisfaction</span>
                  <span className="font-bold text-primary">96%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>System Uptime</span>
                  <span className="font-bold text-primary">99.9%</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={voiceAnalyticsImage} 
                alt="Voice Analytics" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience These Features?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Start your free trial and see how Nivākya's AI voice features can transform your business communications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors">
                Start Free Trial
              </button>
              <button className="px-6 py-3 border border-primary text-primary rounded-xl hover:bg-primary/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Features;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { Phone, Bot, BarChart3, Zap, Globe, Shield } from "lucide-react";
import logo from "@/assets/nivakya-logo.png";
import heroImage from "@/assets/hero-bg.jpg";
import aiAgentImage from "@/assets/ai-agent.jpg";
import analyticsImage from "@/assets/analytics-dashboard.jpg";

const Index = () => {
  const features = [
    {
      icon: Bot,
      title: "AI Voice Agents",
      description: "Intelligent inbound & outbound voice agents powered by advanced AI technology"
    },
    {
      icon: Phone,
      title: "Lead Generation",
      description: "Automated lead qualification and customer engagement at scale"
    },
    {
      icon: BarChart3,
      title: "CRM Integration",
      description: "Seamless integration with HubSpot, Salesforce, Zoho, and more"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Support for English, Hindi, Arabic, Spanish, French, and 25+ languages"
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Advanced analytics dashboard with call insights and performance metrics"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "GDPR, TCPA, TRAI compliant with enterprise-grade security"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="AI Voice Technology" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <img src={logo} alt="Nivākya Logo" className="h-24 w-24 glow-effect" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
              NIVĀKYA
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Smart Voices, Seamless Solutions.
            </p>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Revolutionary AI-powered voice agents for inbound & outbound calls, 
              lead generation, and seamless CRM integration. Transform your customer 
              engagement with enterprise-ready voice automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/signup">
                <Button className="hero-button text-lg px-8 py-4">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/book-demo">
                <Button variant="outline" className="text-lg px-8 py-4 border-primary/50 hover:bg-primary/10">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full animate-pulse opacity-40 delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-primary-glow rounded-full animate-pulse opacity-50 delay-500"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Powerful AI Voice Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to automate and scale your voice communications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="w-12 h-12 text-primary group-hover:text-primary-glow transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agent Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Meet Your AI Voice Agent
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our advanced AI agents handle complex conversations, qualify leads, 
                and integrate seamlessly with your existing workflows. Experience 
                human-like interactions powered by cutting-edge technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Natural conversation flow</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Real-time sentiment analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Automated lead scoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Instant CRM updates</span>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/how-it-works">
                  <Button className="hero-button">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={aiAgentImage} 
                alt="AI Voice Agent" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src={analyticsImage} 
                alt="Analytics Dashboard" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary rounded-full animate-pulse delay-700"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Advanced Analytics & Insights
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get deep insights into your voice campaigns with real-time analytics, 
                call transcriptions, sentiment analysis, and performance metrics that 
                help optimize your customer engagement strategy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Real-time call monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Conversation transcripts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Performance dashboards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>ROI tracking & reporting</span>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/features">
                  <Button className="hero-button">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center border-primary/20">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ready to Transform Your Voice Communications?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using Nivākya to automate 
              their customer engagement and boost conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/signup">
                <Button className="hero-button text-lg px-8 py-4">
                  Start Your Free Trial
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="text-lg px-8 py-4 border-primary/50 hover:bg-primary/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

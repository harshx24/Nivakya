import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, Users, TrendingUp, MapPin, Calendar, 
  Award, Lightbulb, Globe, ArrowRight, ExternalLink 
} from "lucide-react";
import teamCollaborationImage from "@/assets/team-collaboration.jpg";
import globalNetworkImage from "@/assets/global-network.jpg";
import aiAgentImage from "@/assets/ai-agent.jpg";
import dashboardAnalyticsImage from "@/assets/dashboard-analytics.jpg";

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We constantly push the boundaries of AI voice technology to deliver cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Our customers' success is our success. We're committed to delivering measurable results."
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We believe in continuous learning and improvement, both for our technology and our team."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Building solutions that can transform businesses worldwide, regardless of size or industry."
    }
  ];

  const milestones = [
    {
      year: "2021",
      title: "Company Founded",
      description: "Started with a vision to revolutionize customer communications through AI"
    },
    {
      year: "2022",
      title: "First AI Agent",
      description: "Launched our first AI voice agent with natural language processing capabilities"
    },
    {
      year: "2023",
      title: "Series A Funding",
      description: "Raised $15M to expand our platform and reach more businesses globally"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded to 50+ languages and served customers in over 40 countries"
    }
  ];

  const team = [
    {
      name: "Pawan Prataap Praveen",
      role: "CEO & Co-founder",
      bio: "Former VP of Engineering at leading AI company with 15 years in voice technology.",
      education: "PhD in Computer Science, Stanford"
    },
    {
      name: "Harsh Kumar Shukla",
      role: "CTO & Co-founder",
      bio: "Expert in machine learning and natural language processing with 20+ patents.",
      education: "MS in AI, MIT"
    },
    {
      name: "Emily Johnson",
      role: "VP of Product",
      bio: "Product leader with experience building scalable SaaS platforms for Fortune 500 companies.",
      education: "MBA, Wharton"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Previously led engineering teams at major cloud infrastructure companies.",
      education: "BS Computer Science, Carnegie Mellon"
    }
  ];

  const stats = [
    { number: "10M+", label: "Calls Processed" },
    { number: "500+", label: "Customers" },
    { number: "50+", label: "Languages" },
    { number: "99.9%", label: "Uptime" }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Nivākya
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to transform business communications through intelligent AI voice technology
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Our Mission</Badge>
              <h2 className="text-3xl font-bold mb-6">Revolutionizing Customer Communications</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                At Nivākya, we believe every business deserves access to intelligent, human-like AI voice technology 
                that can handle customer interactions with empathy, accuracy, and efficiency.
              </p>
              <p className="text-muted-foreground mb-8">
                Founded in 2021 by a team of AI researchers and entrepreneurs, we've been dedicated to creating 
                the most advanced AI voice platform that helps businesses scale their customer communications 
                while maintaining the personal touch that matters most.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src={teamCollaborationImage} 
                alt="Team Collaboration" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and drive us to deliver exceptional AI solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Company Journey */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={globalNetworkImage} 
                alt="Global Network" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <Badge className="mb-4">Our Journey</Badge>
              <h2 className="text-3xl font-bold mb-6">From Startup to Global Platform</h2>
              <p className="text-muted-foreground mb-8">
                What started as a small team with a big vision has grown into a global platform 
                serving hundreds of companies worldwide.
              </p>
              
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-primary">{milestone.year}</span>
                        <span className="font-semibold">{milestone.title}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced team combines deep technical expertise with business acumen to drive innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-left">
                  <p className="text-muted-foreground text-sm mb-3">{member.bio}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Award className="w-3 h-3" />
                    {member.education}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology & Innovation */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Technology</Badge>
              <h2 className="text-3xl font-bold mb-6">Cutting-Edge AI Innovation</h2>
              <p className="text-muted-foreground mb-6">
                Our platform leverages the latest advances in artificial intelligence, natural language processing, 
                and speech synthesis to deliver human-like voice interactions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Advanced NLP</h3>
                    <p className="text-sm text-muted-foreground">
                      State-of-the-art language models that understand context and intent
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Real-time Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      Sub-second response times with edge computing infrastructure
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Enterprise Security</h3>
                    <p className="text-sm text-muted-foreground">
                      Bank-grade security with SOC 2 compliance and data encryption
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={aiAgentImage} 
                alt="AI Technology" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={dashboardAnalyticsImage} 
                alt="Global Analytics" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <Badge className="mb-4">Global Reach</Badge>
              <h2 className="text-3xl font-bold mb-6">Serving Businesses Worldwide</h2>
              <p className="text-muted-foreground mb-8">
                From startups to Fortune 500 companies, businesses across the globe trust Nivākya 
                to handle their customer communications with intelligence and care.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">40+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Global Support</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-primary">
                <MapPin className="w-4 h-4" />
                <span>Headquarters: San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-primary mt-2">
                <Globe className="w-4 h-4" />
                <span>Regional Offices: London, Singapore, Toronto</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're looking to transform your customer communications or join our growing team, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 border border-primary text-primary rounded-xl hover:bg-primary/10 transition-colors flex items-center gap-2">
                View Careers
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;
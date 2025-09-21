import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, FileText, TrendingUp } from "lucide-react";

const Resources = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Nivākya Launches Revolutionary AI Voice Platform",
      excerpt: "Our latest AI voice technology is transforming customer interactions across industries.",
      date: "2024-01-15",
      category: "News",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "The Future of Voice AI in Customer Service",
      excerpt: "Exploring how voice AI is reshaping customer experience and business operations.",
      date: "2024-01-10",
      category: "Blog",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Multi-language Support: Breaking Communication Barriers",
      excerpt: "How Nivākya's multilingual capabilities are enabling global business reach.",
      date: "2024-01-05",
      category: "Blog",
      readTime: "4 min read"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Giant Increases Sales by 40%",
      company: "RetailMax Corp",
      industry: "E-commerce",
      improvement: "40% increase in sales conversions",
      description: "By implementing Nivākya's AI voice agents for customer support and lead qualification.",
      metrics: ["40% Sales Increase", "60% Response Time Reduction", "300% ROI"]
    },
    {
      id: 2,
      title: "Healthcare Provider Streamlines Patient Care",
      company: "MediCare Plus",
      industry: "Healthcare",
      improvement: "50% reduction in appointment scheduling time",
      description: "Automated appointment booking and patient follow-up calls improved efficiency.",
      metrics: ["50% Time Savings", "95% Patient Satisfaction", "200% Efficiency Gain"]
    },
    {
      id: 3,
      title: "Financial Services Enhances Customer Onboarding",
      company: "SecureBank Solutions",
      industry: "Finance",
      improvement: "70% faster customer onboarding",
      description: "AI voice verification and support reduced onboarding complexity.",
      metrics: ["70% Faster Onboarding", "85% Customer Approval", "250% Process Efficiency"]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Resources & Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest news, insights, and success stories from Nivākya
          </p>
        </div>

        {/* News & Blogs Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Latest News & Blogs</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {newsArticles.map((article) => (
              <Card key={article.id} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={article.category === 'News' ? 'default' : 'secondary'}>
                      {article.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <Button variant="ghost" size="sm" className="gap-2">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Case Studies Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Success Stories</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{study.industry}</Badge>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {study.company}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{study.description}</p>
                  
                  <div className="bg-primary/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-primary">Key Results</h4>
                    <div className="space-y-1">
                      {study.metrics.map((metric, index) => (
                        <div key={index} className="text-sm font-medium">{metric}</div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full gap-2">
                    View Full Case Study <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Your Success Story?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of businesses already transforming their customer interactions with Nivākya's AI voice platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                Book a Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Resources;
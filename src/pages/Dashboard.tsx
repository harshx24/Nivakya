import Layout from "@/components/layout/Layout";

const Dashboard = () => {
  return (
    <Layout showFooter={false}>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Manage your AI voice campaigns
          </p>
        </div>
        
        {/* Content will be implemented */}
        <div className="text-center">
          <p className="text-muted-foreground">Dashboard page content coming soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
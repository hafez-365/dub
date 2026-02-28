export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="py-8 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Dub</h1>
              <p className="text-gray-600 mt-1">Short Links, Big Impact</p>
            </div>
            <nav className="flex gap-6">
              <a href="#features" className="text-gray-700 hover:text-gray-900">
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-gray-900">
                Pricing
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900">
                About
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              The Link Management Platform for Modern Teams
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Create, manage, and track short links with advanced analytics. 
              Perfect for marketing campaigns, social sharing, and more.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
                Get Started
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 border-t border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Short Links",
                description: "Create memorable short links for all your URLs"
              },
              {
                title: "Analytics",
                description: "Track clicks, conversions, and user behavior in real-time"
              },
              {
                title: "Custom Domains",
                description: "Use your own domain for branded short links"
              },
              {
                title: "Team Collaboration",
                description: "Work together with your team on link management"
              },
              {
                title: "API Access",
                description: "Integrate with your existing tools and workflows"
              },
              {
                title: "Advanced Targeting",
                description: "Redirect based on device, location, and more"
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 border-t border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "Free",
                features: ["Up to 100 links", "Basic analytics", "Community support"]
              },
              {
                name: "Professional",
                price: "$25/mo",
                features: ["Unlimited links", "Advanced analytics", "Priority support", "Custom domain"]
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Everything in Pro", "Dedicated support", "SLA", "Custom integration"]
              }
            ].map((plan, i) => (
              <div key={i} className="p-8 border border-gray-200 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h4>
                <p className="text-3xl font-bold text-gray-900 mb-6">{plan.price}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="text-gray-600 flex items-center">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 px-4 py-2 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-200 text-gray-600">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="font-semibold text-gray-900 mb-4">Product</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-900">Features</a></li>
                <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-4">Company</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-4">Resources</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-900">Docs</a></li>
                <li><a href="#" className="hover:text-gray-900">API</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-4">Legal</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm">
            © 2026 Dub. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}

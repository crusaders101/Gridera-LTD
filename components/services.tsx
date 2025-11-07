const services = [
  {
    icon: "💻",
    title: "Software Development",
    description: "Custom software solutions tailored to your business requirements and scalability needs.",
  },
  {
    icon: "🔧",
    title: "IT Advisory Services",
    description: "Expert guidance to optimize your business processes and technology infrastructure.",
  },
  {
    icon: "🚀",
    title: "End-to-End Support",
    description: "Complete lifecycle support from planning and development through deployment and maintenance.",
  },
  {
    icon: "📊",
    title: "Consultancy",
    description: "Strategic technology consulting to help your business stay competitive and future-ready.",
  },
  {
    icon: "🔐",
    title: "Security Solutions",
    description: "Comprehensive security implementations to protect your data and systems.",
  },
  {
    icon: "☁️",
    title: "Cloud Integration",
    description: "Seamless cloud migration and integration services for modern businesses.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-amber-500 text-lg">Comprehensive IT solutions for your business</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-amber-600 transition duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

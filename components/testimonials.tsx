const testimonials = [
  {
    quote:
      "Gridera IT Ltd transformed our entire software infrastructure. Their expertise and attention to detail is unmatched.",
    author: "Emma Thompson",
    title: "CEO, Tech Solutions Inc",
  },
  {
    quote:
      "Working with Gridera was a pleasure from start to finish. Their team's professionalism and solution delivery exceeded our expectations.",
    author: "Michael Chen",
    title: "Operations Director, Digital Corp",
  },
  {
    quote: "The consultancy services provided were invaluable for our digital transformation. Highly recommended!",
    author: "Sarah Williams",
    title: "Business Manager, Enterprise Ltd",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-950 text-center mb-16">What Our Clients Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-100 rounded-lg p-8">
              <p className="text-slate-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-slate-950">{testimonial.author}</p>
                <p className="text-amber-600 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

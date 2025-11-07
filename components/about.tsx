export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-8">About Gridera IT Ltd</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              At Gridera IT Ltd, we specialise in providing comprehensive IT and software solutions across the UK. With
              a focus on delivering excellence, we help businesses leverage technology to drive growth and optimize
              their operations.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              Our core focus encompasses the complete software development lifecycle—from initial consultation and
              planning through to final deployment, integration, and ongoing maintenance. We work with clients across
              varied sectors, ensuring each solution is tailored to their unique business needs.
            </p>
          </div>

          {/* Right Stats */}
          <div className="bg-slate-100 rounded-2xl p-8 md:p-12">
            <div className="space-y-8">
              <div>
                <div className="text-5xl font-bold text-amber-600 mb-2">50+</div>
                <div className="text-slate-600 text-lg">Projects Completed</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-amber-600 mb-2">10+</div>
                <div className="text-slate-600 text-lg">Years Experience</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-amber-600 mb-2">98%</div>
                <div className="text-slate-600 text-lg">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

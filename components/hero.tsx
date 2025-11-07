"use client"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-700 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">GRIDERA LTD</h1>
        <p className="text-xl md:text-2xl text-amber-500 mb-8 font-light">Transforming Businesses Through Technology</p>

        <button
          onClick={scrollToContact}
          className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition duration-300 transform hover:scale-105"
        >
          GET STARTED
        </button>
      </div>
    </section>
  )
}

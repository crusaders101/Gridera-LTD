import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export const metadata = {
  title: "Gridera IT Ltd - Software Solutions & IT Consulting",
  description:
    "Comprehensive IT and software solutions across the UK. Software development, IT advisory, and end-to-end support.",
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-4">GRIDERA LTD</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Comprehensive IT and software solutions for businesses across the UK.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  IT Advisory
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  End-to-End Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  Consultancy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#about" className="hover:text-amber-600 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-600 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-600 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <p className="text-slate-400 text-sm">
              7429 413 824
              <br />
              grideraitltd@gmail.com
              <br />
              Leicester, UK
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2025 Gridera IT Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

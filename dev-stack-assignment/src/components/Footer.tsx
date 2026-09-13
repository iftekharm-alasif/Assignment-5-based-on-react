import BrandLogo from "./logo-text.png"

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-[1080px] px-5">
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-4">

          {/* Brand */}
          <div>
                <div>
                    <img src={BrandLogo} alt="" />
                </div>

            <p className="mt-4 max-w-[260px] text-[10px] leading-5 text-gray-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-4 text-[10px] font-medium text-[#172033]">
              <a href="#" className="hover:text-[#d83b9d]">
                GitHub
              </a>

              <a href="#" className="hover:text-[#d83b9d]">
                Twitter
              </a>

              <a href="#" className="hover:text-[#d83b9d]">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-wide text-[#172033]">
              Product
            </h3>

            <div className="mt-4 space-y-3 text-[10px] text-gray-400">
              <a href="#" className="block hover:text-[#d83b9d]">
                Home
              </a>

              <a href="#" className="block hover:text-[#d83b9d]">
                Technologies
              </a>

              <a href="#" className="block hover:text-[#d83b9d]">
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-wide text-[#172033]">
              Company
            </h3>

            <div className="mt-4 space-y-3 text-[10px] text-gray-400">
              <a href="#" className="block hover:text-[#d83b9d]">
                About
              </a>

              <a href="#" className="block hover:text-[#d83b9d]">
                Contact
              </a>

              <a href="#" className="block hover:text-[#d83b9d]">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-wide text-[#172033]">
              Legal
            </h3>

            <div className="mt-4 space-y-3 text-[10px] text-gray-400">
              <a href="#" className="block hover:text-[#d83b9d]">
                Privacy Policy
              </a>

              <a href="#" className="block hover:text-[#d83b9d]">
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-100 py-6 md:flex-row">
          <p className="text-[10px] text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5 text-[10px] text-gray-400">
            <a href="#" className="hover:text-[#d83b9d]">
              Privacy
            </a>

            <a href="#" className="hover:text-[#d83b9d]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
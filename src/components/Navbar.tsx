import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const LOGO = "data:image/png;base64,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";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Visi Misi", href: "#visi-misi" },
  { label: "Guru", href: "#guru" },
  { label: "Kurikulum", href: "#kurikulum" },
  { label: "PPDB", href: "#ppdb" },
  { label: "Kontak", href: "#kontak" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transition-elegant ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-elevated"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#beranda" className="flex items-center gap-2.5">
          <img src={LOGO} alt="Logo" className="w-9 h-9 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-sm font-bold text-primary-foreground">
              MA Dar Al Hikmah
            </span>
            <span className="text-[0.6rem] tracking-[2px] uppercase text-primary-foreground/40">
              Pekalongan
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-primary-foreground/60 hover:text-primary-foreground text-[0.82rem] font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/funzone.html"
              className="flex items-center gap-1.5 text-[0.82rem] font-bold text-yellow-300 hover:text-yellow-200 transition-colors duration-200"
            >
              <Sparkles size={14} />
              Fun Zone
            </a>
          </li>
          <li>
            <a
              href="https://bit.ly/PPDBM-MADARALHIKMAH"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gold to-gold-light text-navy px-5 py-2 rounded-full text-xs font-bold tracking-wide uppercase"
            >
              Daftar
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground/80"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-navy/98 backdrop-blur-lg border-t border-gold/10"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-primary-foreground/70 text-sm font-medium border-b border-primary-foreground/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/funzone.html"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 py-3 text-yellow-300 text-sm font-bold border-b border-primary-foreground/5"
                >
                  <Sparkles size={14} />
                  Fun Zone ✨
                </a>
              </li>
              <li className="pt-3">
                <a
                  href="https://bit.ly/PPDBM-MADARALHIKMAH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gradient-to-r from-gold to-gold-light text-navy py-3 rounded-lg font-bold text-sm"
                >
                  Daftar Sekarang
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

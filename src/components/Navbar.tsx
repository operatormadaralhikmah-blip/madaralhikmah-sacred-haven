import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
        <a href="#beranda" className="flex items-center gap-3">
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

const FooterSection = () => {
  return (
    <footer className="bg-foreground py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 pb-8 border-b border-navy-foreground/5">
          {/* Brand */}
          <div>
            <h4 className="font-display text-lg text-navy-foreground font-bold mb-1.5">
              MA Dar Al Hikmah
            </h4>
            <p className="text-[0.76rem] text-navy-foreground/30 leading-relaxed max-w-[260px]">
              Madrasah Aliyah di bawah naungan Yayasan Al-Khikmah Rembun,
              Pekalongan. Membentuk generasi Islami, Qur'ani, dan berwawasan
              global.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-[0.67rem] uppercase tracking-[2px] text-gold-light font-bold mb-4">
              Navigasi
            </h5>
            <ul className="space-y-2">
              {[
                ["Beranda", "#beranda"],
                ["Tentang", "#tentang"],
                ["Visi & Misi", "#visi-misi"],
                ["Guru", "#guru"],
                ["Kurikulum", "#kurikulum"],
                ["PPDB", "#ppdb"],
                ["Kontak", "#kontak"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-navy-foreground/35 hover:text-gold-light transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[0.67rem] uppercase tracking-[2px] text-gold-light font-bold mb-4">
              Kontak
            </h5>
            <ul className="space-y-2 text-sm text-navy-foreground/35">
              <li>Jl. Raya Rembun, Siwalan, Pekalongan</li>
              <li>
                <a href="https://wa.me/6285702171005" className="hover:text-gold-light transition-colors">
                  +62 857-0217-1005
                </a>
              </li>
              <li>
                <a href="mailto:madaralhimah@gmail.com" className="hover:text-gold-light transition-colors">
                  madaralhimah@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/madaralhikmah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-light transition-colors"
                >
                  @madaralhikmah
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-2">
          <p className="text-[0.7rem] text-navy-foreground/20">
            © 2025 MA Dar Al Hikmah Pekalongan. All rights reserved.
          </p>
          <p className="text-[0.7rem] text-navy-foreground/20">
            Yayasan Al-Khikmah Rembun
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

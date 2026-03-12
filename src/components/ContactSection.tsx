import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Globe } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { type: "spring", stiffness: 150, damping: 20 },
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Alamat",
    content: "Jl. Raya Rembun Kauman RT 02/02\nKec. Siwalan, Kab. Pekalongan 51154",
  },
  {
    icon: Phone,
    label: "Telepon / WhatsApp",
    content: "+62 857-0217-1005 (Madrasah)\n+62 851-5544-1937 (Ustadz Alfain – PPDB)",
    links: [
      { text: "+62 857-0217-1005", href: "https://wa.me/6285702171005" },
      { text: "+62 851-5544-1937", href: "https://wa.me/6285155441937" },
    ],
  },
  {
    icon: Mail,
    label: "Email",
    content: "madaralhimah@gmail.com",
    links: [{ text: "madaralhimah@gmail.com", href: "mailto:madaralhimah@gmail.com" }],
  },
  {
    icon: Instagram,
    label: "Instagram",
    content: "@madaralhikmah",
    links: [{ text: "@madaralhikmah", href: "https://instagram.com/madaralhikmah" }],
  },
  {
    icon: Globe,
    label: "Pendaftaran Online",
    content: "bit.ly/PPDBM-MADARALHIKMAH",
    links: [{ text: "bit.ly/PPDBM-MADARALHIKMAH", href: "https://bit.ly/PPDBM-MADARALHIKMAH" }],
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", wa: "", keperluan: "", pesan: "" });

  const handleSend = () => {
    const msg = `Assalamualaikum, saya *${form.name}*%0ANo. WA: ${form.wa}%0AKeperluan: ${form.keperluan}%0A%0A${form.pesan}`;
    window.open(`https://wa.me/6285155441937?text=${msg}`, "_blank");
  };

  return (
    <section id="kontak" className="py-24 bg-navy relative">
      <div className="container relative z-10 mx-auto px-6">
        <motion.div {...fadeInUp} className="mb-12">
          <span className="text-[0.65rem] font-bold tracking-[3px] uppercase text-gold-light mb-3 block">
            Hubungi Kami
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-foreground leading-tight mb-3">
            Informasi & <em className="italic text-gold-light">Kontak</em>
          </h2>
          <div className="w-11 h-[3px] bg-gradient-to-r from-gold to-gold-light rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }}>
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-4 mb-6">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-gold-light" />
                  </div>
                  <div>
                    <h5 className="text-[0.72rem] uppercase tracking-wider text-gold-light font-bold mb-1">
                      {item.label}
                    </h5>
                    {item.links ? (
                      <div className="space-y-0.5">
                        {item.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm text-navy-foreground/55 hover:text-gold-light transition-colors"
                          >
                            {link.text}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-navy-foreground/55 leading-relaxed whitespace-pre-line">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="bg-navy-foreground/[0.04] border border-navy-foreground/[0.07] rounded-2xl p-7"
          >
            <h4 className="font-display text-xl text-navy-foreground font-bold mb-6">
              Kirim Pesan
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-[0.72rem] font-semibold text-navy-foreground/50 uppercase tracking-wide mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Nama Anda"
                  className="w-full bg-navy-foreground/5 border border-navy-foreground/10 rounded-lg px-4 py-3 text-sm text-navy-foreground placeholder:text-navy-foreground/20 focus:border-gold-light outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[0.72rem] font-semibold text-navy-foreground/50 uppercase tracking-wide mb-2">
                  No. WhatsApp
                </label>
                <input
                  type="text"
                  value={form.wa}
                  onChange={(e) => setForm({ ...form, wa: e.target.value })}
                  placeholder="08xx-xxxx-xxxx"
                  className="w-full bg-navy-foreground/5 border border-navy-foreground/10 rounded-lg px-4 py-3 text-sm text-navy-foreground placeholder:text-navy-foreground/20 focus:border-gold-light outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[0.72rem] font-semibold text-navy-foreground/50 uppercase tracking-wide mb-2">
                  Keperluan
                </label>
                <select
                  value={form.keperluan}
                  onChange={(e) => setForm({ ...form, keperluan: e.target.value })}
                  className="w-full bg-navy-foreground/5 border border-navy-foreground/10 rounded-lg px-4 py-3 text-sm text-navy-foreground focus:border-gold-light outline-none transition-colors"
                >
                  <option value="">Pilih keperluan...</option>
                  <option>Informasi PPDB</option>
                  <option>Informasi Beasiswa</option>
                  <option>Kunjungan Madrasah</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-[0.72rem] font-semibold text-navy-foreground/50 uppercase tracking-wide mb-2">
                  Pesan
                </label>
                <textarea
                  value={form.pesan}
                  onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                  placeholder="Tulis pesan Anda..."
                  rows={3}
                  className="w-full bg-navy-foreground/5 border border-navy-foreground/10 rounded-lg px-4 py-3 text-sm text-navy-foreground placeholder:text-navy-foreground/20 focus:border-gold-light outline-none transition-colors resize-y"
                />
              </div>
              <button
                onClick={handleSend}
                className="w-full bg-gradient-to-r from-gold to-gold-light text-navy py-3.5 rounded-lg font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 transition-elegant shadow-warm"
              >
                Kirim via WhatsApp →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

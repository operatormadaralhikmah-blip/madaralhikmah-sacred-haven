import { motion } from "framer-motion";
import { ClipboardList, Building2, Trophy } from "lucide-react";

const spring = { type: "spring" as const, stiffness: 150, damping: 20 };

const PPDBSection = () => {
  return (
    <section id="ppdb" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={spring} className="text-center mb-12">
          <span className="text-[0.65rem] font-bold tracking-[3px] uppercase text-primary mb-3 block">Penerimaan Murid Baru</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-3">PPDB <em className="italic text-primary">2026/2027</em></h2>
          <div className="w-11 h-[3px] bg-gradient-to-r from-gold to-gold-light rounded-full mx-auto" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...spring, delay: 0.1 }} className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-10 text-primary-foreground grid md:grid-cols-[1fr_auto] gap-6 items-center mb-6 relative overflow-hidden">
          <div className="absolute top-[-40%] right-[-8%] w-72 h-72 bg-primary-foreground/[0.04] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-block bg-gradient-to-r from-gold to-gold-light text-navy px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wide mb-4">⭐ GRATIS pendaftaran — 50 pendaftar pertama!</div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Daftarkan Putra-Putri Anda Sekarang</h3>
            <p className="text-sm text-primary-foreground/70 max-w-md leading-relaxed">Peminatan: <strong>Agama · IPA · IPS</strong>. Beasiswa siswa berprestasi & penghafal Al-Qur'an. Di lingkungan Pondok Pesantren Al Hikmah.</p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 relative z-10">
            <a href="https://bit.ly/PPDBM-MADARALHIKMAH" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-gold to-gold-light text-navy px-6 py-3 rounded-lg font-bold text-sm text-center shadow-warm hover:shadow-hover hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 transition-elegant whitespace-nowrap">📝 Daftar Online</a>
            <a href="https://wa.me/6285155441937" target="_blank" rel="noopener noreferrer" className="border-2 border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm text-center hover:border-primary-foreground hover:bg-primary-foreground/5 transition-all duration-300 transition-elegant whitespace-nowrap">💬 Tanya via WA</a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {([
            { icon: ClipboardList, title: "Syarat Pendaftaran", items: ["Fotocopy akta kelahiran", "Fotocopy kartu keluarga", "Fotocopy Ijazah / SKL", "Pas foto merah 3×4 (5 lembar)", "Biaya pendaftaran Rp 50.000", "Tes seleksi & wawancara", "Biaya daftar ulang Rp 525.000"], highlight: false },
            { icon: Building2, title: "Fasilitas", items: ["Kelas dengan akses WiFi", "Perpustakaan", "Lab Komputer", "Lab IPA", "Lapangan olahraga", "Ruang UKS"], highlight: false },
            { icon: Trophy, title: "Keistimewaan", items: ["GRATIS biaya daftar 50 pertama", "Beasiswa siswa berprestasi", "Beasiswa penghafal Al-Qur'an", "Tahfidzul Qur'an", "Penguasaan Kitab Kuning", "Penguasaan Bahasa Asing"], highlight: true },
          ] as const).map((box, i) => {
            const Icon = box.icon;
            return (
              <motion.div key={box.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...spring, delay: i * 0.1 }} className={`rounded-2xl p-6 shadow-warm ${box.highlight ? "bg-gradient-to-br from-primary/[0.06] to-gold/[0.04] border-[1.5px] border-gold/20" : "bg-background border border-border/50"}`}>
                <Icon className={`w-8 h-8 mb-3 ${box.highlight ? "text-gold" : "text-primary"}`} />
                <h4 className={`text-sm font-bold mb-4 ${box.highlight ? "text-gold" : "text-foreground"}`}>{box.title}</h4>
                <ul className="space-y-2">
                  {box.items.map((item) => (
                    <li key={item} className="flex gap-2 text-[0.76rem] text-muted-foreground leading-relaxed">
                      <span className="text-primary font-bold flex-shrink-0">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PPDBSection;

import { motion } from "framer-motion";
import { BookOpen, Globe, Sparkles, GraduationCap } from "lucide-react";

const spring = { type: "spring" as const, stiffness: 150, damping: 20 };

const programs = [
  { icon: BookOpen, title: "Tahfidz Al-Qur'an", items: ["Target hafalan 30 Juz", "Bimbingan intensif harian", "Metode modern & klasik"] },
  { icon: Globe, title: "Bahasa Asing", items: ["Bahasa Arab aktif", "Bahasa Inggris aktif", "Percakapan harian"] },
  { icon: Sparkles, title: "Kitab Kuning", items: ["Kajian kitab klasik", "Adabul Alim", "Tradisi pesantren"] },
  { icon: GraduationCap, title: "Digital & Koding", items: ["Koding & AI", "Informatika", "Pembelajaran digital"] },
];

const AboutSection = () => {
  return (
    <section id="tentang" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={spring}>
            <span className="text-[0.65rem] font-bold tracking-[3px] uppercase text-primary mb-3 block">Tentang Madrasah</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-3">
              Tradisi Islam & <em className="italic text-primary">Pendidikan Modern</em>
            </h2>
            <div className="w-11 h-[3px] bg-gradient-to-r from-gold to-gold-light rounded-full mb-6" />
            <p className="text-muted-foreground text-sm leading-[1.8] mb-8">
              MA Dar Al Hikmah Pekalongan berada di bawah naungan Yayasan Al-Khikmah Rembun, berlokasi di lingkungan Pondok Pesantren Al Hikmah. Kami menerapkan Kurikulum Merdeka (IKM) Fase E yang dipadukan dengan keunggulan pendidikan pesantren, menciptakan lingkungan belajar yang holistik dan berkarakter.
            </p>
            <div className="space-y-3">
              {[["Yayasan", "Al-Khikmah Rembun"], ["NPSN", "70060345"], ["NSM", "131233260017"], ["Kepala Madrasah", "Naeli Zakiya, S.Pd."], ["Kurikulum", "Kurikulum Merdeka"], ["Alamat", "Jl. Raya Rembun Kauman RT 02 RW 02, Kec. Siwalan, Kab. Pekalongan 51154"]].map(([key, val]) => (
                <div key={key} className="flex text-sm border-b border-border/50 pb-2 gap-2">
                  <span className="w-[42%] shrink-0 text-muted-foreground font-medium">{key}</span>
                  <span className="font-semibold text-foreground text-right sm:text-left">{val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {programs.map((prog, i) => {
              const Icon = prog.icon;
              return (
                <motion.div key={prog.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...spring, delay: i * 0.1 }} className="group relative bg-background rounded-2xl p-5 shadow-warm hover:shadow-hover hover:-translate-y-1 transition-all duration-500 transition-elegant overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 transition-elegant" />
                  <Icon className="w-6 h-6 text-primary mb-3" />
                  <h4 className="text-xs font-bold text-foreground mb-2">{prog.title}</h4>
                  <ul className="space-y-1">
                    {prog.items.map((item) => (
                      <li key={item} className="text-[0.76rem] text-muted-foreground leading-relaxed pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-gold">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 150, damping: 20 };

const categories = [
  {
    icon: "🕌",
    title: "Pendidikan Agama Islam",
    subjects: ["Al Qur'an Hadis", "Akidah Akhlak", "Fikih", "Sejarah Kebudayaan Islam", "Bahasa Arab"],
  },
  {
    icon: "📚",
    title: "Mata Pelajaran Umum",
    subjects: ["Pendidikan Pancasila", "Bahasa Indonesia", "Matematika", "Bahasa Inggris", "PJOK", "Informatika", "Seni dan Budaya"],
  },
  {
    icon: "🔬",
    title: "Ilmu Pengetahuan Alam",
    subjects: ["Biologi", "Fisika", "Kimia"],
  },
  {
    icon: "📊",
    title: "Ilmu Pengetahuan Sosial",
    subjects: ["Ekonomi", "Sosiologi", "Geografi", "Sejarah"],
  },
  {
    icon: "📖",
    title: "Muatan Lokal",
    subjects: ["Baca Tulis Al-Qur'an (BTQ)", "Adabul Ilmi", "Koding dan Kecerdasan Artifisial"],
  },
];

const CurriculumSection = () => {
  return (
    <section id="kurikulum" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='1.5' fill='%23e8b84b'/%3E%3C/svg%3E")` }} />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={spring} className="mb-12">
          <span className="text-[0.65rem] font-bold tracking-[3px] uppercase text-gold-light mb-3 block">Akademik</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-foreground leading-tight mb-3">Kurikulum <em className="italic text-gold-light">Merdeka</em></h2>
          <div className="w-11 h-[3px] bg-gradient-to-r from-gold to-gold-light rounded-full mb-4" />
          <p className="text-navy-foreground/40 text-sm max-w-lg">Implementasi Kurikulum Merdeka (IKM) Fase E, Kelas X — Tahun Ajaran 2025/2026</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...spring, delay: i * 0.1 }} className="bg-navy-foreground/[0.04] border border-navy-foreground/[0.07] rounded-2xl p-5 hover:bg-navy-foreground/[0.07] hover:border-gold/15 transition-all duration-500 transition-elegant">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{cat.icon}</span>
                <span className="text-xs font-bold text-gold-light uppercase tracking-wider">{cat.title}</span>
              </div>
              <ul className="space-y-1">
                {cat.subjects.map((sub) => (
                  <li key={sub} className="flex items-center gap-2 py-1.5 border-b border-navy-foreground/[0.04] last:border-0">
                    <span className="text-gold text-[0.4rem]">◆</span>
                    <span className="text-[0.8rem] text-navy-foreground/70">{sub}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;

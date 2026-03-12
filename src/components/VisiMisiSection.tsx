import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { type: "spring", stiffness: 150, damping: 20 },
};

const misiList = [
  "Membangun kualitas perilaku keberagaman ala Ahlussunnah Wal Jamaah",
  "Membangun generasi yang berkualitas Qur'ani",
  "Meningkatkan keterampilan berbahasa asing yaitu Arab dan Inggris",
  "Peningkatan kemampuan akademik dan non akademik",
  "Mencetak peserta didik berprestasi hingga tingkat global internasional",
  "Mencetak peserta didik berkemampuan mandiri di masyarakat luas",
  "Mencetak peserta didik yang Hafidz Hafidzah (30 Juz)",
  "Mencetak peserta didik yang menguasai Kitab Kuning",
];

const VisiMisiSection = () => {
  return (
    <section id="visi-misi" className="py-24 bg-navy relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20z' fill='%23e8b84b'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div {...fadeInUp} className="mb-12">
          <span className="text-[0.65rem] font-bold tracking-[3px] uppercase text-gold-light mb-3 block">
            Fondasi Kami
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-foreground leading-tight mb-3">
            Visi & <em className="italic text-gold-light">Misi</em>
          </h2>
          <div className="w-11 h-[3px] bg-gradient-to-r from-gold to-gold-light rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Visi */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="group relative bg-navy-foreground/[0.04] border border-navy-foreground/[0.07] rounded-2xl p-8 hover:bg-navy-foreground/[0.07] hover:border-gold/15 transition-all duration-500 transition-elegant overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold to-primary" />
            <span className="absolute top-2 right-4 font-display text-[5rem] font-bold text-gold/[0.04] leading-none select-none">
              V
            </span>
            <h3 className="font-display text-2xl font-bold text-gold-light mb-4">
              Visi
            </h3>
            <p className="text-sm text-navy-foreground/60 leading-[1.85] italic">
              Terwujudnya generasi Islami dan Qur'ani, mandiri, cinta tanah air,
              serta mampu bersaing di tingkat global dan internasional.
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="group relative bg-navy-foreground/[0.04] border border-navy-foreground/[0.07] rounded-2xl p-8 hover:bg-navy-foreground/[0.07] hover:border-gold/15 transition-all duration-500 transition-elegant overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold to-primary" />
            <span className="absolute top-2 right-4 font-display text-[5rem] font-bold text-gold/[0.04] leading-none select-none">
              M
            </span>
            <h3 className="font-display text-2xl font-bold text-gold-light mb-4">
              Misi
            </h3>
            <ul className="space-y-2.5">
              {misiList.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[0.83rem] text-navy-foreground/60 leading-relaxed"
                >
                  <span className="text-gold text-[0.45rem] mt-2 flex-shrink-0">
                    ◆
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisiSection;

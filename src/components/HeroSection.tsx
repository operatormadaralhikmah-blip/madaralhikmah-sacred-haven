import { motion } from "framer-motion";
import heroImg from "@/assets/hero-school.jpg";
import patternImg from "@/assets/islamic-pattern.png";

const springConfig = { type: "spring", stiffness: 150, damping: 20, mass: 1 };

const HeroSection = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-svh flex items-center overflow-hidden bg-navy"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="MA Dar Al Hikmah Pekalongan"
          className="w-full h-full object-cover opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
      </div>

      {/* Pattern overlay */}
      <img
        src={patternImg}
        alt=""
        className="absolute right-[-5%] top-[10%] w-[400px] h-[400px] opacity-[0.04] animate-spin-slow pointer-events-none"
      />

      <div className="container relative z-10 mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-light animate-pulse" />
            <span className="text-[0.68rem] font-semibold tracking-[2px] uppercase text-gold-light">
              Pendaftaran 2026/2027 Dibuka
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-arabic text-2xl text-gold/30 mb-2 text-right"
            dir="rtl"
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-foreground leading-[1.05] mb-4 tracking-tight"
          >
            Membentuk Generasi{" "}
            <em className="text-gold-light italic">Qur'ani</em>,{" "}
            Berwawasan Global
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.4 }}
            className="text-navy-foreground/50 text-sm leading-relaxed mb-8 max-w-lg font-light"
          >
            Madrasah Aliyah Dar Al Hikmah Pekalongan — Di lingkungan Pondok
            Pesantren Al Hikmah. Memadukan keunggulan kurikulum nasional,
            pembelajaran Kitab Kuning, Tahfidz Al-Qur'an, dan penguasaan bahasa
            asing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {[
              { label: "NSM", value: "131233260017" },
              { label: "Peminatan", value: "Agama · IPA · IPS" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-navy-foreground/5 border border-navy-foreground/10 px-3 py-1.5 rounded text-xs text-navy-foreground/50 font-medium"
              >
                <span className="text-gold-light font-bold">{item.label}:</span>{" "}
                {item.value}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#ppdb"
              className="bg-gradient-to-r from-gold to-gold-light text-navy px-8 py-3.5 rounded-lg font-bold text-sm shadow-warm hover:shadow-hover hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 transition-elegant"
            >
              Daftar Sekarang →
            </a>
            <a
              href="#tentang"
              className="border border-navy-foreground/15 text-navy-foreground/70 px-7 py-3.5 rounded-lg font-medium text-sm hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 transition-elegant"
            >
              Jelajahi Program
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-8 mt-12 pt-8 border-t border-navy-foreground/5"
          >
            {[
              { num: "3", label: "Peminatan" },
              { num: "17", label: "Tenaga Pendidik" },
              { num: "30", label: "Target Juz" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-gold-light leading-none">
                  {stat.num}
                </div>
                <div className="text-[0.65rem] text-navy-foreground/35 uppercase tracking-[1.5px] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - decorative */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full border border-gold/10 animate-spin-slow" />
            <div className="absolute inset-6 rounded-full border border-dashed border-primary/15 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "18s" }} />
            <div className="absolute inset-12 bg-gradient-radial from-primary/15 to-transparent rounded-full animate-pulse" style={{ animationDuration: "4s" }} />
            <img
              src={patternImg}
              alt="Islamic geometric pattern"
              className="absolute inset-0 m-auto w-48 h-48 object-contain drop-shadow-[0_0_28px_rgba(61,130,109,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

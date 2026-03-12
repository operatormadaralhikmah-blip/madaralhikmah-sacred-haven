import { motion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 150, damping: 20 };

const teachers = [
  { name: "Naeli Zakiya, S.Pd.", mapel: "Bahasa Arab", univ: "S1 UIN Sunan Kalijaga", initials: "NZ" },
  { name: "Muthia Uzlifa, S.Ag., M.A.", mapel: "Al Qur'an Hadis, BTQ", univ: "S2 UIN Sunan Kalijaga", initials: "MU" },
  { name: "Faiz Al Faruqi, Lc.", mapel: "Aqidah Akhlak, Fiqih", univ: "S1 Al Azhar Kairo", initials: "FA" },
  { name: "M. Charits Arrosyid, S.Pd.I.", mapel: "SKI", univ: "S1 UIN KH Abdurrahman Wahid", initials: "MC" },
  { name: "M. Fahmi Khatami, S.Pd.", mapel: "Koding & Kecerdasan Artifisial", univ: "S1 UIN Syarif Hidayatullah", initials: "MF" },
  { name: "M. Arifurrahman, M.Hum.", mapel: "Adabul Ilmi", univ: "S2 UIN Sunan Kalijaga", initials: "MR" },
  { name: "Mizan Ikhsani, S.Pd.", mapel: "PJOK", univ: "S1 Pendidikan Olahraga", initials: "MI" },
  { name: "Amaliya Sita Permatasari, M.Si.", mapel: "Kimia", univ: "S2 Kimia ITB", initials: "AS" },
  { name: "Nilna Fauziyah, S.Pd.", mapel: "Ekonomi", univ: "S1 Pend. Ekonomi UNES", initials: "NF" },
  { name: "Abdul Karim, M.Pd.", mapel: "Fisika", univ: "S2 Pend. Fisika UNES", initials: "AK" },
  { name: "Deviana Riskiyah, S.Pd.", mapel: "Matematika", univ: "S1 Pend. Matematika UNES", initials: "DR" },
  { name: "Moh. Yusuf Bahtiar, S.Kom.", mapel: "Informatika, Geografi", univ: "S1 Teknik Informatika STIK Widya Pratama", initials: "MY" },
  { name: "Sami Lestari, S.Sn.", mapel: "Seni Budaya", univ: "S1 Seni Tari ISI Surakarta", initials: "SL" },
  { name: "Shofia Rizky, S.Pd.", mapel: "Sejarah", univ: "S1 Pend. Sejarah UNES", initials: "SR" },
  { name: "Hilda Sifalia Nurlatifah, S.Pd.", mapel: "Biologi", univ: "S1 Pend. Biologi UIN Walisongo", initials: "HS" },
  { name: "Suci Safitri, S.Sos.", mapel: "Sosiologi", univ: "S1 Sosiologi UIN Walisongo", initials: "SS" },
  { name: "Maya Amelia, S.Pd.", mapel: "Bahasa Inggris", univ: "S1 Pend. Bahasa Inggris UIN KH AWP", initials: "MA" },
  { name: "Ahmad Alfain Dzulqarnain, S.Sos.", mapel: "Pendidikan Pancasila", univ: "S1 Komunikasi Penyiaran Islam UIN KH AWP", initials: "AA" },
  { name: "Nur Hasanah, S.Pd.", mapel: "Bahasa Indonesia", univ: "S1 Pend. Bahasa Indonesia IKIP PGRI Semarang", initials: "NH" },
];


const TeachersSection = () => {
  return (
    <section id="guru" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={spring} className="text-center mb-12">
          <span className="text-[0.65rem] font-bold tracking-[3px] uppercase text-primary mb-3 block">Tenaga Pendidik</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-3">Guru <em className="italic text-primary">Profesional</em></h2>
          <div className="w-11 h-[3px] bg-gradient-to-r from-gold to-gold-light rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">Didukung oleh pendidik berkualitas dari universitas terkemuka di Indonesia dan luar negeri</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {teachers.map((t, i) => (
            <motion.div key={t.name + i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...spring, delay: Math.min(i * 0.03, 0.4) }} className="group relative bg-secondary rounded-2xl p-5 text-center shadow-warm hover:shadow-hover hover:-translate-y-1 transition-all duration-500 transition-elegant overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center font-display text-lg font-bold text-primary-foreground mx-auto mb-3">{t.initials}</div>
              <div className="text-xs font-bold text-foreground leading-tight mb-1">{t.name}</div>
              <div className="text-[0.68rem] font-semibold text-primary mb-0.5">{t.mapel}</div>
              <div className="text-[0.62rem] text-muted-foreground">{t.univ}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;

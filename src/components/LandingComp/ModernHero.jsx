import { motion } from "framer-motion";
import { Menu, ArrowRight } from "lucide-react";

export default function MinimalSphereHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f5f2] text-black">

      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* GRID */}
      <div
        className="
        absolute inset-0
        bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)]
        bg-[size:90px_90px]"
      />



      {/* HERO */}
      <div
        className="
        relative
        z-10
        px-6
        md:px-12
        pt-16
        md:pt-10
        pb-20"
      >

        {/* FLOATING DOT */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="
          absolute
          right-[6%]
          top-[22%]
          hidden
          md:block"
        >
          <div className="w-3 h-3 bg-black"></div>
        </motion.div>

        {/* SPHERE */}
<motion.div
  animate={{
    rotate: 360,
  }}
  transition={{
    duration: 140,
    repeat: Infinity,
    ease: "linear",
  }}
  style={{
    background:
      "radial-gradient(circle, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.02) 35%, transparent 70%)",
  }}
  className="
  absolute
  left-1/2
  top-1/2
  -translate-x-1/2
  -translate-y-1/2
  w-[1200px]
  h-[1200px]
  md:w-[1800px]
  md:h-[1800px]
  rounded-full
  opacity-80
  blur-[0.5px]"
>

  {/* OUTER RING */}
  <div className="absolute inset-0 rounded-full border border-black/10" />

  {/* MIDDLE RING */}
  <div className="absolute inset-[12%] rounded-full border border-black/10" />

  {/* INNER RING */}
  <div className="absolute inset-[24%] rounded-full border border-black/10" />

  {/* DOTS */}
  {[...Array(1800)].map((_, i) => (
    <span
      key={i}
      className="absolute rounded-full bg-black/50"
      style={{
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        transform: `
          translate(-50%, -50%)
          scale(${Math.random() * 1.5})
        `,
        opacity: Math.random(),
      }}
    />
  ))}

  {/* GLOW */}
  <div
    className="
    absolute
    inset-[30%]
    rounded-full
    bg-black/5
    blur-3xl"
  />
</motion.div>

        {/* CONTENT */}
        <div className="relative z-20 pt-52 md:pt-[20rem]">

          <motion.h1
  initial={{ opacity: 0, y: 70 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="
  text-[70px]
  sm:text-[110px]
  md:text-[160px]
  leading-[.95]
  tracking-[-4px]
  font-[400]
  max-w-[1100px]"
>
  <span className="block mb-10">Simplify</span>
  <span className="block">with dorspo</span>
</motion.h1>

          {/* BOTTOM ROW */}
          <div
            className="
            mt-16
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-10"
          >

            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-[420px]"
            >

              <p className="text-lg leading-relaxed text-black/60">
                A premium minimal platform designed to help teams
                move faster, stay organized and build modern digital
                experiences.
              </p>

              <div className="flex items-center gap-10 mt-10">




              </div>
            </motion.div>

           {/* ANIMATED WORDS */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 1 }}
  className="
  relative
  -mt-10
  md:-mt-16
  -ml-1
  md:-ml-3
  flex
  items-center
  gap-5
  md:gap-8
  flex-wrap"
>

  {["Think", "Build", "Scale"].map((word, i) => (
    <motion.div
      key={word}
      animate={{
        y: [0, -8, 0],
        opacity: [0.45, 1, 0.45],
      }}
      transition={{
        duration: 4,
        delay: i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        y: -4,
        opacity: 1,
      }}
      className="
      relative
      text-[18px]
      sm:text-[22px]
      md:text-[30px]
      font-[300]
      tracking-[0.25em]
      text-black/80
      transition-all
      duration-300"
    >

      {/* GLOW */}
      <span className="absolute inset-0 blur-md opacity-20">
        {word}
      </span>

      {/* TEXT */}
      <span className="relative">
        {word}
      </span>

    </motion.div>
  ))}

</motion.div>
          </div>
        </div>
      </div>

      {/* SIDE LINE */}
      <div
        className="
        hidden
        md:flex
        absolute
        right-8
        top-1/2
        -translate-y-1/2
        flex-col
        items-center"
      >

        <div className="w-[1px] h-32 bg-black/10"></div>

        <div className="w-2 h-2 rounded-full bg-black mt-4"></div>
      </div>
    </section>
  );
}
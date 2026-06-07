import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {

  const texts = ["BUILD", "DESIGN", "SCALE"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f5f7] flex items-center justify-center">

      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* MAIN GLOW */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
          absolute
          top-[-10%]
          right-[-40%]
          sm:right-[-20%]
          md:right-[-10%]
          w-[320px]
          h-[320px]
          sm:w-[500px]
          sm:h-[500px]
          md:w-[950px]
          md:h-[950px]
          rounded-full
          bg-gradient-to-br
          from-white
          via-[#d9d4ff]
          to-[#5B6DFF]
          opacity-90
          blur-[70px]
          sm:blur-[100px]
          md:blur-[130px]"
        />

        {/* SECOND GLOW */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
          absolute
          bottom-[-10%]
          left-[-30%]
          sm:left-[-15%]
          md:left-[-10%]
          w-[260px]
          h-[260px]
          sm:w-[400px]
          sm:h-[400px]
          md:w-[700px]
          md:h-[700px]
          rounded-full
          bg-[#4D5DFF]
          opacity-70
          blur-[70px]
          sm:blur-[100px]
          md:blur-[130px]"
        />

        {/* GLASS RING */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          absolute
          top-1/2
          right-[-25%]
          sm:right-[-10%]
          md:right-[6%]
          -translate-y-1/2
          w-[180px]
          h-[180px]
          sm:w-[320px]
          sm:h-[320px]
          md:w-[620px]
          md:h-[620px]
          rounded-full
          border
          border-white/40"
        />
      </div>

      {/* BACKGROUND TEXT */}
      <div
        className="
        absolute
        top-[12%]
        left-1/2
        -translate-x-1/2
        pointer-events-none
        select-none"
      >
        <h1
          className="
          whitespace-nowrap
          text-[52px]
          sm:text-[100px]
          md:text-[320px]
          font-black
          tracking-[8px]
          sm:tracking-[16px]
          md:tracking-[35px]
          text-[#4D5DFF]/10
          leading-none"
        >
          DORSPO
        </h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 flex flex-col items-center text-center px-4">

        {/* TOP TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          text-[#666]
          tracking-[4px]
          sm:tracking-[8px]
          md:tracking-[10px]
          text-[9px]
          sm:text-xs
          md:text-sm"
        >
          MODERN DIGITAL EXPERIENCE
        </motion.p>

        {/* CENTER LOGO */}
        <div className="relative mt-24 sm:mt-28 md:mt-44 flex items-center justify-center">

          {/* D */}
          <motion.h1
            animate={{
              x: [-18, 18, -18],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            text-[70px]
            sm:text-[120px]
            md:text-[280px]
            font-light
            tracking-[-6px]
            sm:tracking-[-12px]
            md:tracking-[-18px]
            leading-none
            text-[#05060A]"
          >
            D
          </motion.h1>

          {/* O */}
          <motion.h1
            animate={{
              x: [18, -18, 18],
              rotate: [2, -2, 2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            -ml-1
            sm:-ml-3
            md:-ml-8
            text-[70px]
            sm:text-[120px]
            md:text-[280px]
            font-light
            leading-none
            text-[#05060A]"
          >
            O
          </motion.h1>
        </div>

        {/* SUBTEXT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="
          flex
          items-center
          gap-2
          sm:gap-4
          md:gap-5
          mt-8
          sm:mt-10
          md:mt-14"
        >
          <div className="w-6 sm:w-10 md:w-16 h-[1px] bg-black/20" />

          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{
                opacity: 0,
                y: 15,
                filter: "blur(6px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -15,
                filter: "blur(6px)",
              }}
              transition={{
                duration: 0.5,
              }}
              className="
              text-[#222]
              tracking-[3px]
              sm:tracking-[5px]
              md:tracking-[7px]
              text-[9px]
              sm:text-xs
              md:text-sm
              min-w-[70px]
              sm:min-w-[90px]
              md:min-w-[120px]
              text-center"
            >
              {texts[index]}
            </motion.p>
          </AnimatePresence>

          <div className="w-6 sm:w-10 md:w-16 h-[1px] bg-black/20" />
        </motion.div>
      </div>

      {/* FLOATING CARD */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        left-3
        bottom-6
        sm:left-6
        sm:bottom-10
        md:left-16
        md:bottom-16
        z-30"
      >
        <div
          className="
          w-[130px]
          sm:w-[180px]
          md:w-[250px]
          rounded-[22px]
          md:rounded-[34px]
          border
          border-white/50
          bg-white/50
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(0,0,0,0.12)]
          p-4
          sm:p-5
          md:p-8"
        >
          <p className="tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-[8px] sm:text-xs md:text-sm text-[#666]">
            CREATIVE
          </p>

          <h3
            className="
            mt-3
            md:mt-5
            text-xl
            sm:text-3xl
            md:text-5xl
            font-light
            text-[#111]"
          >
            Future
          </h3>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mt-5 md:mt-10">
            <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#2554ff]" />
            <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#8757ff]" />
            <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#d8d2ff]" />
          </div>
        </div>
      </motion.div>

      {/* SCROLL */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
        absolute
        right-3
        bottom-6
        sm:right-6
        sm:bottom-10
        md:right-16
        md:bottom-10
        z-40
        flex
        flex-col
        items-center"
      >
        <p
          className="
          text-[#444]
          tracking-[3px]
          sm:tracking-[5px]
          md:tracking-[6px]
          text-[8px]
          sm:text-[10px]
          md:text-[11px]"
        >
          SCROLL
        </p>

        <div className="w-[1px] h-8 sm:h-12 md:h-16 bg-black mt-2 sm:mt-3 md:mt-4" />

        <div className="mt-1 md:mt-2 text-black text-sm sm:text-lg md:text-2xl">
          ↓
        </div>
      </motion.div>
    </section>
  );
}
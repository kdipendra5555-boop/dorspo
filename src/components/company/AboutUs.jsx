import { motion } from "framer-motion";

export default function AboutUs() {

  const features = [
    {
      title: "Premium Interfaces",
      text:
        "Modern UI systems crafted with precision, motion, and clean visual hierarchy.",
    },

    {
      title: "Motion Experience",
      text:
        "Fluid animations and immersive transitions that make products feel alive.",
    },

    {
      title: "Digital Branding",
      text:
        "Luxury visual identities designed for modern startups and digital businesses.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f5f5f2] text-black">

      {/* TOP LINE */}
      <div className="h-[1px] w-full bg-black/5" />

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* GRID */}
        <div
          className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          [background-size:90px_90px]"
        />

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
          right-[8%]
          top-[18%]
          hidden
          md:block"
        >
          <div className="w-3 h-3 bg-black rounded-full" />
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
          top-[28%]
          -translate-x-1/2
          -translate-y-1/2
          w-[1200px]
          h-[1200px]
          md:w-[1800px]
          md:h-[1800px]
          rounded-full
          opacity-80"
        >

          {/* RINGS */}
          <div className="absolute inset-0 rounded-full border border-black/10" />
          <div className="absolute inset-[12%] rounded-full border border-black/10" />
          <div className="absolute inset-[24%] rounded-full border border-black/10" />

          {/* PARTICLES */}
          {[...Array(1200)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-black/40"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random(),
              }}
            />
          ))}

        </motion.div>

      </div>

      {/* MAIN */}
      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        md:px-10
        py-24
        md:py-36"
      >

        {/* HERO */}
        <div
          className="
          flex
          flex-col
          lg:flex-row
          justify-between
          gap-16"
        >

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className="max-w-[760px]"
          >

            {/* TAG */}
            <div
              className="
              inline-flex
              items-center
              gap-3
              mb-8"
            >

              <div className="w-2 h-2 rounded-full bg-black/50" />

              <p
                className="
                text-[11px]
                uppercase
                tracking-[0.32em]
                text-black/45"
              >
                About Dorspo
              </p>

            </div>

            {/* HEADING */}
            <h2
              className="
              text-[54px]
              sm:text-[82px]
              md:text-[128px]
              leading-[0.9]
              tracking-[-7px]
              font-[400]"
            >
              Designing
              <br />

              <span className="italic">
                digital clarity
              </span>

            </h2>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            className="
            max-w-[500px]
            pt-4"
          >

            <p
              className="
              text-[17px]
              leading-[2]
              text-black/55"
            >
              Dorspo creates modern digital experiences focused on
              simplicity, motion, branding, and premium interaction.
              We blend minimal design systems with futuristic interfaces
              to craft products that feel immersive, elegant, and timeless.
            </p>

          </motion.div>

        </div>

        {/* VISUAL SECTION */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="
          relative
          mt-20
          md:mt-32
          rounded-[42px]
          overflow-hidden
          border
          border-black/5
          bg-white/55
          backdrop-blur-2xl
          p-5
          md:p-8"
        >

          {/* GRID */}
          <div
            className="
            absolute
            inset-0
            opacity-[0.03]
            [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
            [background-size:80px_80px]"
          />

          {/* GLOW */}
          <div
            className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[500px]
            h-[500px]
            rounded-full
            bg-black/[0.05]
            blur-3xl"
          />

          <div
            className="
            relative
            z-10
            grid
            lg:grid-cols-[1.1fr_0.9fr]
            gap-8
            items-center"
          >

            {/* IMAGE SIDE */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
              }}
              className="
              relative
              overflow-hidden
              rounded-[34px]
              border
              border-white/40
              bg-white/40
              backdrop-blur-xl
              shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
            >

              {/* IMAGE */}
              <img
                src="/images/clarity.png"
                alt="dashboard"
                className="
                w-full
                h-[720px]
                object-cover"
              />

              {/* OVERLAY */}
              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/10
                to-transparent"
              />

              {/* TEXT */}
              <div
                className="
                absolute
                bottom-0
                left-0
                p-8
                md:p-10"
              >

                <p
                  className="
                  text-white/45
                  text-sm
                  uppercase
                  tracking-[0.3em]
                  mb-4"
                >
                  Modern Experience
                </p>

                <h3
                  className="
                  text-white
                  text-4xl
                  md:text-5xl
                  leading-[1]
                  tracking-[-3px]
                  font-[500]"
                >
                  Premium
                  <br />
                  Interface
                </h3>

              </div>

            </motion.div>

            {/* RIGHT SIDE */}
            <div
              className="
              flex
              flex-col
              gap-6"
            >

              {/* FEATURE CARDS */}
              {features.map((item, index) => (

                <motion.div
                  key={index}
                  animate={{
                    y: index === 0
                      ? [0, -14, 0]
                      : index === 1
                      ? [0, 16, 0]
                      : [0, -10, 0],
                  }}
                  transition={{
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-black/5
                  bg-white/70
                  backdrop-blur-xl
                  p-8"
                >

                  {/* GLOW */}
                  <div
                    className="
                    absolute
                    right-[-20%]
                    top-[-20%]
                    w-40
                    h-40
                    rounded-full
                    bg-black/[0.03]
                    blur-3xl"
                  />

                  <div className="relative z-10">

                    <p
                      className="
                      text-black/35
                      text-sm
                      uppercase
                      tracking-[0.25em]
                      mb-6"
                    >
                      0{index + 1}
                    </p>

                    <h4
                      className="
                      text-2xl
                      tracking-[-1px]
                      font-[500]
                      mb-4"
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                      text-black/55
                      leading-[1.9]"
                    >
                      {item.text}
                    </p>

                  </div>

                </motion.div>

              ))}

              {/* STATS */}
              <div
                className="
                grid
                grid-cols-3
                gap-4"
              >

                {[
                  {
                    number: "10+",
                    label: "Projects",
                  },

                  {
                    number: "24/7",
                    label: "Support",
                  },

                  {
                    number: "100%",
                    label: "Premium",
                  },

                ].map((item, index) => (

                  <motion.div
                    whileHover={{
                      y: -4,
                    }}
                    key={index}
                    className="
                    rounded-[24px]
                    border
                    border-black/5
                    bg-white/70
                    backdrop-blur-xl
                    p-5"
                  >

                    <h3
                      className="
                      text-3xl
                      tracking-[-2px]
                      font-[500]
                      mb-2"
                    >
                      {item.number}
                    </h3>

                    <p className="text-black/45 text-sm">
                      {item.label}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}
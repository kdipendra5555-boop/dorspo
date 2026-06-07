import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative bg-[#f5f5f2] overflow-hidden">

      {/* TOP BORDER */}
      <div className="h-[1px] w-full bg-black/5" />

      <div
        className="
        max-w-[1600px]
        mx-auto
        px-5
        sm:px-6
        md:px-12
        py-24
        md:py-44"
      >

        {/* TOP ROW */}
        <div
          className="
          flex
          flex-col
          lg:flex-row
          justify-between
          gap-14
          md:gap-20"
        >

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-[720px]"
          >

            <p
              className="
              text-[11px]
              sm:text-[13px]
              uppercase
              tracking-[0.3em]
              text-black/40
              mb-6"
            >
              About dorspo
            </p>

            <h2
              className="
              text-[42px]
              sm:text-[58px]
              md:text-[90px]
              leading-[0.95]
              tracking-[-2px]
              md:tracking-[-4px]
              font-[350]"
            >
              Designing
              <br />
              digital clarity
            </h2>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="
            max-w-[420px]
            pt-0
            lg:pt-4"
          >

            <p
              className="
              text-[15px]
              sm:text-[17px]
              leading-[1.9]
              text-black/55"
            >
              Dorspo creates modern digital experiences focused on
              simplicity, motion and premium interaction. We blend
              minimal design with futuristic interfaces to build
              products that feel elegant, immersive and timeless.
            </p>

          </motion.div>

        </div>

        {/* BIG VISUAL CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
          relative
          mt-20
          md:mt-36
          min-h-[780px]
          md:h-[700px]
          rounded-[30px]
          md:rounded-[40px]
          overflow-hidden"
        >

          {/* GRID */}
          <div
            className="
            absolute inset-0
            bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)]
            bg-[size:60px_60px]
            md:bg-[size:80px_80px]"
          />

          {/* GLOW */}
          <div
            className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[300px]
            h-[300px]
            md:w-[500px]
            md:h-[500px]
            rounded-full
            bg-black/10
            blur-3xl"
          />

          {/* MOBILE + DESKTOP LAYOUT */}
          <div
            className="
            relative
            z-10
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            h-full
            px-4
            sm:px-8
            md:px-12
            py-10
            md:py-16
            gap-10"
          >

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="
              w-full
              lg:w-[68%]
              rounded-[26px]
              md:rounded-[36px]
              overflow-hidden
              border
              border-white/40
              bg-white/40
              backdrop-blur-xl
              shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
            >

              <img
                src="/images/clarity.png"
                alt="dashboard"
                className="
                w-full
                h-full
                object-cover"
              />

            </motion.div>

            {/* RIGHT SIDE CARDS */}
            <div
              className="
              w-full
              lg:w-auto
              flex
              flex-col
              sm:flex-row
              lg:flex-col
              items-stretch
              justify-center
              gap-6"
            >

              {/* INTERFACE */}
              <motion.div
                animate={{
                  y: [0, -18, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                flex-1
                lg:w-[260px]
                p-6
                rounded-[28px]
                bg-white/70
                backdrop-blur-xl
                border
                border-white/40"
              >
                <p className="text-black/40 text-sm mb-10">
                  Interface System
                </p>

                <div className="space-y-3">
                  <div className="h-3 rounded-full bg-black/10 w-full" />
                  <div className="h-3 rounded-full bg-black/10 w-[70%]" />
                  <div className="h-3 rounded-full bg-black/10 w-[50%]" />
                </div>
              </motion.div>

              {/* MOTION */}
              <motion.div
                animate={{
                  y: [0, 18, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                flex-1
                lg:w-[300px]
                p-8
                rounded-[30px]
                bg-black
                text-white"
              >

                <p className="text-white/40 text-sm mb-16">
                  Motion Engine
                </p>

                <div className="flex items-end gap-3 h-24">
                  <div className="w-6 h-10 bg-white/30 rounded-full" />
                  <div className="w-6 h-16 bg-white/50 rounded-full" />
                  <div className="w-6 h-20 bg-white rounded-full" />
                </div>

              </motion.div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
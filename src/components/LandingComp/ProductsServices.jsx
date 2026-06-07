import { motion } from "framer-motion";
import {
  Globe,
  Layers3,
  Sparkles,
  Cpu,
  ArrowUpRight,
  PenTool,
} from "lucide-react";

export default function ProductsServices() {
  const services = [
    {
      title: "Brand Identity",
      icon: PenTool,
      desc: "Premium visual systems, typography and modern brand direction.",
    },
    {
      title: "Web Experiences",
      icon: Globe,
      desc: "Immersive responsive websites with cinematic interactions.",
    },
    {
      title: "UI Systems",
      icon: Layers3,
      desc: "Minimal interfaces crafted with clarity and precision.",
    },
    {
      title: "AI Integration",
      icon: Cpu,
      desc: "Smart automation and futuristic digital workflows.",
    },
  ];

  return (
    <section className="relative bg-[#f5f5f2] overflow-hidden">

      {/* TOP BORDER */}
      <div className="h-[1px] w-full bg-black/5" />

      <div
        className="
        max-w-[1600px]
        mx-auto
        px-6
        md:px-12
        py-32
        md:py-44"
      >

        {/* HEADER */}
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-[760px]"
          >

            <p
              className="
              text-[13px]
              uppercase
              tracking-[0.3em]
              text-black/40
              mb-8"
            >
              Products & Services
            </p>

            <h2
              className="
              text-[42px]
              sm:text-[58px]
              md:text-[92px]
              leading-[0.92]
              tracking-[-5px]
              font-[350]"
            >
              Building
              <br />
              future-ready
              <br />
              digital systems
            </h2>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="
            max-w-[430px]
            pt-4"
          >

            <p
              className="
              text-[17px]
              leading-[1.9]
              text-black/55"
            >
              We create modern products and immersive digital
              experiences that blend minimalism, motion and
              intelligent systems into one seamless ecosystem.
            </p>

          </motion.div>

        </div>

        {/* SERVICES GRID */}
        <div
          className="
          mt-24
          md:mt-32
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6"
        >

          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                relative
                group
                min-h-[320px]
                rounded-[34px]
                border
                border-black/5
                bg-white/40
                backdrop-blur-xl
                overflow-hidden
                p-8"
              >

                {/* GRID */}
                <div
                  className="
                  absolute inset-0 opacity-40
                  bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)]
                  bg-[size:40px_40px]"
                />

                {/* GLOW */}
                <div
                  className="
                  absolute
                  right-0
                  top-0
                  w-40
                  h-40
                  rounded-full
                  bg-black/5
                  blur-3xl"
                />

                <div className="relative z-10">

                  {/* ICON */}
                  <div
                    className="
                    w-14
                    h-14
                    rounded-2xl
                    border
                    border-black/10
                    flex
                    items-center
                    justify-center
                    bg-white/60"
                  >
                    <Icon size={24} strokeWidth={1.7} />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                    mt-14
                    text-[28px]
                    leading-[1]
                    tracking-[-1px]
                    font-[350]"
                  >
                    {service.title}
                  </h3>

                  {/* DESC */}
                  <p
                    className="
                    mt-6
                    text-[15px]
                    leading-[1.9]
                    text-black/55"
                  >
                    {service.desc}
                  </p>

                 
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="
          mt-28
          md:mt-40
          flex
          items-center
          gap-4"
        >

          <Sparkles
            size={18}
            className="text-black/40"
          />

          <p
            className="
            text-[15px]
            uppercase
            tracking-[0.25em]
            text-black/40"
          >
            Crafted with clarity, motion and precision
          </p>

        </motion.div>

      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      name: "DorsBill",
      category: "Billing Platform",
      desc: "Modern billing and invoice management system built for smart businesses.",
      image: "/images/dorsbill.png",
    },
    {
      name: "DotPrint",
      category: "Print Ecosystem",
      desc: "Premium digital print workflow platform for modern printing presses.",
      image: "/images/dotprint.png",
    },
    {
      name: "Shadi Card",
      category: "Invitation Studio",
      desc: "Luxury wedding card and invitation experience with modern customization.",
      image: "/images/shadicard.png",
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
        px-5
        sm:px-6
        md:px-12
        py-24
        md:py-44"
      >

        {/* HEADER */}
        <div
          className="
          flex
          flex-col
          lg:flex-row
          justify-between
          gap-14
          md:gap-16"
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
              text-[11px]
              sm:text-[13px]
              uppercase
              tracking-[0.3em]
              text-black/40
              mb-6
              md:mb-8"
            >
              Products
            </p>

            <h2
              className="
              text-[42px]
              sm:text-[58px]
              md:text-[92px]
              leading-[1]
              tracking-[-2px]
              md:tracking-[-5px]
              font-[350]
              flex
              flex-col
              gap-2
              md:gap-4"
            >
              <span>Products</span>
              <span>built for</span>
              <span>modern choice</span>
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
              A curated ecosystem of digital products crafted with
              premium aesthetics, intelligent systems and immersive
              user experiences.
            </p>

          </motion.div>

        </div>

        {/* PRODUCTS */}
        <div className="mt-20 md:mt-40 relative">

          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
              relative
              md:sticky
              md:top-0
              min-h-auto
              md:h-screen
              flex
              items-center
              justify-center
              mb-10
              md:mb-0"
              style={{
                zIndex: i + 1,
              }}
            >

              {/* CARD */}
              <motion.div
                whileHover={{
                  y: -4,
                }}
                className="
                group
                relative
                w-full
                overflow-hidden
                rounded-[28px]
                md:rounded-[40px]
                border
                border-black/5
                bg-white/60
                backdrop-blur-2xl
                shadow-[0_20px_60px_rgba(0,0,0,0.05)]
                md:shadow-[0_30px_80px_rgba(0,0,0,0.06)]"
              >

                {/* GRID */}
                <div
                  className="
                  absolute inset-0 opacity-40
                  bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)]
                  bg-[size:32px_32px]
                  md:bg-[size:50px_50px]"
                />

                <div
                  className="
                  relative
                  z-10
                  flex
                  flex-col
                  lg:flex-row
                  min-h-auto
                  md:min-h-[620px]"
                >

                  {/* IMAGE */}
                  <div
                    className="
                    relative
                    w-full
                    lg:w-[55%]
                    overflow-hidden
                    h-[260px]
                    sm:h-[360px]
                    md:h-auto"
                  >

                    <motion.img
                      initial={{
                        scale: 1.08,
                      }}
                      whileInView={{
                        scale: 1,
                      }}
                      transition={{
                        duration: 1.4,
                      }}
                      src={product.image}
                      alt={product.name}
                      className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-1000
                      group-hover:scale-[1.03]"
                    />

                    {/* OVERLAY */}
                    <div
                      className="
                      absolute inset-0
                      bg-gradient-to-r
                      from-transparent
                      to-black/10"
                    />

                  </div>

                  {/* CONTENT */}
                  <div
                    className="
                    relative
                    w-full
                    lg:w-[45%]
                    flex
                    flex-col
                    justify-between
                    p-6
                    sm:p-8
                    md:p-12"
                  >

                    {/* GLOW */}
                    <div
                      className="
                      absolute
                      right-[-20%]
                      top-[-20%]
                      w-[220px]
                      h-[220px]
                      md:w-[300px]
                      md:h-[300px]
                      rounded-full
                      bg-black/[0.04]
                      blur-3xl"
                    />

                    <div className="relative z-10">

                      {/* CATEGORY */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: -20,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: 0.1,
                        }}
                        className="
                        inline-flex
                        items-center
                        px-4
                        py-2
                        rounded-full
                        bg-black/[0.03]
                        border
                        border-black/5
                        text-[9px]
                        md:text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-black/45"
                      >
                        {product.category}
                      </motion.div>

                      {/* TITLE */}
                      <motion.h3
                        initial={{
                          opacity: 0,
                          y: 30,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.9,
                          delay: 0.2,
                        }}
                        className="
                        mt-8
                        md:mt-10
                        text-[42px]
                        sm:text-[54px]
                        md:text-[72px]
                        leading-[0.92]
                        tracking-[-2px]
                        md:tracking-[-5px]
                        font-[320]"
                      >
                        {product.name}
                      </motion.h3>

                      {/* DESC */}
                      <motion.p
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.9,
                          delay: 0.3,
                        }}
                        className="
                        mt-6
                        md:mt-8
                        text-[14px]
                        md:text-[15px]
                        leading-[1.9]
                        md:leading-[2]
                        text-black/55
                        max-w-[380px]"
                      >
                        {product.desc}
                      </motion.p>

                    </div>

                    {/* BUTTON */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.4,
                      }}
                      className="
                      relative
                      z-10
                      mt-10
                      md:mt-16"
                    >

                      <motion.div
                        whileHover={{
                          x: 5,
                          y: -5,
                          rotate: 6,
                        }}
                        className="
                        w-12
                        h-12
                        md:w-14
                        md:h-14
                        rounded-full
                        bg-black
                        text-white
                        flex
                        items-center
                        justify-center"
                      >
                        <ArrowUpRight size={18} />
                      </motion.div>

                    </motion.div>

                  </div>

                </div>

              </motion.div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
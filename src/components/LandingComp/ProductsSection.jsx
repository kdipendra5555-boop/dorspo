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
              Products
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
              Products
              <br />
              built for
              <br />
              modern choice
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
              A curated ecosystem of digital products crafted with
              premium aesthetics, intelligent systems and immersive
              user experiences.
            </p>

          </motion.div>

        </div>

       {/* PRODUCTS */}
<div className="mt-24 md:mt-40 relative">

  {products.map((product, i) => (
    <motion.div
      key={product.name}
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.94,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.7,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
      sticky
      top-0
      h-screen
      flex
      items-center
      justify-center"
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
        max-w-[1400px]
        overflow-hidden
        rounded-[40px]
        border
        border-black/5
        bg-white/60
        backdrop-blur-2xl
        shadow-[0_30px_80px_rgba(0,0,0,0.06)]"
      >

        {/* GRID */}
        <div
          className="
          absolute inset-0 opacity-40
          bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)]
          bg-[size:50px_50px]"
        />

        <div
          className="
          relative
          z-10
          flex
          flex-col
          lg:flex-row
          min-h-[620px]"
        >

          {/* IMAGE */}
          <div
            className="
            relative
            w-full
            lg:w-[55%]
            overflow-hidden"
          >

            <motion.img
              initial={{
                scale: 1.1,
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
            p-8
            md:p-12"
          >

            {/* GLOW */}
            <div
              className="
              absolute
              right-[-20%]
              top-[-20%]
              w-[300px]
              h-[300px]
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
                text-[10px]
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
                mt-10
                text-[48px]
                sm:text-[60px]
                md:text-[72px]
                leading-[0.9]
                tracking-[-5px]
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
                mt-8
                text-[15px]
                leading-[2]
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
              mt-16"
            >

              <motion.div
                whileHover={{
                  x: 5,
                  y: -5,
                  rotate: 6,
                }}
                className="
                w-14
                h-14
                rounded-full
                bg-black
                text-white
                flex
                items-center
                justify-center"
              >
                <ArrowUpRight size={20} />
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
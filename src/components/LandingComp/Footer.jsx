import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f5f5f2]">

      {/* TOP LINE */}
      <div className="h-[1px] w-full bg-black/5" />

      {/* GRID */}
      <div
        className="
        absolute inset-0 opacity-40
        bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)]
        bg-[size:90px_90px]"
      />

      {/* GLOW */}
      <div
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[1000px]
        h-[1000px]
        rounded-full
        bg-black/[0.03]
        blur-3xl"
      />

      <div
        className="
        relative
        z-10
        max-w-[1700px]
        mx-auto
        px-6
        md:px-12
        pt-24
        md:pt-32
        pb-10"
      >

    {/* SIRF IS H1 SECTION KO REPLACE KARO */}

<motion.h1
  whileHover={{
    scale: 1.015,
  }}
  transition={{
    duration: 0.5,
  }}
  className="
  group
  relative
  flex
  items-center
  justify-center
  gap-8
  cursor-default"
>

 
 {/* MOBILE LOGO */}
<motion.img
  src="/images/logodor.png"
  alt="logo"
  initial={{
    opacity: 0,
    scale: 0.6,
    y: 30,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.5,
  }}
  transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }}
  animate={{
    y: [0, -8, 0],
  }}
  className="
  absolute
  z-20

  -top-16
  sm:-top-20

  w-[90px]
  h-[90px]

  sm:w-[130px]
  sm:h-[130px]

  object-contain

  md:hidden"
/>

  {/* DESKTOP LOGO */}
  <motion.img
    src="/images/logodor.png"
    alt="logo"
    className="
    hidden
    md:block
    w-[220px]
    h-[220px]
    object-contain

    opacity-0
    translate-x-10
    scale-[0.7]
    rotate-[-8deg]

    transition-all
    duration-700
    ease-out

    group-hover:opacity-100
    group-hover:translate-x-0
    group-hover:scale-100
    group-hover:rotate-0"
  />

  {/* TEXT */}
  <span
    className="
    text-[92px]
    sm:text-[180px]
    md:text-[340px]

    leading-none

    tracking-[-6px]
    sm:tracking-[-10px]
    md:tracking-[-16px]

    font-[500]
    whitespace-nowrap

    text-black/[0.06]

    transition-all
    duration-700

    group-hover:text-transparent
    group-hover:bg-clip-text
    group-hover:bg-gradient-to-r
    group-hover:from-[#111111]
    group-hover:via-[#4b4b4b]
    group-hover:to-[#9b9b9b]"
  >
    dorspo
  </span>

</motion.h1>


      {/* LINKS AREA */}
<div
  className="
  mt-12
  pt-16
  border-t
  border-black/5"
>

  <div
    className="
    grid
    grid-cols-1
    sm:grid-cols-2
    xl:grid-cols-4
    gap-8"
  >

    {/* PRODUCTS */}
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="
      relative
      rounded-[28px]
      border
      border-black/5
      bg-white/45
      backdrop-blur-xl
      p-8
      overflow-hidden"
    >

      {/* GLOW */}
      <div
        className="
        absolute
        right-0
        top-0
        w-40
        h-40
        rounded-full
        bg-black/[0.03]
        blur-3xl"
      />

      <p
        className="
        relative
        z-10
        text-[11px]
        uppercase
        tracking-[0.32em]
        text-black/35
        mb-10"
      >
        Products
      </p>

      <div className="relative z-10 space-y-5">

        {["Dops"].map((item) => (
          <motion.a
            key={item}
            href="/"
            whileHover={{
              x: 6,
            }}
            className="
            flex
            items-center
            justify-between
            text-[15px]
            text-black/65
            hover:text-black
            transition"
          >

            <span>{item}</span>

            <ArrowUpRight
              size={14}
              className="opacity-40"
            />

          </motion.a>
        ))}

      </div>

    </motion.div>

    {/* SERVICES */}
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="
      relative
      rounded-[28px]
      border
      border-black/5
      bg-white/45
      backdrop-blur-xl
      p-8
      overflow-hidden"
    >

      <div
        className="
        absolute
        right-0
        top-0
        w-40
        h-40
        rounded-full
        bg-black/[0.03]
        blur-3xl"
      />

      <p
        className="
        relative
        z-10
        text-[11px]
        uppercase
        tracking-[0.32em]
        text-black/35
        mb-10"
      >
        Services
      </p>

      <div className="relative z-10 space-y-5">

        {[
          "DorsBill",
          "DotPrint",
          "ShadiCard",
        ].map((item) => (
          <motion.a
            key={item}
            href="/"
            whileHover={{
              x: 6,
            }}
            className="
            flex
            items-center
            justify-between
            text-[15px]
            text-black/65
            hover:text-black
            transition"
          >

            <span>{item}</span>

            <ArrowUpRight
              size={14}
              className="opacity-40"
            />

          </motion.a>
        ))}

      </div>

    </motion.div>

    {/* COMPANY */}
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="
      relative
      rounded-[28px]
      border
      border-black/5
      bg-white/45
      backdrop-blur-xl
      p-8
      overflow-hidden"
    >

      <div
        className="
        absolute
        right-0
        top-0
        w-40
        h-40
        rounded-full
        bg-black/[0.03]
        blur-3xl"
      />

      <p
        className="
        relative
        z-10
        text-[11px]
        uppercase
        tracking-[0.32em]
        text-black/35
        mb-10"
      >
        Company
      </p>

      <div className="relative z-10 space-y-5">

        {[
          "About Us",
          "Contact",
          "Privacy Policy",
          "Terms & Conditions",
        ].map((item) => (
          <motion.a
            key={item}
            href="/"
            whileHover={{
              x: 6,
            }}
            className="
            flex
            items-center
            justify-between
            text-[15px]
            text-black/65
            hover:text-black
            transition"
          >

            <span>{item}</span>

            <ArrowUpRight
              size={14}
              className="opacity-40"
            />

          </motion.a>
        ))}

      </div>

    </motion.div>

    {/* CONTACT */}
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="
      relative
      rounded-[28px]
      border
      border-black/5
      bg-black
      text-white
      p-8
      overflow-hidden"
    >

      <div
        className="
        absolute
        right-[-20%]
        top-[-20%]
        w-48
        h-48
        rounded-full
        bg-white/10
        blur-3xl"
      />

      <p
        className="
        relative
        z-10
        text-[11px]
        uppercase
        tracking-[0.32em]
        text-white/40
        mb-10"
      >
        Contact
      </p>

      <div className="relative z-10 space-y-6">

        <div>

          <p className="text-white/35 text-sm mb-2">
            Email
          </p>

          <p className="text-[15px] text-white/80">
            hello@dorspo.com
          </p>

        </div>

        <div>

          <p className="text-white/35 text-sm mb-2">
            Phone
          </p>

          <p className="text-[15px] text-white/80">
            +91 98765 43210
          </p>

        </div>

        <div>

          <p className="text-white/35 text-sm mb-2">
            Address
          </p>

          <p className="text-[15px] leading-[1.8] text-white/80">
            Uttar Pradesh,
            <br />
            India
          </p>

        </div>

      </div>

    </motion.div>

  </div>

</div>

        {/* BOTTOM */}
        <div
          className="
          mt-20
          pt-8
          border-t
          border-black/5
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6"
        >

          <p
            className="
            text-[12px]
            uppercase
            tracking-[0.25em]
            text-black/30"
          >
            © 2026 Dorspo — All Rights Reserved
          </p>

          <p
            className="
            text-[12px]
            uppercase
            tracking-[0.25em]
            text-black/30"
          >
            Crafted with clarity & precision
          </p>

        </div>

      </div>
    </footer>
  );
}
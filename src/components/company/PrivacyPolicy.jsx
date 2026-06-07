import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../LandingComp/Navbar";

export default function PrivacyPolicy() {

  return (
    <section className="relative overflow-hidden bg-[#f5f5f2] text-black min-h-screen">

      <Navbar />

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
          right-[6%]
          top-[22%]
          hidden
          md:block"
        >
          <div className="w-3 h-3 bg-black" />
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

          {/* PARTICLES */}
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

          {/* CENTER GLOW */}
          <div
            className="
            absolute
            inset-[30%]
            rounded-full
            bg-black/5
            blur-3xl"
          />

        </motion.div>

      </div>

      {/* HERO */}
      <div className="relative z-10">

        <div className="h-[1px] w-full bg-black/5" />

        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-20">

          {/* HERO CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="
            relative
            px-2
            md:px-6"
          >

            {/* TAG */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="
              inline-flex
              items-center
              gap-3
              mb-10"
            >

              <div className="w-2 h-2 rounded-full bg-black/50" />

              <p
                className="
                text-[11px]
                uppercase
                tracking-[0.32em]
                text-black/45"
              >
                Privacy & Security
              </p>

            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="
              text-[58px]
              sm:text-[88px]
              md:text-[120px]
              leading-[0.9]
              tracking-[-7px]
              font-[500]
              whitespace-nowrap"
            >

              <span className="italic font-[400]">
                Privacy Policy
              </span>

            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              className="
              mt-10
              text-lg
              leading-[1.9]
              text-black/55
              max-w-2xl"
            >
              This Privacy Policy explains how we collect,
              use, process, and protect user information
              across our products, services, and digital platforms.
            </motion.p>

          </motion.div>

        </div>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pb-32">

        <div className="space-y-8">

          {[
            {
              title: "Information Collection",
              text:
                "We may collect limited personal information such as name, email address, phone number, business details, and communication data required for providing our services.",
            },

            {
              title: "How We Use Data",
              text:
                "Collected information is used for communication, customer support, project management, analytics, service improvement, billing, and maintaining platform security.",
            },

            {
              title: "Cookies & Analytics",
              text:
                "Our platform may use cookies, analytics tools, and tracking technologies to improve user experience, monitor performance, and understand visitor behavior.",
            },

            {
              title: "Data Protection",
              text:
                "We implement reasonable security measures to protect user information from unauthorized access, misuse, disclosure, or alteration.",
            },

            {
              title: "Third-Party Services",
              text:
                "Some services may integrate third-party platforms including hosting providers, payment gateways, analytics systems, APIs, or cloud storage providers.",
            },

            {
              title: "Data Sharing",
              text:
                "We do not intentionally sell or trade personal user information. Data may only be shared when legally required or necessary for service delivery.",
            },

            {
              title: "User Rights",
              text:
                "Users may request access, correction, or deletion of personal information where applicable under relevant laws and regulations.",
            },

            {
              title: "Policy Updates",
              text:
                "We reserve the right to modify or update this Privacy Policy at any time. Continued use of the platform constitutes acceptance of updated policies.",
            },

          ].map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.04,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -4,
              }}
              className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-black/5
              bg-white/55
              backdrop-blur-2xl
              p-8
              md:p-10
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
            >

              {/* CARD GLOW */}
              <div
                className="
                absolute
                right-[-10%]
                top-[-20%]
                w-56
                h-56
                rounded-full
                bg-black/[0.025]
                blur-3xl"
              />

              <div className="relative z-10 grid md:grid-cols-12 gap-10">

                {/* LEFT */}
                <div className="md:col-span-4">

                  <div
                    className="
                    inline-flex
                    items-center
                    justify-center
                    w-12
                    h-12
                    rounded-2xl
                    border
                    border-black/5
                    bg-white/80
                    mb-6"
                  >
                    <span className="text-black/40 text-sm">
                      0{index + 1}
                    </span>
                  </div>

                  <h2
                    className="
                    text-2xl
                    md:text-3xl
                    tracking-[-1px]
                    font-[500]
                    leading-[1.1]"
                  >
                    {item.title}
                  </h2>

                </div>

                {/* RIGHT */}
                <div className="md:col-span-8">

                  <p
                    className="
                    text-black/60
                    text-lg
                    leading-[2]
                    font-[400]"
                  >
                    {item.text}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
          mt-24
          flex
          flex-col
          md:flex-row
          items-start
          md:items-center
          justify-between
          gap-8
          border-t
          border-black/5
          pt-12"
        >

          <div>

            <p className="text-black/35 text-sm uppercase tracking-[0.25em] mb-3">
              Last Updated
            </p>

            <p className="text-black/65 text-lg">
              June 2026
            </p>

          </div>

          <Link
            to="/"
            className="
            inline-flex
            items-center
            justify-center
            gap-3
            px-8
            py-4
            rounded-full
            bg-black
            text-white
            text-sm
            tracking-wide
            hover:scale-[1.03]
            transition-all
            duration-300"
          >
            Back Home
          </Link>

        </motion.div>

      </div>

    </section>
  )

}
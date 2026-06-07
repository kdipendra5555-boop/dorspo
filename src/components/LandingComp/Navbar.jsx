import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {

  const [hideText, setHideText] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 80) {

        setHideText(true);

      } else {

        setHideText(false);

      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <motion.nav
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      "
    >

      {/* NAVBAR */}
      <div
        className="
        flex
        items-center
        justify-between
        px-4
        sm:px-6
        md:px-10
        py-4
        sm:py-5
        "
      >

        {/* LEFT */}
        <motion.div
          whileHover={{
            opacity: 0.85,
          }}
          className="
          flex
          items-center
          gap-2
          sm:gap-4
          cursor-pointer
          min-w-0
          "
        >

          {/* LOGO */}
          <img
            src="/images/logo.png"
            alt="dorspo"
            className="
            w-10
            h-10
            sm:w-14
            sm:h-14
            md:w-16
            md:h-16
            object-contain
            shrink-0
            "
          />

          {/* BRAND */}
          <div
            className="
            flex
            items-center
            gap-1
            sm:gap-2
            min-w-0
            "
          >

            {/* SMALL TEXT */}
<p
  className="
  text-[24px]
  sm:text-[34px]
  md:text-[46px]
  lg:text-[58px]
  font-[600]
  tracking-[-2px]
  leading-none
  whitespace-nowrap
  "
>
  dorspo
</p>

           {/* BIG TEXT */}
<motion.h1
  animate={{
    opacity: hideText ? 0 : 1,
    x: hideText ? -40 : 0,
    width: hideText ? 0 : "auto",
    marginLeft: hideText ? 0 : "10px",
    y: hideText ? -10 : 8,
  }}
  transition={{
    duration: 0.45,
  }}
  className="
  hidden
  lg:block
  overflow-hidden
  whitespace-nowrap
  text-[78px]
  xl:text-[96px]
  leading-[0.9]
  tracking-[-6px]
  font-[320]
  "
>
  timeless
</motion.h1>

          </div>

        </motion.div>

        {/* RIGHT */}
        <div
          className="
          flex
          items-center
          gap-2
          sm:gap-4
          shrink-0
          "
        >

          {/* TEXT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
              width: 0,
            }}
            animate={{
              opacity: menuOpen ? 1 : 0,
              x: menuOpen ? 0 : 20,
              width: menuOpen ? "auto" : 0,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
            overflow-hidden
            block
            "
          >

            <motion.h2
              animate={{
                letterSpacing: menuOpen ? "3px" : "1px",
              }}
              transition={{
                duration: 0.45,
              }}
              className="
              text-[10px]
              sm:text-[14px]
              md:text-[18px]
              lg:text-[24px]
              leading-[1]
              font-[350]
              tracking-[2px]
              text-black/80
              whitespace-nowrap
              
              "
            >
              enjoy with dorspo
            </motion.h2>

          </motion.div>

          {/* MENU BUTTON */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{
              rotate: 90,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.92,
            }}
            transition={{
              duration: 0.45,
            }}
            className="
            w-10
            h-10
            sm:w-11
            sm:h-11
            md:w-12
            md:h-12
            rounded-full
            border
            border-black/10
            flex
            items-center
            justify-center
            bg-white/70
            backdrop-blur-xl
            shadow-[0_8px_30px_rgba(0,0,0,0.06)]
            cursor-pointer
            shrink-0
            "
          >

            <Menu
              size={18}
              strokeWidth={1.8}
            />

          </motion.button>

        </div>

      </div>

    </motion.nav>

  );
}
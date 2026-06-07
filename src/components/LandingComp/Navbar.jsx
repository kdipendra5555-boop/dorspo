import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      px-6
      md:px-12
      py-6"
    >
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <motion.div
          whileHover={{ opacity: 0.7 }}
          className="
          text-[22px]
          md:text-[28px]
          font-[500]
          tracking-[-1px]
          cursor-pointer"
        >
          dorspo
        </motion.div>

        {/* EMPTY CENTER */}
        <div className="hidden md:block flex-1" />

        {/* MENU BUTTON */}
        <motion.div
          whileHover={{
            rotate: 90,
            scale: 1.05,
          }}
          transition={{ duration: 0.4 }}
          className="
          w-11
          h-11
          rounded-full
          border
          border-black/10
          flex
          items-center
          justify-center
          bg-white/50
          backdrop-blur-md
          cursor-pointer"
        >
          <Menu size={18} strokeWidth={1.8} />
        </motion.div>

      </div>

     
    </motion.nav>
  );
}
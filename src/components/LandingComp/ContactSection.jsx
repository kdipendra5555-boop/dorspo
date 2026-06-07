import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f2]">

      {/* TOP LINE */}
      <div className="h-[1px] w-full bg-black/5" />

      {/* BACKGROUND */}
      <div
        className="
        absolute inset-0
        bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)]
        bg-[size:40px_40px]
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
        w-[320px]
        h-[320px]
        md:w-[900px]
        md:h-[900px]
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
          xl:flex-row
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
            className="max-w-[850px]"
          >

            <p
              className="
              text-[11px]
              sm:text-[13px]
              uppercase
              tracking-[0.35em]
              text-black/35
              mb-6
              md:mb-10"
            >
              Contact
            </p>

            <h2
              className="
              text-[46px]
              sm:text-[72px]
              md:text-[110px]
              leading-[0.92]
              tracking-[-2px]
              md:tracking-[-6px]
              font-[330]
              flex
              flex-col
              gap-2
              md:gap-4"
            >
              <span>Let’s build</span>
              <span>something</span>
              <span>timeless</span>
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
            xl:pt-6"
          >

            <p
              className="
              text-[15px]
              sm:text-[17px]
              leading-[1.9]
              md:leading-[2]
              text-black/50"
            >
              Have a project, idea or collaboration in mind?
              Reach out and let’s create a premium digital
              experience together.
            </p>

          </motion.div>

        </div>

        {/* CONTACT BOX */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
          }}
          className="
          relative
          mt-20
          md:mt-36
          overflow-hidden
          rounded-[32px]
          md:rounded-[48px]
          border
          border-black/5
          bg-white/55
          backdrop-blur-2xl"
        >

          <div
            className="
            flex
            flex-col
            lg:flex-row"
          >

            {/* LEFT INFO */}
            <div
              className="
              relative
              w-full
              lg:w-[38%]
              p-6
              sm:p-8
              md:p-16
              border-b
              lg:border-b-0
              lg:border-r
              border-black/5"
            >

              {/* GLOW */}
              <div
                className="
                absolute
                left-0
                top-0
                w-[180px]
                h-[180px]
                md:w-[300px]
                md:h-[300px]
                rounded-full
                bg-black/[0.04]
                blur-3xl"
              />

              <div className="relative z-10">

                <h3
                  className="
                  text-[38px]
                  sm:text-[48px]
                  md:text-[56px]
                  leading-[0.95]
                  tracking-[-2px]
                  md:tracking-[-3px]
                  font-[340]
                  flex
                  flex-col
                  gap-1"
                >
                  <span>Start your</span>
                  <span>next project</span>
                </h3>

                <p
                  className="
                  mt-6
                  md:mt-8
                  text-[14px]
                  md:text-[16px]
                  leading-[1.9]
                  md:leading-[2]
                  text-black/55
                  max-w-[320px]"
                >
                  We design modern interfaces, premium brands
                  and immersive digital experiences.
                </p>

                {/* CONTACT INFO */}
                <div className="mt-10 md:mt-16 space-y-6 md:space-y-8">

                  <div className="flex items-start gap-4">

                    <div
                      className="
                      w-11
                      h-11
                      md:w-12
                      md:h-12
                      rounded-2xl
                      bg-black/[0.04]
                      flex
                      items-center
                      justify-center"
                    >
                      <Mail size={17} />
                    </div>

                    <div>
                      <p className="text-xs md:text-sm text-black/40 mb-1">
                        Email
                      </p>

                      <p className="text-[14px] md:text-[16px] text-black/75 break-all">
                        hello@dorspo.com
                      </p>
                    </div>

                  </div>

                  <div className="flex items-start gap-4">

                    <div
                      className="
                      w-11
                      h-11
                      md:w-12
                      md:h-12
                      rounded-2xl
                      bg-black/[0.04]
                      flex
                      items-center
                      justify-center"
                    >
                      <Phone size={17} />
                    </div>

                    <div>
                      <p className="text-xs md:text-sm text-black/40 mb-1">
                        Phone
                      </p>

                      <p className="text-[14px] md:text-[16px] text-black/75">
                        +91 98765 43210
                      </p>
                    </div>

                  </div>

                  <div className="flex items-start gap-4">

                    <div
                      className="
                      w-11
                      h-11
                      md:w-12
                      md:h-12
                      rounded-2xl
                      bg-black/[0.04]
                      flex
                      items-center
                      justify-center"
                    >
                      <MapPin size={17} />
                    </div>

                    <div>
                      <p className="text-xs md:text-sm text-black/40 mb-1">
                        Location
                      </p>

                      <p className="text-[14px] md:text-[16px] text-black/75">
                        Uttar Pradesh, India
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* FORM */}
            <div
              className="
              relative
              w-full
              lg:w-[62%]
              p-6
              sm:p-8
              md:p-16"
            >

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

                {/* NAME */}
                <div>

                  <label
                    className="
                    text-[11px]
                    md:text-[12px]
                    uppercase
                    tracking-[0.22em]
                    md:tracking-[0.25em]
                    text-black/35"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name here"
                    className="
                    mt-3
                    md:mt-4
                    w-full
                    h-14
                    md:h-16
                    rounded-2xl
                    border
                    border-black/5
                    bg-black/[0.02]
                    px-5
                    md:px-6
                    outline-none
                    text-[14px]
                    md:text-[15px]
                    text-black/80
                    placeholder:text-black/25
                    focus:border-black/15
                    transition"
                  />

                </div>

                {/* EMAIL */}
                <div>

                  <label
                    className="
                    text-[11px]
                    md:text-[12px]
                    uppercase
                    tracking-[0.22em]
                    md:tracking-[0.25em]
                    text-black/35"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="youremail@example.com"
                    className="
                    mt-3
                    md:mt-4
                    w-full
                    h-14
                    md:h-16
                    rounded-2xl
                    border
                    border-black/5
                    bg-black/[0.02]
                    px-5
                    md:px-6
                    outline-none
                    text-[14px]
                    md:text-[15px]
                    text-black/80
                    placeholder:text-black/25
                    focus:border-black/15
                    transition"
                  />

                </div>

                {/* SERVICE */}
                <div className="md:col-span-2">

                  <label
                    className="
                    text-[11px]
                    md:text-[12px]
                    uppercase
                    tracking-[0.22em]
                    md:tracking-[0.25em]
                    text-black/35"
                  >
                    Service
                  </label>

                  <input
                    type="text"
                    placeholder="Branding / Website / Printing"
                    className="
                    mt-3
                    md:mt-4
                    w-full
                    h-14
                    md:h-16
                    rounded-2xl
                    border
                    border-black/5
                    bg-black/[0.02]
                    px-5
                    md:px-6
                    outline-none
                    text-[14px]
                    md:text-[15px]
                    text-black/80
                    placeholder:text-black/25
                    focus:border-black/15
                    transition"
                  />

                </div>

                {/* MESSAGE */}
                <div className="md:col-span-2">

                  <label
                    className="
                    text-[11px]
                    md:text-[12px]
                    uppercase
                    tracking-[0.22em]
                    md:tracking-[0.25em]
                    text-black/35"
                  >
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="
                    mt-3
                    md:mt-4
                    w-full
                    rounded-[24px]
                    md:rounded-[28px]
                    border
                    border-black/5
                    bg-black/[0.02]
                    px-5
                    md:px-6
                    py-5
                    outline-none
                    resize-none
                    text-[14px]
                    md:text-[15px]
                    text-black/80
                    placeholder:text-black/25
                    focus:border-black/15
                    transition"
                  />

                </div>

              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                group
                mt-8
                md:mt-10
                h-14
                md:h-16
                px-7
                md:px-8
                rounded-full
                bg-black
                text-white
                flex
                items-center
                gap-3
                md:gap-4
                text-[14px]
                md:text-[15px]
                tracking-[0.08em]"
              >

                Send Message

                <motion.div
                  whileHover={{
                    x: 4,
                    y: -4,
                  }}
                >
                  <ArrowUpRight size={18} />
                </motion.div>

              </motion.button>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
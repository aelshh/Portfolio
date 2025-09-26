"use client";
import React from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { FaPaperPlane, FaPhone, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import sendEmail from "@/actions/sendEmail";
import FormSubmitBtn from "./FormSubmitBtn";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  const handleCall = () => {
    window.open("tel:+918707479934", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/message/Z2RA4ZVK4T4JL1", "_blank");
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center w-[min(100%,38rem)] mb-20 sm:mb-28"
      id="contact"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:hello@adarshchaudhary.in">
          hello@adarshchaudhary.in
        </a>{" "}
        or call me at{" "}
        <a className="underline" href="tel:+918707479934">
          +91 8707479934
        </a>{" "}
        or through the options below
      </p>

      {/* Contact Options - Matching Intro Section Style */}
      <motion.div
        className="flex justify-center gap-2 px-4 items-center flex-col sm:flex-row text-lg font-medium mt-8"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* Call Button - Primary Style */}
        <button
          onClick={handleCall}
          className="group flex items-center bg-gray-900 px-7 py-3 text-white rounded-full gap-2 hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 transition"
        >
          Call me here{" "}
          <FaPhone className="opacity-70 group-hover:translate-x-1 transition translate-y-0.5" />
        </button>

        {/* WhatsApp Button - Secondary Style */}
        <button
          onClick={handleWhatsApp}
          className="group flex items-center bg-white px-7 py-3 rounded-full gap-2 hover:scale-110 focus:scale-110 active:scale-105 transition border borderBlack dark:bg-white/10 dark:text-white/80"
        >
          WhatsApp me{" "}
          <FaWhatsapp className="opacity-70 group-hover:translate-x-1 transition translate-y-0.5" />
        </button>
      </motion.div>

      {/* Email Form */}
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          className="h-14 rounded-lg p-4 borderBlack dark:bg-white/80 dark:focus:bg-white dark:outline-none transition-all"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg p-4 borderBlack dark:bg-white/80 dark:focus:bg-white dark:outline-none transition-all"
          placeholder="Your message"
          name="message"
          required
          maxLength={500}
        />
        <FormSubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;

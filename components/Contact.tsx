"use client";
import React from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import sendEmail from "@/actions/sendEmail";
import FormSubmitBtn from "./FormSubmitBtn";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center w-[min(100%,38rem)]  mb-20 sm:mb-28"
      id="contact"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Plesae contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        className="mt-10  flex flex-col"
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
          className="h-14 rounded-lg p-4 borderBlack"
          placeholder="Your email"
        />
        <textarea
          className=" h-52 my-3 rounded-lg p-4 borderBlack"
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

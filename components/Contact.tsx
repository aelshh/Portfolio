"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { HiPhone, HiMail, HiPaperAirplane } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import toast from "react-hot-toast";
import sendEmail from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);
    setSending(false);

    if (result?.error) {
      toast.error(result.error);
      return;
    }

    toast.success("Message sent successfully!");
    formRef.current?.reset();
  };

  return (
    <section ref={ref} id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading number="05" title="Get in Touch" sectionName="Contact" />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-4"
          >
            <p className="text-muted-light dark:text-muted-dark leading-relaxed text-sm">
              Have a project in mind or just want to chat? I&apos;m always open to
              new opportunities and ideas.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+918707479934"
                className="flex items-center gap-3 p-3 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-accent/50 transition-all duration-300 group"
              >
                <HiPhone className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm group-hover:text-accent transition-colors">
                  +91 8707479934
                </span>
              </a>
              <a
                href="mailto:hello@adarshchaudhary.in"
                className="flex items-center gap-3 p-3 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-accent/50 transition-all duration-300 group"
              >
                <HiMail className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm group-hover:text-accent transition-colors">
                  hello@adarshchaudhary.in
                </span>
              </a>
              <a
                href="https://wa.me/918707479934"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-accent/50 transition-all duration-300 group"
              >
                <FaWhatsapp className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm group-hover:text-accent transition-colors">
                  WhatsApp
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="relative">
                <input
                  type="email"
                  name="senderEmail"
                  required
                  maxLength={500}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                />
                <label className="absolute left-4 top-5 text-sm text-muted-light dark:text-muted-dark peer-focus:text-xs peer-focus:top-2 peer-focus:text-accent peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2 transition-all duration-200">
                  Your email
                </label>
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  required
                  maxLength={5000}
                  rows={5}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300 resize-none"
                />
                <label className="absolute left-4 top-5 text-sm text-muted-light dark:text-muted-dark peer-focus:text-xs peer-focus:top-2 peer-focus:text-accent peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2 transition-all duration-200">
                  Your message
                </label>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full px-6 py-3 rounded-xl bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-accent/20"
              >
                {sending ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <HiPaperAirplane className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

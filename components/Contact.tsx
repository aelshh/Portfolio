"use client";

import { useRef, useState } from "react";
import { HiPaperAirplane } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import toast from "react-hot-toast";
import sendEmail from "@/actions/sendEmail";
import RevealSection from "@/components/ui/RevealSection";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionHeading from "@/components/SectionHeading";

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
    <section
      ref={ref}
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          number="05"
          title="Let's Work Together"
          monoLabel="Get in Touch"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          {/* Left: CTA + Links */}
          <RevealSection delay={0.2} className="space-y-10">
            <div className="space-y-4">
              <p className="text-2xl text-text-secondary leading-relaxed">
                Have a project in mind or just want to chat? I&apos;m always open
                to new opportunities and ideas. Let&apos;s build something
                extraordinary together.
              </p>
            </div>

            <div className="space-y-4">
              <MagneticButton
                href="mailto:hello@adarshchaudhary.in"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card hover:border-primary/30 transition-all duration-300 group w-full"
                aria-label="Send email to Adarsh"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <svg
                    className="w-5 h-5 text-primary-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-text-muted font-mono">Email</div>
                  <div className="text-sm text-text-primary group-hover:text-primary-light transition-colors">
                    hello@adarshchaudhary.in
                  </div>
                </div>
              </MagneticButton>

              <MagneticButton
                href="tel:+918707479934"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card hover:border-primary/30 transition-all duration-300 group w-full"
                aria-label="Call Adarsh"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <svg
                    className="w-5 h-5 text-primary-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-text-muted font-mono">Phone</div>
                  <div className="text-sm text-text-primary group-hover:text-primary-light transition-colors">
                    +91 8707479934
                  </div>
                </div>
              </MagneticButton>

              <div className="flex gap-3">
                <MagneticButton
                  href="https://www.linkedin.com/in/adarsh-chaudhary-369429278/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-4 rounded-2xl glass-card hover:border-primary/30 transition-all duration-300 group min-w-0"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5 text-primary-light shrink-0" />
                  <span className="text-sm text-text-primary group-hover:text-primary-light transition-colors hidden sm:inline">
                    LinkedIn
                  </span>
                </MagneticButton>
                <MagneticButton
                  href="https://github.com/aelshh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-4 rounded-2xl glass-card hover:border-primary/30 transition-all duration-300 group min-w-0"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5 text-primary-light shrink-0" />
                  <span className="text-sm text-text-primary group-hover:text-primary-light transition-colors hidden sm:inline">
                    GitHub
                  </span>
                </MagneticButton>
                <MagneticButton
                  href="https://wa.me/918707479934"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-4 rounded-2xl glass-card hover:border-primary/30 transition-all duration-300 group min-w-0"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm text-text-primary group-hover:text-accent transition-colors hidden sm:inline">
                    WhatsApp
                  </span>
                </MagneticButton>
              </div>
            </div>
          </RevealSection>

          {/* Right: Form */}
          <RevealSection delay={0.3}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5 p-8 rounded-2xl glass-card"
            >
              <div className="relative">
                <input
                  type="text"
                  name="senderName"
                  required
                  maxLength={100}
                  placeholder=" "
                  className="peer w-full px-5 pt-7 pb-3 rounded-xl bg-transparent border border-border text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                />
                <label className="absolute left-5 top-5 text-sm text-text-muted peer-focus:text-xs peer-focus:top-2.5 peer-focus:text-primary-light peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2.5 transition-all duration-200 pointer-events-none">
                  Your name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="senderEmail"
                  required
                  maxLength={500}
                  placeholder=" "
                  className="peer w-full px-5 pt-7 pb-3 rounded-xl bg-transparent border border-border text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                />
                <label className="absolute left-5 top-5 text-sm text-text-muted peer-focus:text-xs peer-focus:top-2.5 peer-focus:text-primary-light peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2.5 transition-all duration-200 pointer-events-none">
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
                  className="peer w-full px-5 pt-7 pb-3 rounded-xl bg-transparent border border-border text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300 resize-none"
                />
                <label className="absolute left-5 top-5 text-sm text-text-muted peer-focus:text-xs peer-focus:top-2.5 peer-focus:text-primary-light peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2.5 transition-all duration-200 pointer-events-none">
                  Your message
                </label>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full px-6 py-3.5 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-dim transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-accent/15 cursor-pointer"
                aria-label="Send message"
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
          </RevealSection>
        </div>
      </div>
    </section>
  );
}

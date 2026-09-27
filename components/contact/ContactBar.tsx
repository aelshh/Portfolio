"use client";

import { useState, useRef } from "react";
import { Container, SectionDivider, useMechanicalSound } from "@/components/ui/BrutalistLayout";
import { ArrowUpRight, Mail, Send, MessageSquare, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import toast from "react-hot-toast";
import sendEmail from "@/actions/sendEmail";
import { motion, AnimatePresence } from "framer-motion";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/aelshh",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adarsh-chaudhary-369429278/",
    Icon: FaLinkedin,
  },
  {
    label: "Twitter/X",
    href: "https://x.com/aelshh",
    Icon: FaXTwitter,
  },
  {
    label: "Mail",
    href: "mailto:hello@adarshchaudhary.in",
    Icon: Mail,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918707479934",
    Icon: FaWhatsapp,
  },
];

export function ContactBar() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const playClick = useMechanicalSound();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    playClick();

    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);
    setSending(false);

    if (result?.error) {
      toast.error(result.error);
      return;
    }

    toast.success("Message transmitted successfully!");
    formRef.current?.reset();
    setIsFormOpen(false);
  };

  return (
    <section id="contact" className="relative w-full">
      <SectionDivider
        number="02"
        title="Contact"
        aside={
          <button
            type="button"
            onClick={() => {
              playClick();
              setIsFormOpen((prev) => !prev);
            }}
            className="flex items-center gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--chip)] px-3 py-1.5 font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--soft)] transition-colors cursor-pointer"
          >
            <MessageSquare className="size-3.5" />
            <span>{isFormOpen ? "Close Form" : "Send Direct Message"}</span>
          </button>
        }
      />

      <Container>
        {/* Multi-column Grid of Social Channels */}
        <div className="grid grid-cols-2 sm:grid-cols-5 border-b border-[var(--line)] sm:border-b-0">
          {contactLinks.map((item, idx) => {
            const Icon = item.Icon;
            const isLast = idx === contactLinks.length - 1;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                onClick={playClick}
                className={`group flex items-center justify-center gap-2.5 border-b border-r border-[var(--line)] px-4 py-4 text-[13px] font-medium transition-colors duration-200 hover:bg-[var(--hover)] ${
                  idx % 2 === 1 ? "border-r-0 sm:border-r" : ""
                } sm:border-b-0 ${
                  isLast ? "col-span-2 border-r-0 sm:col-span-1 sm:border-r" : ""
                } ${idx === 4 ? "sm:border-r-0" : ""}`}
              >
                <span className="grid size-8 place-items-center rounded-lg border border-[var(--line)] bg-[var(--chip)] text-[var(--muted)] transition-colors group-hover:text-[var(--fg)]">
                  <Icon className="size-4" />
                </span>
                <span className="text-[var(--muted)] transition-colors group-hover:text-[var(--fg)]">
                  {item.label}
                </span>
                <ArrowUpRight className="size-3.5 text-[var(--soft)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--fg)]" />
              </a>
            );
          })}
        </div>

        {/* Expandable Direct Message Form */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-t border-[var(--line)] bg-[var(--card)] px-6 py-6 sm:px-8"
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-4 max-w-lg mx-auto"
              >
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[var(--soft)] mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="senderEmail"
                    required
                    maxLength={500}
                    placeholder="you@domain.com"
                    className="w-full rounded-lg border border-[var(--line)] bg-[var(--chip)] px-3.5 py-2.5 font-mono text-[12px] text-[var(--fg)] placeholder-[var(--soft)] outline-none transition-colors focus:border-[var(--soft)]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[var(--soft)] mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    maxLength={5000}
                    placeholder="Project proposal, collaboration inquiry, or a quick hello..."
                    className="w-full rounded-lg border border-[var(--line)] bg-[var(--chip)] px-3.5 py-2.5 font-mono text-[12px] text-[var(--fg)] placeholder-[var(--soft)] outline-none transition-colors focus:border-[var(--soft)] resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="font-mono text-[10px] text-[var(--soft)] flex items-center gap-1">
                    <Phone className="size-3" />
                    +91 8707479934
                  </span>

                  <button
                    type="submit"
                    disabled={sending}
                    className="flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--fg)] text-[var(--bg)] px-4 py-2 font-mono text-[11px] font-semibold transition-all hover:opacity-90 active:scale-95 disabled:opacity-50 cursor-pointer shadow-xs"
                  >
                    {sending ? (
                      <span className="inline-block size-3.5 border-2 border-[var(--bg)]/30 border-t-[var(--bg)] rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="size-3.5" />
                        <span>Send Transmission</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}

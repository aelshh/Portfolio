"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMechanicalSound } from "@/components/ui/BrutalistLayout";
import { useThemeContext } from "@/context/ThemeSwitchContext";
import {
  Search,
  Home,
  User,
  Briefcase,
  Layers,
  Wrench,
  Mail,
  Sun,
  Moon,
  Copy,
  Check,
  FileText,
  CornerDownLeft,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import toast from "react-hot-toast";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  category: "Navigation" | "Projects" | "Actions";
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  action: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const { theme, setTheme } = useThemeContext();
  const playClick = useMechanicalSound();
  const isDark = theme === "Dark";

  const handleToggleTheme = () => {
    playClick();
    const next = isDark ? "Light" : "Dark";
    setTheme(next);
    window.localStorage.setItem("theme", next);
    if (next === "Dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    toast.success(`Switched to ${next} Mode`);
    onClose();
  };

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText("hello@adarshchaudhary.in");
    setCopiedEmail(true);
    toast.success("Copied email to clipboard!");
    setTimeout(() => {
      setCopiedEmail(false);
      onClose();
    }, 800);
  };

  const navigateTo = (hash: string) => {
    playClick();
    onClose();
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-home",
      category: "Navigation",
      title: "Home",
      subtitle: "Return to top cover and introduction",
      icon: <Home className="size-4" />,
      action: () => navigateTo("#home"),
    },
    {
      id: "nav-about",
      category: "Navigation",
      title: "About Me",
      subtitle: "Bio narrative and vinyl music player",
      icon: <User className="size-4" />,
      action: () => navigateTo("#about"),
    },
    {
      id: "nav-projects",
      category: "Navigation",
      title: "Featured Projects",
      subtitle: "Deowi, Aura, PicMe AI, Clone OS",
      icon: <Layers className="size-4" />,
      action: () => navigateTo("#projects"),
    },
    {
      id: "nav-experience",
      category: "Navigation",
      title: "Experience Timeline",
      subtitle: "Gopluto.ai and DCverse career history",
      icon: <Briefcase className="size-4" />,
      action: () => navigateTo("#experience"),
    },
    {
      id: "nav-skills",
      category: "Navigation",
      title: "Skills & Technologies",
      subtitle: "Full-stack languages, libraries, and databases",
      icon: <Wrench className="size-4" />,
      action: () => navigateTo("#skills"),
    },
    {
      id: "nav-contact",
      category: "Navigation",
      title: "Contact",
      subtitle: "Social channels and email dispatch",
      icon: <Mail className="size-4" />,
      action: () => navigateTo("#contact"),
    },

    // Projects Quick Links
    {
      id: "proj-deowi",
      category: "Projects",
      title: "Deowi",
      subtitle: "AI content repurposing engine (Deepgram, BullMQ)",
      icon: <Layers className="size-4" />,
      action: () => {
        window.open("https://deowi.tech", "_blank");
        onClose();
      },
    },
    {
      id: "proj-aura",
      category: "Projects",
      title: "Aura",
      subtitle: "Dopamine detox & habit gamification app",
      icon: <Layers className="size-4" />,
      action: () => {
        window.open("https://aura.adarshchaudhary.in/", "_blank");
        onClose();
      },
    },
    {
      id: "proj-picme",
      category: "Projects",
      title: "PicMe AI",
      subtitle: "AI image generator and LoRA model trainer",
      icon: <Layers className="size-4" />,
      action: () => {
        window.open("https://picme-ai.vercel.app/", "_blank");
        onClose();
      },
    },
    {
      id: "proj-clone",
      category: "Projects",
      title: "Clone OS",
      subtitle: "AI prompt-to-video short film creator",
      icon: <Layers className="size-4" />,
      action: () => {
        window.open("https://www.cloneos.io/", "_blank");
        onClose();
      },
    },

    // Actions
    {
      id: "act-theme",
      category: "Actions",
      title: isDark ? "Switch to Light Mode" : "Switch to Dark Mode",
      subtitle: isDark ? "High-contrast paper aesthetic" : "Default brutalist dark theme",
      icon: isDark ? <Sun className="size-4 text-amber-300" /> : <Moon className="size-4" />,
      action: handleToggleTheme,
    },
    {
      id: "act-copy-email",
      category: "Actions",
      title: copiedEmail ? "Email Copied!" : "Copy Email Address",
      subtitle: "hello@adarshchaudhary.in",
      icon: copiedEmail ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />,
      action: handleCopyEmail,
    },
    {
      id: "act-resume",
      category: "Actions",
      title: "View Resume",
      subtitle: "Interactive resume page or download CV.pdf",
      icon: <FileText className="size-4" />,
      action: () => {
        window.location.href = "/resume";
        onClose();
      },
    },
    {
      id: "act-github",
      category: "Actions",
      title: "Open GitHub Profile",
      subtitle: "@aelshh repository codebases",
      icon: <FaGithub className="size-4" />,
      action: () => {
        window.open("https://github.com/aelshh", "_blank");
        onClose();
      },
    },
    {
      id: "act-linkedin",
      category: "Actions",
      title: "Open LinkedIn Profile",
      subtitle: "Connect on LinkedIn",
      icon: <FaLinkedin className="size-4" />,
      action: () => {
        window.open("https://www.linkedin.com/in/adarsh-chaudhary-369429278/", "_blank");
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((c) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      c.title.toLowerCase().includes(q) ||
      (c.subtitle && c.subtitle.toLowerCase().includes(q)) ||
      c.category.toLowerCase().includes(q)
    );
  });

  // Reset selection index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(
          (prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length)
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Group items by category
  const categories = Array.from(new Set(filteredCommands.map((c) => c.category)));

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[15vh]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] shadow-2xl backdrop-blur-xl max-h-[62vh] z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center border-b border-[var(--line)] px-4 py-3.5 gap-2.5">
              <Search className="size-4 text-[var(--soft)] shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections, projects, or commands..."
                className="w-full bg-transparent font-mono text-[13px] text-[var(--fg)] placeholder-[var(--soft)] outline-none border-none"
              />
              <kbd className="hidden sm:inline-block rounded border border-[var(--line)] bg-[var(--chip)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--soft)]">
                ESC
              </kbd>
            </div>

            {/* Commands List */}
            <div
              ref={listRef}
              className="flex-1 overflow-y-auto py-2 divide-y divide-[var(--line)]/40 hide-scrollbar"
            >
              {filteredCommands.length === 0 ? (
                <div className="px-4 py-8 text-center font-mono text-xs text-[var(--soft)]">
                  No commands matched &ldquo;{query}&rdquo;
                </div>
              ) : (
                categories.map((cat) => {
                  const items = filteredCommands.filter((c) => c.category === cat);
                  return (
                    <div key={cat} className="py-2 first:pt-0 last:pb-0">
                      <h4 className="px-4 py-1 font-mono text-[9px] uppercase tracking-wider text-[var(--soft)] font-semibold">
                        {cat}
                      </h4>
                      <div className="mt-1 flex flex-col px-2 gap-0.5">
                        {items.map((cmd) => {
                          const globalIdx = filteredCommands.indexOf(cmd);
                          const isSelected = globalIdx === selectedIndex;
                          return (
                            <button
                              key={cmd.id}
                              type="button"
                              onClick={cmd.action}
                              onMouseEnter={() => setSelectedIndex(globalIdx)}
                              className={`flex items-center gap-3 rounded-xl px-3 py-2 text-left w-full transition-all duration-150 border cursor-pointer ${
                                isSelected
                                  ? "bg-[var(--fg)] text-[var(--bg)] border-transparent shadow-xs"
                                  : "border-transparent text-[var(--muted)] hover:bg-[var(--chip)]"
                              }`}
                            >
                              <span
                                className={`shrink-0 ${
                                  isSelected ? "text-[var(--bg)]" : "text-[var(--soft)]"
                                }`}
                              >
                                {cmd.icon}
                              </span>
                              <div className="flex-1 min-w-0">
                                <p className="text-[12.5px] font-medium leading-tight truncate">
                                  {cmd.title}
                                </p>
                                {cmd.subtitle && (
                                  <p
                                    className={`text-[10px] leading-tight truncate mt-0.5 ${
                                      isSelected
                                        ? "text-[var(--bg)]/80"
                                        : "text-[var(--soft)]"
                                    }`}
                                  >
                                    {cmd.subtitle}
                                  </p>
                                )}
                              </div>
                              {isSelected && (
                                <CornerDownLeft className="size-3 opacity-70 text-[var(--bg)]" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Bottom Keyboard Legend */}
            <div className="flex items-center justify-between border-t border-[var(--line)] bg-[var(--chip)]/60 px-4 py-2 font-mono text-[9px] text-[var(--soft)]">
              <div className="flex gap-2.5">
                <span>↑↓ navigate</span>
                <span>•</span>
                <span>Enter select</span>
              </div>
              <span>ESC close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { useMechanicalSound } from "@/components/ui/BrutalistLayout";

interface Track {
  title: string;
  artist: string;
  videoId: string;
  defaultDuration: number;
}

const playlist: Track[] = [
  {
    title: "La Campanella ( 1826 )",
    artist: "Niccolò Paganini",
    videoId: "6ruHDWSNvB8",
    defaultDuration: 284,
  },
  {
    title: "Alla Turca (Sonata No. 11)",
    artist: "Mozart · Tzvi Erez",
    videoId: "SQh1zztmpEk",
    defaultDuration: 202,
  },
  {
    title: "Passacaglia",
    artist: "Handel / Halvorsen",
    videoId: "ApCL2GomTD4",
    defaultDuration: 228,
  },
];

interface YTPlayerInstance {
  playVideo: () => void;
  pauseVideo: () => void;
  stopVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
  loadVideoById: (videoId: string) => void;
  cueVideoById: (videoId: string) => void;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  setVolume: (volume: number) => void;
  getVolume: () => number;
  getCurrentTime: () => number;
  getDuration: () => number;
  getPlayerState: () => number;
  destroy: () => void;
}

interface YTPlayerOptions {
  videoId: string;
  playerVars?: {
    autoplay?: 0 | 1;
    controls?: 0 | 1;
    disablekb?: 0 | 1;
    playsinline?: 0 | 1;
    rel?: 0 | 1;
    modestbranding?: 0 | 1;
    origin?: string;
  };
  events?: {
    onReady?: (event: { target: YTPlayerInstance }) => void;
    onStateChange?: (event: { data: number; target: YTPlayerInstance }) => void;
    onError?: (event: { data: number; target: YTPlayerInstance }) => void;
  };
}

declare global {
  interface Window {
    YT?: {
      Player: new (element: HTMLElement | string, options: YTPlayerOptions) => YTPlayerInstance;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

function loadYouTubeIframeApi(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }
    if (window.YT && window.YT.Player) {
      resolve();
      return;
    }

    if (!document.getElementById("yt-iframe-api")) {
      const script = document.createElement("script");
      script.id = "yt-iframe-api";
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.head.appendChild(script);
    }

    const prevHandler = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (prevHandler) prevHandler();
      resolve();
    };

    const interval = window.setInterval(() => {
      if (window.YT && window.YT.Player) {
        window.clearInterval(interval);
        resolve();
      }
    }, 150);

    window.setTimeout(() => {
      window.clearInterval(interval);
      resolve();
    }, 15000);
  });
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "00:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function VinylPlayer() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(playlist[0].defaultDuration);
  const [isReady, setIsReady] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [useFallbackSynth, setUseFallbackSynth] = useState(false);

  const playClick = useMechanicalSound();
  const currentTrack = playlist[trackIndex];

  const ytContainerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayerInstance | null>(null);
  const pendingPlayRef = useRef(false);

  // Web Audio Synth Fallback (only used if YouTube is completely blocked/offline)
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthTimerRef = useRef<number | null>(null);
  const synthNoteRef = useRef(0);

  const stopSynth = useCallback(() => {
    if (synthTimerRef.current) {
      window.clearTimeout(synthTimerRef.current);
      synthTimerRef.current = null;
    }
  }, []);

  const startSynth = useCallback(() => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      let ctx = audioCtxRef.current;
      if (!ctx || ctx.state === "closed") {
        ctx = new AudioCtx();
        audioCtxRef.current = ctx;
      }
      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }

      // La Campanella Bell Theme Melodic Frequencies (Hz)
      const campanellaNotes = [
        987.77, 1174.66, 987.77, 783.99, 880.0, 987.77, 1318.51, 1174.66,
        987.77, 880.0, 783.99, 880.0, 987.77, 1174.66, 1318.51, 1567.98,
      ];

      const playNextBell = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === "closed") return;
        const now = audioCtxRef.current.currentTime;
        const freq = campanellaNotes[synthNoteRef.current % campanellaNotes.length];
        synthNoteRef.current += 1;

        // Crystal bell harmonic combination
        const osc1 = audioCtxRef.current.createOscillator();
        const osc2 = audioCtxRef.current.createOscillator();
        const gainNode = audioCtxRef.current.createGain();
        const filter = audioCtxRef.current.createBiquadFilter();

        filter.type = "highpass";
        filter.frequency.setValueAtTime(300, now);

        osc1.type = "sine";
        osc1.frequency.setValueAtTime(freq, now);

        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(freq * 2, now); // Bell overtone octave

        // Audible volume (0.35 peak gain, crisp acoustic decay)
        gainNode.gain.setValueAtTime(0.001, now);
        gainNode.gain.linearRampToValueAtTime(0.35, now + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioCtxRef.current.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.5);
        osc2.stop(now + 0.5);

        synthTimerRef.current = window.setTimeout(playNextBell, 320);
      };

      playNextBell();
    } catch {
      // AudioContext fallback handling
    }
  }, []);

  // Initialize YouTube Iframe Player
  useEffect(() => {
    let isMounted = true;

    loadYouTubeIframeApi().then(() => {
      if (!isMounted || !ytContainerRef.current || !window.YT) return;

      try {
        playerRef.current = new window.YT.Player(ytContainerRef.current, {
          videoId: playlist[0].videoId,
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            playsinline: 1,
            rel: 0,
            modestbranding: 1,
            origin: typeof window !== "undefined" ? window.location.origin : undefined,
          },
          events: {
            onReady: (event) => {
              if (!isMounted) return;
              setIsReady(true);
              try {
                event.target.unMute();
                event.target.setVolume(100);
              } catch {
                // Ignore initial volume errors
              }

              if (pendingPlayRef.current) {
                pendingPlayRef.current = false;
                try {
                  event.target.playVideo();
                } catch {
                  // Fallback
                }
              }
            },
            onStateChange: (event) => {
              if (!isMounted) return;
              // 1 = playing, 2 = paused, 0 = ended
              if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 2) {
                setIsPlaying(false);
              } else if (event.data === 0) {
                // Advance to next track upon finish
                setTrackIndex((prev) => {
                  const nextIdx = (prev + 1) % playlist.length;
                  try {
                    playerRef.current?.loadVideoById(playlist[nextIdx].videoId);
                  } catch {
                    // Ignore
                  }
                  return nextIdx;
                });
                setCurrentTime(0);
              }
            },
            onError: () => {
              if (!isMounted) return;
              // If YouTube fails to play in region or blocked by network, fallback to synth
              setUseFallbackSynth(true);
            },
          },
        });
      } catch {
        setUseFallbackSynth(true);
      }
    });

    return () => {
      isMounted = false;
      stopSynth();
      try {
        playerRef.current?.destroy();
      } catch {
        // Ignore destruction errors
      }
    };
  }, [startSynth, stopSynth]);

  // Sync playback progress time
  useEffect(() => {
    if (!isPlaying) {
      stopSynth();
      return;
    }

    if (useFallbackSynth) {
      startSynth();
    }

    const interval = window.setInterval(() => {
      const player = playerRef.current;
      if (player && typeof player.getCurrentTime === "function" && !useFallbackSynth) {
        try {
          const cur = player.getCurrentTime();
          const dur = player.getDuration();
          if (typeof cur === "number" && !isNaN(cur)) setCurrentTime(cur);
          if (typeof dur === "number" && dur > 0) setDuration(dur);
        } catch {
          setCurrentTime((prev) => prev + 1);
        }
      } else {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setTrackIndex((i) => (i + 1) % playlist.length);
            return 0;
          }
          return prev + 1;
        });
      }
    }, 400);

    return () => {
      window.clearInterval(interval);
      stopSynth();
    };
  }, [isPlaying, useFallbackSynth, duration, startSynth, stopSynth]);

  const togglePlay = () => {
    playClick();
    const player = playerRef.current;

    // Wake AudioContext inside user click gesture if fallback needed
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume().catch(() => {});
    }

    if (player && isReady && !useFallbackSynth) {
      try {
        player.unMute();
        player.setVolume(100);
        if (isPlaying) {
          player.pauseVideo();
          setIsPlaying(false);
        } else {
          player.playVideo();
          setIsPlaying(true);
        }
        return;
      } catch {
        // Fallback to state toggle
      }
    }

    if (!isReady && !useFallbackSynth) {
      pendingPlayRef.current = !isPlaying;
      setIsPlaying((prev) => !prev);
      return;
    }

    // Fallback synth toggling
    setIsPlaying((prev) => {
      const next = !prev;
      if (next) {
        startSynth();
      } else {
        stopSynth();
      }
      return next;
    });
  };

  const changeTrack = (newIndex: number) => {
    playClick();
    const normalized = (newIndex + playlist.length) % playlist.length;
    setTrackIndex(normalized);
    setCurrentTime(0);
    setDuration(playlist[normalized].defaultDuration);
    synthNoteRef.current = 0;

    const player = playerRef.current;
    if (player && isReady && !useFallbackSynth) {
      try {
        if (isPlaying) {
          player.loadVideoById(playlist[normalized].videoId);
        } else {
          player.cueVideoById(playlist[normalized].videoId);
        }
      } catch {
        // Fallback
      }
    }
  };

  const toggleMute = () => {
    playClick();
    const player = playerRef.current;
    if (player && isReady) {
      try {
        if (isMuted) {
          player.unMute();
          player.setVolume(100);
          setIsMuted(false);
        } else {
          player.mute();
          setIsMuted(true);
        }
        return;
      } catch {
        // Ignore
      }
    }
    setIsMuted((prev) => !prev);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    const targetTime = pct * duration;
    setCurrentTime(targetTime);

    const player = playerRef.current;
    if (player && isReady && !useFallbackSynth) {
      try {
        player.seekTo(targetTime, true);
      } catch {
        // Fallback
      }
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="relative w-full rounded-xl border border-[var(--line)] bg-[var(--card)] p-5 sm:p-6 shadow-xs select-none">
      <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-7">
        {/* Turntable with Concentric Grooves & Mechanical Tonearm */}
        <div className="relative size-24 sm:size-28 flex-none shrink-0" aria-hidden="true">
          {/* Vinyl shadow */}
          <div className="absolute -bottom-2 left-1/2 h-3 w-[85%] -translate-x-1/2 rounded-[50%] bg-black/60 blur-md pointer-events-none" />

          {/* Rotating Vinyl Disc */}
          <div
            className={`relative h-full w-full rounded-full transition-transform ${
              isPlaying ? "animate-vinyl" : ""
            }`}
            style={{
              background: [
                "repeating-radial-gradient(circle at center, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 3px)",
                "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.16) 14deg, transparent 38deg, transparent 140deg, rgba(255,255,255,0.09) 158deg, transparent 176deg, transparent 280deg, rgba(255,255,255,0.13) 296deg, transparent 318deg)",
                "radial-gradient(circle, #18181b 0%, #0d0d0f 62%, #050505 100%)",
              ].join(", "),
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.1), 0 8px 24px rgba(0,0,0,0.6)",
            }}
          >
            {/* Center Record Label */}
            <div
              className="absolute inset-[30%] rounded-full flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle at 40% 35%, #27272a, #111113 72%)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
              }}
            >
              {/* Spindle hole */}
              <div className="size-2 rounded-full bg-neutral-300 shadow-inner" />
            </div>
          </div>

          {/* Glare specular reflection */}
          <div
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.12), transparent 45%)",
            }}
          />

          {/* Mechanical Tonearm */}
          <div
            className="pointer-events-none absolute z-10 tonearm-transition"
            style={{
              top: "-8px",
              right: "-8px",
              transform: isPlaying ? "rotate(28deg)" : "rotate(-6deg)",
            }}
          >
            <svg width="46" height="58" viewBox="0 0 46 58" fill="none">
              {/* Base Pivot */}
              <circle cx="40" cy="6" r="4.5" fill="#52525b" />
              <circle cx="40" cy="6" r="2.2" fill="#d4d4d8" />
              {/* Arm Tube */}
              <line
                x1="40"
                y1="6"
                x2="10"
                y2="50"
                stroke="url(#armGrad)"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              {/* Headshell / Cartridge */}
              <rect
                x="4"
                y="46"
                width="9"
                height="4"
                rx="1"
                fill="#71717a"
                transform="rotate(-50 8.5 48)"
              />
              <circle cx="6" cy="52" r="1.5" fill="#f43f5e" />
              <defs>
                <linearGradient id="armGrad" x1="40" y1="6" x2="10" y2="50" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#71717a" />
                  <stop offset="50%" stopColor="#e4e4e7" />
                  <stop offset="100%" stopColor="#52525b" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Track Metadata & Controls */}
        <div className="min-w-0 flex-1 w-full text-left">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--soft)] flex items-center gap-1.5">
              <span
                className={`inline-block size-1.5 rounded-full ${
                  isPlaying ? "bg-emerald-400 animate-pulse" : "bg-[var(--soft)]"
                }`}
              />
              Now Playing
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                className="cursor-pointer text-[var(--soft)] transition-colors hover:text-[var(--fg)] p-1"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="size-3.5" /> : <Volume2 className="size-3.5" />}
              </button>
              <span className="font-mono text-[10px] text-[var(--soft)]">
                {trackIndex + 1} / {playlist.length}
              </span>
            </div>
          </div>

          <div className="mt-1 flex items-center justify-between gap-4">
            <div className="min-w-0 flex-1">
              <p className="truncate text-[15px] font-medium text-[var(--fg)]" title={currentTrack.title}>
                {currentTrack.title}
              </p>
              <p className="truncate font-mono text-[11px] text-[var(--muted)]">
                {currentTrack.artist}
              </p>
            </div>

            {/* Playback Button Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => changeTrack(trackIndex - 1)}
                aria-label="Previous track"
                className="cursor-pointer text-[var(--muted)] transition-colors hover:text-[var(--fg)] p-1 active:scale-95"
              >
                <SkipBack className="size-4 fill-current" />
              </button>

              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause audio" : "Play audio"}
                className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-[var(--line)] bg-[var(--chip)] text-[var(--fg)] transition-all hover:scale-105 hover:border-[var(--soft)] active:scale-95 shadow-sm"
              >
                {isPlaying ? (
                  <Pause className="size-4 fill-current" />
                ) : (
                  <Play className="size-4 fill-current ml-0.5" />
                )}
              </button>

              <button
                type="button"
                onClick={() => changeTrack(trackIndex + 1)}
                aria-label="Next track"
                className="cursor-pointer text-[var(--muted)] transition-colors hover:text-[var(--fg)] p-1 active:scale-95"
              >
                <SkipForward className="size-4 fill-current" />
              </button>
            </div>
          </div>

          {/* Scrubbable Seek Bar */}
          <div
            onClick={handleSeek}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={Math.round(duration)}
            aria-valuenow={Math.round(currentTime)}
            className="group mt-3 flex h-3 cursor-pointer items-center"
          >
            <div className="relative h-[3px] w-full rounded-full bg-[var(--line)] transition-colors group-hover:bg-[var(--soft)]">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-[var(--fg)] transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="mt-1 flex items-center justify-between font-mono text-[10px] text-[var(--soft)]">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      {/* Hidden YouTube Iframe Player Container (200x200 off-screen opacity-0 to satisfy YouTube's render requirements) */}
      <div
        className="pointer-events-none absolute left-0 top-0 size-[200px] opacity-0 overflow-hidden"
        aria-hidden="true"
      >
        <div ref={ytContainerRef} />
      </div>
    </div>
  );
}

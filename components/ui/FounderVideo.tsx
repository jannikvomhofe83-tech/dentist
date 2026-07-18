"use client";

import { useRef, useState } from "react";
import { Play, SoundOn, SoundOff, Subtitles } from "./icons";

/**
 * Founder video (Lukas & Jannik).
 * - Framed 16:9 player, autoplay muted, branded poster, click-to-unmute.
 * - Not a full-bleed background video: clearly framed, soft shadow.
 * - Assets to drop in: /founder-video.mp4 + /founder-poster.jpg
 *   (+ optional /founder-captions.de.vtt for subtitles)
 */
export default function FounderVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [captions, setCaptions] = useState(false);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted && v.paused) {
      void v.play();
      setPlaying(true);
    }
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleCaptions = () => {
    const v = videoRef.current;
    if (!v) return;
    const track = v.textTracks?.[0];
    if (track) {
      const next = track.mode !== "showing";
      track.mode = next ? "showing" : "hidden";
      setCaptions(next);
    } else {
      setCaptions((c) => !c);
    }
  };

  return (
    <figure className="relative overflow-hidden rounded-[16px] border border-navy/10 bg-navy-900 shadow-lift ring-1 ring-black/5">
      <div className="relative aspect-video w-full">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster="/founder-poster.svg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Vorstellungs-Video: Lukas & Jannik stellen ihr System vor"
        >
          {/* Drop the real file at /founder-video.mp4 */}
          <source src="/founder-video.mp4" type="video/mp4" />
          {/* Optional captions: /founder-captions.de.vtt */}
          <track
            kind="subtitles"
            srcLang="de"
            label="Deutsch"
            src="/founder-captions.de.vtt"
          />
          Ihr Browser unterstützt das Video-Element nicht.
        </video>

        {/* Center play affordance (visible while muted / paused) */}
        {(!playing || muted) && (
          <button
            type="button"
            onClick={muted ? toggleSound : togglePlay}
            className="group absolute inset-0 flex items-center justify-center bg-navy-900/25 transition-colors hover:bg-navy-900/15"
            aria-label={muted ? "Ton einschalten" : playing ? "Video pausieren" : "Video abspielen"}
          >
            <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white/95 shadow-lift transition-transform duration-200 group-hover:scale-105">
              <Play className="ml-0.5 h-7 w-7 text-navy" />
            </span>
          </button>
        )}

        {/* Brand tag */}
        <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-navy-900/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-eyebrow text-white/90 backdrop-blur-sm">
          Lukas &amp; Jannik · 60–90 s
        </div>

        {/* Controls */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <button
            type="button"
            onClick={toggleCaptions}
            aria-pressed={captions}
            aria-label="Untertitel umschalten"
            className={`flex h-10 items-center gap-1.5 rounded-full px-3 text-[12px] font-semibold backdrop-blur-sm transition-colors sm:h-9 ${
              captions
                ? "bg-white text-navy"
                : "bg-navy-900/70 text-white hover:bg-navy-900/85"
            }`}
          >
            <Subtitles className="h-4 w-4" />
            UT
          </button>
          <button
            type="button"
            onClick={toggleSound}
            aria-label={muted ? "Ton einschalten" : "Ton ausschalten"}
            className="flex h-10 items-center gap-1.5 rounded-full bg-white px-3.5 text-[12px] font-semibold text-navy shadow-soft transition-transform hover:scale-[1.03] sm:h-9"
          >
            {muted ? (
              <>
                <SoundOff className="h-4 w-4" />
                Ton an
              </>
            ) : (
              <>
                <SoundOn className="h-4 w-4" />
                Ton
              </>
            )}
          </button>
        </div>
      </div>
    </figure>
  );
}

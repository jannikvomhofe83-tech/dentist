"use client";

import { useRef, useState } from "react";
import { Play } from "./icons";

/**
 * Founder video (Jannik, VSL, ~4:20 Min).
 * No autoplay: a large play button starts the video with sound.
 * After the first click the native controls take over (seek, pause, volume).
 * Assets: /founder-video.mp4 + /founder-poster.jpg
 */
export default function FounderVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    setStarted(true);
    void v.play();
  };

  return (
    <figure className="relative overflow-hidden rounded-[16px] border border-line bg-navy-900 shadow-lift ring-1 ring-black/5">
      <div className="relative aspect-video w-full">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster="/founder-poster.jpg"
          controls={started}
          playsInline
          preload="metadata"
          aria-label="Vorstellungs-Video: Jannik erklärt das System für planbare Selbstzahler-Anfragen"
        >
          <source src="/founder-video.mp4" type="video/mp4" />
          Ihr Browser unterstützt das Video-Element nicht.
        </video>

        {/* Big play overlay — visible until the video is started */}
        {!started && (
          <button
            type="button"
            onClick={start}
            className="group absolute inset-0 flex items-center justify-center bg-navy-900/20 transition-colors hover:bg-navy-900/10"
            aria-label="Video abspielen"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lift transition-transform duration-200 group-hover:scale-110 sm:h-24 sm:w-24">
              <Play className="ml-1 h-9 w-9 text-amber sm:h-11 sm:w-11" />
            </span>
          </button>
        )}
      </div>
    </figure>
  );
}

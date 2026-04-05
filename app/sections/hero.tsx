"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Volume2, X } from "lucide-react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const [showUnmute, setShowUnmute] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [isPip, setIsPip] = useState(false);
  const [pipDismissed, setPipDismissed] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.currentTime = 0;
    video.play();
    setShowUnmute(false);
  };

  const handleCanPlay = () => setVideoReady(true);
  const handleEnded = () => { setVideoEnded(true); setIsPip(false); };
  const dismissPip = () => { setPipDismissed(true); setIsPip(false); };

  // rAF-throttled scroll check
  const rafRef = useRef(0);
  const checkScroll = useCallback(() => {
    if (videoEnded || pipDismissed) return;
    const el = containerRef.current;
    if (!el) return;
    setIsPip(el.getBoundingClientRect().bottom < -50);
  }, [videoEnded, pipDismissed]);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(checkScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [checkScroll]);

  // Move the video wrapper DOM node into/out of a fixed container
  // This avoids re-mounting the video element (which would restart it)
  useEffect(() => {
    const wrapper = videoWrapperRef.current;
    const container = containerRef.current;
    if (!wrapper || !container) return;

    if (isPip) {
      // Lock container height so page doesn't jump
      container.style.height = container.offsetHeight + "px";
      // Move to fixed PIP
      wrapper.style.position = "fixed";
      wrapper.style.bottom = "24px";
      wrapper.style.right = "24px";
      wrapper.style.width = window.innerWidth < 640 ? "200px" : "340px";
      wrapper.style.zIndex = "9999";
      wrapper.style.borderRadius = "12px";
      wrapper.style.boxShadow = "0 25px 50px -12px rgba(0,0,0,0.25)";
    } else {
      // Reset everything
      container.style.height = "";
      wrapper.style.position = "";
      wrapper.style.bottom = "";
      wrapper.style.right = "";
      wrapper.style.width = "";
      wrapper.style.zIndex = "";
      wrapper.style.borderRadius = "";
      wrapper.style.boxShadow = "";
    }
  }, [isPip]);

  return (
    <section className="relative">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="mx-auto max-w-4xl text-center">

          {/* Headline */}
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display tracking-tight text-slate-900">
            Are you still doing work{" "}
            <span className="text-orange-600">Claude could be doing for you?</span>
          </h1>

          {/* Video container — keeps space when PIP */}
          <div ref={containerRef} className="mx-auto mb-4 max-w-2xl">
            <div
              ref={videoWrapperRef}
              className="relative rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl"
            >
              {/* Close PIP */}
              {isPip && (
                <button
                  onClick={dismissPip}
                  className="absolute -top-2 -left-2 z-[10000] bg-slate-900 text-white rounded-full p-1 shadow-lg cursor-pointer hover:bg-slate-700 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}

              <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
                {!videoReady && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900 rounded-lg">
                    <Image
                      src="/images/creatives/aitomation_logo.png"
                      alt="AItomation Academy"
                      width={200}
                      height={50}
                      className="opacity-40"
                      priority
                    />
                  </div>
                )}

                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  controls
                  controlsList="nodownload nofullscreen"
                  disablePictureInPicture
                  playsInline
                  autoPlay
                  muted
                  preload="auto"
                  onCanPlay={handleCanPlay}
                  onEnded={handleEnded}
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <source src="/videos/intro-web.mp4" type="video/mp4" />
                </video>

                {/* Unmute overlay */}
                {showUnmute && videoReady && !isPip && (
                  <button
                    onClick={handleUnmute}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer rounded-lg bg-black/20"
                  >
                    <div className="bg-orange-500/60 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-2xl w-[85%] h-[80%]">
                      <Volume2 className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                      <span className="text-white font-bold text-lg sm:text-2xl text-center leading-tight">
                        Your Video Is Playing
                      </span>
                      <span className="text-white/90 font-semibold text-sm sm:text-base">
                        Click To Unmute
                      </span>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Subheadline */}
          <p className="mx-auto mb-5 max-w-2xl text-base text-slate-600 md:text-lg leading-relaxed">
            Join AItomation Academy and learn how to use Claude for real work with practical workflows, free training, and a community built for non-technical professionals.
          </p>

          {/* CTA */}
          <div className="flex items-center justify-center">
            <Link
              href="/skool-redirect"
              className="group inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-3.5 text-base font-semibold text-white cursor-pointer hover:bg-orange-600 transition-colors"
            >
              JOIN THE FREE COMMUNITY
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Trust signal */}
          <p className="mt-3 text-sm text-slate-500">
            Join 300+ members. No credit card required.
          </p>

        </div>
      </div>
    </section>
  );
}

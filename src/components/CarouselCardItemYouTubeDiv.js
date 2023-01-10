import ReactPlayer from "react-player/lazy";
import { useEffect, useRef } from "react";

export default function CarouselCardItemYouTubeDiv({ techniqueUrl, isOpen }) {
  const videoPlayerRef = useRef(null);

  useEffect(() => {
    if (isOpen && videoPlayerRef.current) {
      const url = new URL(techniqueUrl);
      const newTimestamp = new URLSearchParams(url.search).get("t") || 0;
      console.log("amare");
      console.log(techniqueUrl);
      console.log(videoPlayerRef.current);
      videoPlayerRef.current.seekTo(newTimestamp, "seconds");
    }
  }, [techniqueUrl, isOpen]);

  return (
    <div
      className="w-full origin-top-right bg-stone-50 mt-3 mr-1 rounded-lg border-2 border-stone-800 ease-in-out p-1 text-stone-800 transition-all duration-250 transform"
      style={{
        transform: isOpen ? "scaleY(1)" : "scaleY(0)",
        transformOrigin: "top right",
        position: "fixed",
        top: "2rem",
        right: "1rem",
        bottom: "auto",
      }}
    >
      <ReactPlayer
        width="100%"
        ref={videoPlayerRef}
        url={techniqueUrl}
        controls
        playing={isOpen}
      />
    </div>
  );
}

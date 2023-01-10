export default function CarouselCardItemYouTubeBox({ videoId, isOpen }) {
  return (
    <div
      className="w-full h-fit origin-top-right bg-stone-50 mt-3 mr-1 rounded-lg border-2 border-stone-800 ease-in-out p-1 text-stone-800 transition-all duration-250 transform"
      style={{
        transform: isOpen ? "scaleY(1)" : "scaleY(0)",
        transformOrigin: "top right",
        position: "fixed",
        top: "2rem",
        right: "1rem",
        bottom: "auto",
      }}
    >
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

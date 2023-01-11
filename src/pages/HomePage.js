import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    setTitleVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full">
      <div className="absolute bottom-[16rem] right-16 w-max text-right">
        <CSSTransition
          in={titleVisible}
          timeout={1000}
          classNames="fade-slide"
          onEntered={() => setTimeout(() => setSubtitleVisible(true), 100)}
        >
          <h1 className="text-8xl drop-shadow-md text-neutral-400 font-bold tracking-tight">
            Workout Notes
          </h1>
        </CSSTransition>
        <CSSTransition
          in={subtitleVisible}
          timeout={1000}
          classNames="fade-slide"
        >
          <h2
            className={`${
              !subtitleVisible && "opacity-0"
            } text-4xl mt-3 drop-shadow-md text-neutral-400 font-bold tracking-tight`}
          >
            Your place to document your workout programs
          </h2>
        </CSSTransition>
      </div>
    </div>
  );
}

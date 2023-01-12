import { CSSTransition } from "react-transition-group";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    setTitleVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full overflow-x-hidden">
      <div className="absolute lg:left-auto lg:top-auto top-1/2 left-1/2 lg:translate-x-0 lg:translate-y-0  transform -translate-x-1/2 -translate-y-1/2 lg:bottom-[16rem] lg:right-16 w-max lg:text-right text-center break-normal">
        <CSSTransition
          in={titleVisible}
          timeout={1000}
          classNames="fade-slide"
          onEntered={() => setTimeout(() => setSubtitleVisible(true), 100)}
          ref={titleRef}
        >
          <h1
            className="lg:text-8xl text-4xl drop-shadow-md text-neutral-400 font-bold tracking-tight"
            ref={titleRef}
          >
            Workout Notes
          </h1>
        </CSSTransition>
        <CSSTransition
          in={subtitleVisible}
          timeout={1000}
          classNames="fade-slide"
          ref={subtitleRef}
        >
          <h2
            className={`${
              !subtitleVisible && "opacity-0"
            } lg:text-4xl text-md mt-3 drop-shadow-md text-neutral-400 font-bold tracking-tight`}
            ref={subtitleRef}
          >
            Your place to document your workout programs
          </h2>
        </CSSTransition>
      </div>
      <footer className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max text-xs text-neutral-400">
        2023 © by{" "}
        <a
          className="underline"
          href="https://github.com/lior-ashkenazi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lior Ashkenazi
        </a>
        . All rights reserved.
      </footer>
    </div>
  );
}

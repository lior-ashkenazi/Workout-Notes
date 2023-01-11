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
      <div className="absolute lg:left-auto m-auto left-0 right-0 lg:bottom-[16rem] bottom-[32rem] lg:right-16 w-max text-lg-right text-center break-normal">
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
    </div>
  );
}

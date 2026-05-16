import { ExternalLinkIcon, Github, X } from "lucide-react";
import { useState } from "react";
//import { Steam } from "@phosphor-icons/react";


export const AnythingButAGunSection = () => {
    const [showPopup, setShowPopup] = useState(false);
  const [popUpMessage, setPopupMessage] = useState(
    "This Organization's Repositories are private, but I can share my code on request"
  );
  const handleClick = (e) => {
    const target = e.target.closest("a");
    if (!target) return;

    if (target.getAttribute("href") === "#") {
      e.preventDefault();
      setPopupMessage(
        "The Demo for this project is currently unavailable, a steam page is coming soon. I can share a demo build on request, just reach out to me on LinkedIn or Discord or Email."
      );
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };
    return (
    <section id="hero">
        {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-primary/50 z-50">
          <div className="bg-card p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <button
              className="absolute top-2 right-2 hover:"
              onClick={() => setShowPopup(false)}
            >
              <X className="text-primary" />
            </button>
            <p className="">{popUpMessage}</p>
          </div>
        </div>
      )}
      <div className="relative min-h-screen flex flex-col items-center h-full">
        <h1 className="text-primary mt-35 text-4xl md:text-5xl font-bold">
          Anything but a Gun
        </h1>
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          <div className="flex justify-center">
            <img
              src="/projects/project0.png"
              alt="Anything but a Gun Banner and Logo"
              className="w-75 h-50 md:w-275 md:h-175 md:ml-6 mt-6 items-center"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="font-semibold text-3xl">
              Role: <span className="text-primary">Lead Software Engineer</span>
            </h2>
            <p className="text-muted-foreground text-left mt-3 p-6">
              I lead the development of the software engineering team for our project 
              Anything but a Gun. A 3D with billboarding Rogutelite First Person Shooter 
              game where the player rebels against an AI takeover of their office building. 
              Finding and using creativity to create unlikely weapons - Anything but a Gun!
            </p>
            <p className="text-muted-foreground text-left mt-3 p-6">
              I worked on my leadership skills focusing on leading the software engineer team 
              and collaborating with the art and design teams. I developed my skills in C# and 
              Unity engine as well as my core understanding of Game Development.
            </p>
            <h3 className="font-semibold text-3xl mt-6">
              View My <span className="text-primary">Work</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 md:items-left">
              <div className="grid grid-cols-2 place-items-center w-auto h-auto md:items-left md:w-35 md:h-35 ml-6 mt-6">
                <a
                  href="https://github.com/RangerHalt2/Anything-But-A-Gun"
                  target="_blank"
                >
                  <Github size={50} className="text-primary" />
                </a>
                <div onClick={handleClick}>
                    <a href="#" target="_blank">
                    <ExternalLinkIcon size={50} className="text-primary" />
                    </a>
                </div>
              </div>
              <div className="mt-6 items-left col-span-4 p-6 md:p-0">
                <div className="pb-[56.25%] h-120 md:h-0 overflow-hidden ">
                  <iframe
                    className="relative flex w-90 h-120 md:w-150 md:h-110"
                    src="https://www.youtube.com/embed/QU_LxIi8HjU?si=xr65UE6PlastP1Hm"
                    title="ThermoFlux Gameplay Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrytped-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

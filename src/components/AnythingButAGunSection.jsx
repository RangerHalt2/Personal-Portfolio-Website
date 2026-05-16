import { ExternalLinkIcon, Github, X } from "lucide-react";
import { useState } from "react";
import { FaSteam } from "react-icons/fa";
import { FaItchIo } from "react-icons/fa";


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
        <h1 className="text-primary mt-25 text-4xl md:text-5xl font-bold">
          Anything but a Gun
        </h1>
        <div className="grid grid-cols-1 items-start mt-10 md:grid-cols-[auto_1fr] md:gap-10">
          <div className="flex">
            <img
              src="/projects/project0-1.png"
              alt="Anything but a Gun Banner and Logo"
              className="w-auto h-auto md:w-135 md:ml-15 md:h-175 md:mt-6"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="font-semibold text-3xl">
              Role: <span className="text-primary">Lead Software Engineer</span>
            </h2>
            <p className="text-muted-foreground text-left mt-3 p-6">
              I lead the Software Engineering team of 4 in the development of this project Anything But A Gun. A rogue-like fast-paced first person shooter where the player rebels against an AI takeover of their office building. A player can expect to find many different unlikely and unique weapons with strange upgrades throughout the run of the game. There's only one rule: it's Anything But A Gun.
            </p>
            <p className="text-muted-foreground text-left mt-3 p-6">
              I worked heavily in C# in the Unity engine developing and designing software. I Lead the team with tools like Clickup to delegate and manage workloads for the entire team. Collaborated with the art and design teams to connect art to code and bring our vision to life. Additionally, I handled and directed back-end documentation on the TDD and assisted designers in the GDD.
            </p>
            <h3 className="font-semibold text-3xl mt-6">
              View My <span className="text-primary">Work</span>
            </h3>
            <div className="mt-6">
              <div className="inline-block relative">
                <iframe md:width="560" md:height="315" src="https://www.youtube.com/embed/0PVmMslREDc?si=2CAWFmj5yDVMpTDr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className="justify-center flex gap-4 p-2">
                  <a href="https://github.com/RangerHalt2/Anything-But-A-Gun" target="_blank">
                    <Github size={50} className="text-primary" />
                  </a>
                  <div onClick={handleClick}>
                    <a href="https://store.steampowered.com/app/4413900/Anything_But_A_Gun/" target="_blank">
                      <FaSteam size={50} className="text-primary" />
                    </a>
                  </div>
                  <a href="https://himey.itch.io/anything-but-a-gun" target="_blank">
                    <FaItchIo size={50} className="text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

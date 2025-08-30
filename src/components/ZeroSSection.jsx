import { ExternalLinkIcon, Github, X } from "lucide-react";
import { useState } from "react";

export const ZeroSSection = () => {
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
        "The Organization Repository is Private, However I am at Liberty to Share My Work on a Request"
      );
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };
  return (
    <section>
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
        <h1 className="text-primary mt-35 p-1.2 text-4xl md:text-5xl font-bold p-1">
          Dragon Block C - Zero S
        </h1>
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          <div className="flex justify-center">
            <img
              src="../public/projects/project2.png"
              alt="Dragon Block C - Zero S Logo"
              className="w-75 h-75 md:w-185 md:h-185 mt-6 items-center"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h1 className="font-semibold text-3xl">
              Role:{" "}
              <span className="text-primary">
                Administrator, Developer, Content Designer
              </span>
            </h1>
            <div className="text-left">
              <p className="text-muted-foreground p-6">
                Our Teams of Admins, Devs, Designers, and Moderators have
                together worked hard to develop a server spanning and running
                the course of an entire decade serving thousands of players
                during it's life cycle.
              </p>
              <p className="text-muted-foreground p-6">
                My role in this lovely server started as a moderator assisting
                players and giving advice to others. Now, I serve as an
                Administrator and Content Designe. Actively developing the
                latest content and gameplay story on the server. One of my other
                roles is as a Developer; I create code and scripts on a
                mass-scale for both my own content and globally for the server.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 md:items-left">
              <div className="grid grid-cols-2 place-items-center w-auto h-auto md:items-left md:w-35 md:h-35 mt-6">
                <div onClick={handleClick}>
                  <a href="#" target="_blank">
                    <Github size={50} className="text-primary" />
                  </a>
                </div>
                <a
                  href="https://www.technicpack.net/modpack/dragon-block-zero-s"
                  target="_blank"
                >
                  <ExternalLinkIcon size={50} className="text-primary" />
                </a>
              </div>
              <div className="mt-6 items-left col-span-4 p-6 md:p-0">
                <iframe
                  className="relative flex w-90 h-120 md:w-150 md:h-110"
                  src="https://www.youtube.com/embed/leUnJkccp0k?si=2_C5xRy5jggS9D8F"
                  title="ThermoFlux Gameplay Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrytped-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { ExternalLinkIcon, Github, X } from "lucide-react";
import { useState } from "react";

export const PortfolioSection = () => {
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
        <h1 className="text-primary mt-35 p-1.2 text-4xl md:text-5xl font-bold p-1">
          Portfolio Website Personal Project
        </h1>
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          <div className="flex justify-center border-primary border-1 p-6 mt-6 ml-6">
            <img
              src="/projects/project3.png"
              alt="An image of this website's landing page"
              className="w-auto h-auto md:w-auto md:h-auto mt-6 items-center"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h1 className="font-semibold text-3xl">
              Role: <span className="text-primary">Developer and Web-Host</span>
            </h1>
            <div className="text-left">
              <p className="text-muted-foreground p-6">
                I developed from some personal research and my knowledge and
                experience this website. I'm also hosting it in on CloudFlare
                and I deployed it myself. Admittedly I'm less of a front
                end-developer, so I took some inspiration and tutorial aids from
                a few places... but I believe I made enough changes to represent
                this piece as my own.
              </p>
              <p className="text-muted-foreground p-6">
                I needed a portfolio showcase, and as a Software Engineer it
                felt inappropriate to not program and code my own. Before this,
                I had experience writing components and API backend in React and
                Node.js. But I never had the privilege to host my own website, I
                thought that this project would strengthen the weak points and
                enhance my strong one's. I hope you love this website as much as
                I did developing it.
              </p>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="grid grid-cols-2 place-items-center w-auto h-auto md:items-left md:w-35 md:h-35 mt-6">
                <div onClick={handleClick}>
                  <a href="#" target="_blank">
                    <Github size={50} className="text-primary" />
                  </a>
                </div>
                <a href="/">
                  <ExternalLinkIcon size={50} className="text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

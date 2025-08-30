import { ExternalLinkIcon, Github } from "lucide-react";

export const ThermoFluxSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center h-full">
      <h1 className="text-primary mt-35 text-4xl md:text-5xl font-bold">
        ThermoFlux
      </h1>
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        <div className="flex justify-center">
          <img
            src="../public/projects/project1.jpg"
            alt="ThermoFlux Banner and Logo"
            className="w-75 h-100 md:w-144.75 md:h-193 mt-6 items-center"
          />
        </div>
        <div className="mt-6 md:mt-0">
          <h2 className="font-semibold text-3xl">
            Role: Co-Lead <span className="text-primary">Programmer</span>
          </h2>
          <p className="text-muted-foreground text-left mt-3 p-6">
            Our Team developed ThermoFlux to be a 5 minute 3D platforming game.
            I worked with the team enabling them to use GitHub, supporting
            Tech's write scripts, and writing core functionality of the game.
          </p>
          <p className="text-muted-foreground text-left mt-3 p-6">
            I worked on my strenghts as a Software Engineer here writing code
            for core mechanics, physics, and UI elements in C#. I also
            strengthened my understanding of Unity and it's core systems.
            Finally, my understanding of Game Development strengthened much
            further than before I worked on this project.
          </p>
          <h3 className="font-semibold text-3xl mt-6">
            View My <span className="text-primary">Work</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 md:items-left">
            <div className="grid grid-cols-2 place-items-center w-auto h-auto md:items-left md:w-35 md:h-35 mt-6">
              <a
                href="https://github.com/RangerHalt2/ThermoFlux"
                target="_blank"
              >
                <Github size={50} className="text-primary" />
              </a>
              <a href="https://rangerhalt.itch.io/thermoflux" target="_blank">
                <ExternalLinkIcon size={50} className="text-primary" />
              </a>
            </div>
            <div className="mt-6 items-left col-span-4 p-6 md:p-0">
              <div className="pb-[56.25%] h-120 md:h-0 overflow-hidden ">
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
    </div>
  );
};

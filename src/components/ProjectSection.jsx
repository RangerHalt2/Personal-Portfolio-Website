import { ArrowRight, ExternalLinkIcon, Github, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "ThermoFlux",
    description:
      "A short 3 minute game developed in Unity with 3D Platforming. I co-managed the C# programming along with another developer.",
    image: "/projects/project1.jpg",
    tags: ["Unity", "C#", "Game Development"],
    projectPage: "/ThermoFlux",
    demoUrl: "https://rangerhalt.itch.io/thermoflux",
    githubUrl: "https://github.com/RangerHalt2/ThermoFlux",
  },
  {
    id: 2,
    title: "Dragon Block C - Zero S",
    description:
      "An online minecraft server serving 200 unique players per day based in 1.7.10 with the Dragon Block C mod. I serve as an Administrator, Content Creator, and Developer.",
    image: "/projects/project2.png",
    tags: ["JavaScript", "Game Development"],
    projectPage: "/ZeroS",
    demoUrl: "https://www.technicpack.net/modpack/dragon-block-zero-s",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "This website that you're currently on viewing all about me... was in fact developed by me!",
    image: "/projects/project3.png",
    tags: ["Web Development", "React", "JavaScript"],
    projectPage: "/Portfolio",
    demoUrl: "#",
    githubUrl: "/",
  },
];

export const ProjectsSection = () => {
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
    <section id="projects" className="py-24 px-4 relative">
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
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was passionately
          made and shows off my talents and expertise in Game Development and
          Software Engineering
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <a
                  href={project.projectPage}
                  alt="Redirects to the Project Page for this Project"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.projectPage}
                  className="text-primary card-hover hover:text-primary-foreground underline"
                >
                  <h3 className="text-xl font-semibold mb-1">
                    {" "}
                    {project.title}{" "}
                  </h3>
                </a>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-col justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 mt-auto"
                    >
                      <ExternalLinkIcon size={20} />
                    </a>
                    <div onClick={handleClick}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300 mt-auto"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center gap-2 mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto"
            href="https://github.com/RangerHalt2"
            target="_blank"
          >
            Check My GitHub{" "}
            <ArrowRight size={20} className="w-5 h-5 md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

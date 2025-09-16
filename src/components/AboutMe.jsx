import { Briefcase, Code, Gamepad2, Notebook, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Game Developer and Software Engineer
            </h3>
            <p className="text-muted-foreground">
              As a Double Major student degree-seeking at UCF for{" "}
              <span className="text-primary text-glow">
                B.S. Computer Science
              </span>{" "}
              and
              <span className="text-primary text-glow">
                {" "}
                B.A. Digital Media
              </span>{" "}
              I excel in game development, web development, software management
              in a plethora of languages, and minor with some video editing.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about creating comprehensive solutions to complex
              problems, I'm constantly keeping up-to-date with new technology
              and techniques to stay on the bleeding-edge for software
              engineering and game development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch With Me
              </a>
              <a
                href="../../public/files/Baysinger_Logan_Resume.pdf"
                download={"Baysinger_Logan_Resume.pdf"}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Engineer</h4>
                  <p className="text-muted-foreground">
                    Developing software and solving problems as an engineer in
                    Java, C++, Python, and many others.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Gamepad2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Game Development</h4>
                  <p className="text-muted-foreground">
                    Developing games in Unity and Unreal Engine with modern
                    frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Notebook className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Academic History</h4>
                  <p className="text-muted-foreground">
                    Double Major student at UCF with B.S. Computer Science and
                    B.A. Digital Media - Game Track.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

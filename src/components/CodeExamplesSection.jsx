export const CodeExamplesSection = () => {
  return (
    <section id="hero" className="mr-3 lg:mr-0">
      <div className="relative flex flex-col items-center justify-center">
        <h1 className=" text-4xl lg:text-5xl mt-25 font-bold">
          <span className="text-primary">Code</span> Examples
        </h1>
        <h2 className="text-3xl lg:4xl font-semibold mt-8">
          <span className="text-primary">JavaScript</span> Example: <br /> NPC
          Spawner and Handler
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="relative flex flex-col">
            <img
              src="/assets/code/RebellionNPCSpawner.png"
              alt="A screenshot of some code highlighting variable name formatting, spacing, organization, and comments"
              className="border-1 border-primary ml-5 mt-1"
            />
          </div>
          <div className="p-3">
            <p className="text-left p-2 text-primary-foreground">
              This piece of code comes from a personal project programmed in
              Javascript for a{" "}
              <a
                href="/ZeroS"
                className="underline text-primary hover:text-primary-foreground"
              >
                Minecraft Server
              </a>
              . For a bit of background, the server uses a couple of special
              libraries not developed by us and native to the game. A lot of
              these hooks are mandator, so this code actually does not run with
              a main and instead uses their hooks and events. In this code, you
              can see that I use the 3 events "init", "target", and "timer."
              This game is essentially made in something primitative and similar
              to a game engine. Much akin to Unity.
            </p>
            <p className="text-left p-2 text-primary-foreground">
              Here, I write timer id's standard with all capitalize. Example:{" "}
              <span className="text-primary font-semibold">SPAWN_NEW_NPCS</span>{" "}
              this is actually just a number 1. This is our organization
              standard for all timer id's set by our head developer and I follow
              it so.
            </p>
            <p className="text-left p-2 text-primary-foreground">
              I write my booleans here and state them as "xIsy" Example:{" "}
              <span className="text-primary font-semibold">kindIsPlaced</span>{" "}
              in this case, the "kind" refers to the short name of "Kind Saiyan"
              which is an enemy the player fights in this quest. More
              intuitively, Placed is if the NPC is placed and spawned for the
              player to fight. So altogether, this boolean reads "kind saiyan is
              or is not placed."
            </p>
            <p className="text-left p-2 text-primary-foreground">
              Here, there are a lot of devs and administrator's that potentially
              might view this code and it could be a few years from now. To that
              extent, it needs to be somewhat resilient. For that purpose here,
              I try to write just about everything in a variable with a name.
              There is one part of this snippet of code where that does not
              stand true. The function{" "}
              <span className="text-primary font-semibold">forceStart()</span>{" "}
              takes 3 parameters, and the 2nd one I simply wrote as "10". The
              second parameter here is just how many ticks this timer should be
              occuring, normally I would write this as a variable as well.
              Especially if this variable takes up entire minutes, where you
              would not want to write 5 minutes as "6000" ticks. In this case, I
              wrote it as 10 because it is not something that should have it's
              timer modified.
            </p>
            <p className="text-left p-2 text-primary-foreground">
              The code is written modularly where the functions are called and
              break up their functionality into new functions for ease of
              readability and longevity. You can see this at{" "}
              <span className="text-primary font-semibold">
                lines 64, 66, and 67
              </span>
              . As a reminder, the timer is serving as a hook to call functions
              almost like a main.
            </p>
          </div>
        </div>
        <h2 className="text-3xl lg:4xl font-semibold mt-8">
          <span className="text-primary">React</span> Example:
          <br /> Not Found Page
        </h2>
        <div className="items-center mr-3">
          <div className="flex flex-col gap-4 grid grid-cols-1 lg:grid-cols-2 ml-5 mt-2">
            <img
              src="/assets/code/NotFoundPage.png"
              alt="Not Found Page Code Example"
              className="border-1 border-primary w-full h-auto object-cover"
            />
            <img
              src="/assets/code/NotFoundPageSection.png"
              alt="Not Found Section that's imported into the page"
              className="border-1 border-primary w-full h-full lg:h-132"
            />
          </div>
          <div className="text-left mt-2 p-3 lg:mt-0">
            <p className="text-primary-foreground">
              Here on this page, this is my default path for if the user ends up
              on a route that isn't one I've defined. In this, I break it into a
              few different parts. The first part is the page that really holds
              everything together. I've given it a header at the top and the
              theme toggle so I can have light and dark mode. Then, I'm
              importing the main stay content on the page from the{" "}
              <span className="text-primary font-semibold">NotFoundLander</span>{" "}
              and finally the footer. The real meat and bones is in the
              NotFoundLander.jsx. And I'm breaking these into the parts to clean
              it up and make it a bit more modular.
            </p>
            <p className="text-primary-foreground mt-2">
              I work in React.js and Vite here on this project. And I do a large
              majority of the styling in tailwind.css. I use a few imports from
              some resources I found online directing me to lucide-react. This
              is largely coded in JavaScript, because I felt that TypeScript
              would be overkill for such a project. However, I can write in
              TypeScript.
            </p>
          </div>
        </div>
        <h2 className="text-3xl lg:4xl font-semibold mt-8 mb-3">
          <span className="text-primary">C#</span> Example: <br />
          Unity Input Handler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-2">
          <div>
            <img
              src="/assets/code/InputHandler.png"
              alt="This is a photo of my code for managing a Unity Input Handler"
              className="border-1 border-primary w-95 md:w-auto h-auto ml-5 sm:mr-5"
            />
          </div>
          <div className="text-primary-foreground text-left ml-5">
            <p>
              In my project{" "}
              <a href="/ThermoFlux" className="underline text-primary">
                ThermoFlux
              </a>{" "}
              I had to develop a way to manage the inputs that were used in the
              game. I wanted a method that gave for longevity and assisted
              future development. I developed this piece of code the way I did
              to standardize new and future inputs as well as easily manipulate
              these inputs. I found later in the project for this to be much
              useful, since it gave a standard way to read if the user was
              inputting regardless of what script or where this was placed.
            </p>
            <p className="mt-2">
              This script works by managing and adding context and creates sort
              of "mini" functions to determine if the context is active or not.
              Then it has to enable and below the screenshot is an equal disable
              functionality. It's all very organized so it's easy to update
              later and add future inputs into the game.
            </p>
            <p className="mt-3">
              In this project, we determined that we would comment with our
              initials at the start of every comment to make it cleaner between
              each developer. So you'll see I did this as a standard in my
              general ThermoFlux comments.
            </p>
            <img
              src="/assets/code/InputHandler2.png"
              alt="Another Image of my code for Unity Input Handler"
              className="border-1 mx-auto justify-center border-primary md:w-225 md:h-78 mt-1"
            />
          </div>
        </div>
        <h2 className="font-bold text-4xl md:text-5xl mt-3">
          Check out my{" "}
          <a
            href="https://github.com/RangerHalt2"
            target="_blank"
            className="text-primary underline"
          >
            GitHub
          </a>{" "}
          to see more
        </h2>
      </div>
    </section>
  );
};

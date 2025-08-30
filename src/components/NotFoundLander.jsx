import { ArrowDown } from "lucide-react";

export const NotFoundLander = () => {
  return (
    <section>
      <div className="relative min-h-screen flex flex-col items-center h-full">
        <h1 className="mt-45 text-primary text-3xl md:text-4xl font-bold">
          404 Page Not Found
        </h1>
        <p>
          Oh No! It looks like you somehow got a little lost and wound up off my
          beaten path... Unfortunately there's nothing over here.
        </p>
        <div className="flex flex-col items-center">
          <p className="mt-10">Let's head on back to the main website</p>
          <ArrowDown className="h-10 w-10 justify-center text-primary animate-bounce mt-6" />
          <a href="" className="cosmic-button">
            Home
          </a>
        </div>
      </div>
    </section>
  );
};

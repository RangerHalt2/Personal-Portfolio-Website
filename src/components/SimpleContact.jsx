import { Linkedin, Mail } from "lucide-react";
import { FaDiscord } from "react-icons/fa";


export const SimpleContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Social Media <span className="text-primary">Contacts</span>
        </h2>
      </div>
      <div className="pt-8">
        <h4 className="font-medium mb-4">Connect With Me</h4>
        <div className="flex space-x-4 justify-center">
          <a
            className="hover:text-primary"
            href="https://www.linkedin.com/in/logan-baysinger-218966379/"
            target="_blank"
          >
            <Linkedin />
          </a>
          <a
            className="hover:text-primary"
            href="https://discord.com/users/432582043210088448"
            target="_blank"
          >
            <FaDiscord className="w-7 h-7" />
          </a>
          <a
            className="hover:text-primary"
            href="mailto:loganbaysinger@gmail.com"
          >
            <Mail />
          </a>
        </div>
      </div>
    </section>
  );
};

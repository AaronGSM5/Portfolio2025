import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Code } from "lucide-react";
import Link from "next/link";

export default function PortfolioHero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-transparent flex items-center justify-center">
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Name with Gradient */}
        <div className={`transition-all duration-1000 `}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
            Aaron Gaßmann
          </h1>

          {/* Animated Subtitle */}
          <div className="relative mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25"></div>
            <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-3 inline-block">
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                Full Stack Developer & Engineer
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className={`transition-all duration-1000 delay-300`}>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting digital experiences with modern technologies. Passionate
            about clean code, beautiful interfaces, and solving complex problems
            with elegant solutions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-500`}
        >
          <Button
            size="lg"
            className="cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-3 text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <Code className="mr-2 h-5 w-5" />
            View My Work
          </Button>
        </div>

        {/* Social Links */}
        <div className={`transition-all duration-1000 delay-700`}>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <Link
                key={social.label}
                href={social.href}
                className="group relative p-3 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:bg-white/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <social.icon className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                <span className="sr-only">{social.label}</span>

                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {social.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-2 left-2 w-32 h-32 border-l-2 border-t-2 border-indigo-500/75"></div>
      <div className="absolute top-2 right-2 w-32 h-32 border-r-2 border-t-2 border-purple-500/75"></div>
    </section>
  );
}


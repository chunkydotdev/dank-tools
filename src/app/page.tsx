import { Card, CardContent } from "@/components/ui/card";
import { routes } from "@/lib/routes";
import { IconCalendar } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

type Tool = {
  icon: string;
  title: string;
  description: string;
  date: string;
  url: string;
};

const tools: Tool[] = [
  {
    icon: "/discord-time-tag.svg",
    title: "Discord Timestamp",
    description:
      "Generate a discord timestamp with this simple yet powerful tool",
    date: "September 2022",
    url: routes.discordTimestamp.href,
  },
  {
    icon: "/svg-length.svg",
    title: "Svg length calculator",
    description: "Check the length of any svg path directly in your browser",
    date: "February 2025",
    url: routes.svgPathLengthCalculator.href,
  },
  {
    icon: "/polls.svg",
    title: "Simple polls",
    description: "Create simple shareable polls with this awesome tool",
    date: "March 2025",
    url: routes.simplePoll.href,
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen ">
      {/* Main Content */}
      <div className="relative z-10 p-8 pt-12 md:pt-40 max-w-screen-lg mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="order-2 md:order-1">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black mb-2 flex flex-row flex-wrap gap-4 md:flex-col items-start justify-center">
              <span className="text-navy-900">Chunky&apos;s</span>
              <span className="bg-gradient-to-r from-primary-500 to-[#E9190F] text-transparent bg-clip-text">
                Dank
              </span>
              <span className="text-navy-900">Tools</span>
            </h1>
            <p className="text-gray-600 text-center md:text-left">
              A collection of chunkydotdev&apos;s free and open-source tools.
            </p>
          </div>
          <div className="relative w-80 h-80 xl:w-96 xl:h-96 flex-shrink-0 order-1 md:order-2">
            <Image
              src="/chunky.svg"
              alt="Chunky's Tools Logo"
              fill
              className="object-contain"
            />
          </div>
        </header>

        {/* Tools Section */}
        <section>
          <h2 className="mb-6 font-bold text-zinc-500">Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link href={tool.url} key={tool.title}>
                <Card
                  key={tool.title}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                          <Image
                            src={tool.icon}
                            alt={`${tool.title} icon`}
                            width={24}
                            height={24}
                            className="object-contain w-10 h-10"
                          />
                        </div>
                        <h3 className="font-semibold">{tool.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {tool.description}
                      </p>
                      <time className="text-sm text-muted-foreground flex items-center gap-2">
                        <IconCalendar className="w-4 h-4" />
                        {tool.date}
                      </time>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

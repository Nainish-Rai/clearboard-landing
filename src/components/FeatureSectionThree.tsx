import { PocketKnife } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";

const DATA = [
  {
    title: "AI-Powered Tasks",
    description: "Create, track, and complete tasks with ease.",
    icon: "CircleHelp",
    image:
      "https://cdn.cosmos.so/e7614c38-f004-465f-8a13-06a8a1ef0a8b?format=jpeg",
  },
  {
    title: "Instant Insights",
    description: "See your progress and priorities at a glance.",
    icon: "Volume2",
    image:
      "https://cdn.cosmos.so/da484b0d-2bdd-427d-9443-064a12912517?format=jpeg",
  },
  {
    title: "Seamless Integrations",
    description: "Connect your favorite tools for a unified workflow.",
    icon: "Lightbulb",
    image:
      "https://cdn.cosmos.so/6552f273-4007-4d1a-895d-e7cac0597bd8?format=jpeg",
  },
];
const FeatureSectionThree = () => {
  return (
    <section className="py-32 max-w-7xl mx-auto">
      <div className="">
        <div className="container flex flex-col gap-6  py-4 max-lg:border-x lg:py-8">
          <Badge
            variant="outline"
            className="bg-card w-fit gap-1 px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <PocketKnife className="size-4" />
            <span>Features</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            Clearboard: AI Task Dashboard
          </h2>
          <p className="text-muted-foreground max-w-[600px] tracking-[-0.32px]">
            Manage tasks, track progress, and stay focused with AI.
          </p>
        </div>
      </div>

      <div className="lg:px-0! container border-t border-x">
        <div className="items-center">
          <div className="grid flex-1 max-lg:divide-y max-lg:border-x lg:grid-cols-3 lg:divide-x">
            {DATA.map((item, index) => (
              <div
                key={index}
                className="relative isolate pt-5 text-start lg:pt-20"
              >
                <h3 className="mt-2 px-4 text-lg font-semibold tracking-tight lg:px-8">
                  {item.title}
                </h3>
                <p className="text-muted-foreground pb-6 pt-2 lg:px-8">
                  {item.description}
                </p>
                <div className="border-t max-h-88 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="bg-muted  objec\ dark:invert"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { FeatureSectionThree };

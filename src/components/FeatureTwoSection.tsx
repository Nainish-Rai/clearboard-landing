"use client";
import { ArrowRight, BadgeCheck, Pyramid, Sparkle, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

interface DataItem {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const DATA: DataItem[] = [
  {
    title: "AI-Powered Task Automation",
    description:
      "Let Clearboard handle repetitive tasks so you can focus on what matters.",
    image:
      "https://cdn.cosmos.so/229ff492-90b9-41a1-95c6-1a569d650e08?format=jpeg",
    icon: <Zap className="size-6" />,
  },
  {
    title: "Real-Time Collaboration",
    description:
      "Work with your team live. Assign, track, and update tasks instantly.",
    image:
      "https://cdn.cosmos.so/b8c1820e-5f13-41c5-976e-70a143176618?format=jpeg",
    icon: <Pyramid className="size-6" />,
  },
  {
    title: "Smart Insights",
    description:
      "Get actionable analytics and suggestions to boost productivity easily.",
    image:
      "https://cdn.cosmos.so/d28cd781-acd2-44a7-95bb-dce7ff011305?format=jpeg",
    icon: <Sparkle className="size-6" />,
  },
];

const FeatureSectionTwo = () => {
  return (
    <section className="py-32">
      <div className="container max-w-7xl mx-auto">
        {/* Title and Buttons Section */}
        <div className="text-center">
          <h2 className="mb-6 ">Supercharge Your Workflow with Clearboard</h2>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button className="w-full sm:w-auto">
              See Features <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline" className="w-full shadow-sm sm:w-auto">
              Try Clearboard <BadgeCheck className="size-4" />
            </Button>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="mt-20 grid gap-6 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {DATA.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={feature.image}
                alt={feature.title}
                className="h-64 w-full rounded-lg object-cover"
              />
              <p className="mt-4 mb-2 text-xl font-bold">{feature.title}</p>
              <p className="mb-6 text-sm text-muted-foreground">
                {feature.description}
              </p>
              <div className="w-fit rounded-lg border p-2 shadow-sm">
                {feature.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeatureSectionTwo };

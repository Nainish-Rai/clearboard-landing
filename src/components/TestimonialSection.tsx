"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content:
      "Clearboard keeps our team organized and focused. Task management has never been easier!",
    link: "#",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/instagram-icon.svg",
  },
  {
    name: "Jane Doe",
    role: "CTO",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content:
      "AI-powered features help us hit every deadline. Clearboard is a game changer.",
    link: "#",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/twitter-icon.svg",
  },
  {
    name: "John Smith",
    role: "COO",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content:
      "Managing projects is effortless with Clearboard. Our workflow is so much smoother.",
    link: "#",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/instagram-icon.svg",
  },
  {
    name: "Jane Smith",
    role: "Tech Lead",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content:
      "Clearboard’s dashboard gives us clarity and control. Highly recommended!",
    link: "#",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/twitter-icon.svg",
  },
  {
    name: "Richard Doe",
    role: "Designer",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    content:
      "The UI is clean and intuitive. Clearboard makes collaboration simple.",
    link: "#",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/producthunt-icon.svg",
  },
  {
    name: "Gordon Doe",
    role: "Developer",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    content: "Clearboard’s AI suggestions save me hours every week. Love it!",
    link: "#",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/twitter-icon.svg",
  },
];

const Testimonial9 = () => {
  return (
    <section className="py-32">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <h2 className="mb-2">Trusted by teams using Clearboard</h2>
          <p className="text-muted-foreground lg:text-lg">
            The AI dashboard for effortless task management.
          </p>
        </div>
        <div className="mt-14 w-full">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
          >
            <Masonry gutter="20px" columnsCount={3}>
              {testimonials.map((testimonial, idx) => {
                return (
                  <Card key={idx} className="p-5 shadow-sm">
                    <div className="flex justify-between">
                      <div className="flex gap-4 leading-5">
                        <Avatar className="size-9 rounded-full ring-1 ring-input">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <a href={testimonial.link}>
                        <img
                          alt="Testimonial source"
                          src={testimonial.icon}
                          className="size-4"
                        />
                      </a>
                    </div>
                    <div className="mt-8 leading-7 text-foreground/70">
                      <q>{testimonial.content}</q>
                    </div>
                  </Card>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};

export { Testimonial9 };

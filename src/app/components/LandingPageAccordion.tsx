import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionData = [
  {
    title: "1. What is Aktiv?",
    desc: "Aktiv is a social fitness network that helps you find the right people for workouts, sports, and fitness activities. Whether you're at the gym, outdoors, or training at home, Aktiv connects you with others based on your goals, location, and vibe.",
  },
  {
    title: "2. Who is Aktiv for?",
    desc: "Aktiv is a social fitness network that helps you find the right people for workouts, sports, and fitness activities. Whether you're at the gym, outdoors, or training at home, Aktiv connects you with others based on your goals, location, and vibe.",
  },
  {
    title: "3. Can I find workout partners near me?",
    desc: "Aktiv is a social fitness network that helps you find the right people for workouts, sports, and fitness activities. Whether you're at the gym, outdoors, or training at home, Aktiv connects you with others based on your goals, location, and vibe.",
  },
  {
    title: "4. Is Aktiv a social network?",
    desc: "Aktiv is a social fitness network that helps you find the right people for workouts, sports, and fitness activities. Whether you're at the gym, outdoors, or training at home, Aktiv connects you with others based on your goals, location, and vibe.",
  },
  {
    title: "5. Can I connect with coaches or trainers?",
    desc: "Aktiv is a social fitness network that helps you find the right people for workouts, sports, and fitness activities. Whether you're at the gym, outdoors, or training at home, Aktiv connects you with others based on your goals, location, and vibe.",
  },
  {
    title: "6. How does Aktiv protect my privacy?",
    desc: "Aktiv is a social fitness network that helps you find the right people for workouts, sports, and fitness activities. Whether you're at the gym, outdoors, or training at home, Aktiv connects you with others based on your goals, location, and vibe.",
  },
  {
    title: "7. What is the Aktiv AI Assistant?",
    desc: "Aktiv is a social fitness network that helps you find the right people for workouts, sports, and fitness activities. Whether you're at the gym, outdoors, or training at home, Aktiv connects you with others based on your goals, location, and vibe.",
  },
];

const LandingPageAccordion = () => {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {accordionData.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.desc}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default LandingPageAccordion;

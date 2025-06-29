import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";

export default function Experience() {
  return (
    <main className="max-w-6xl w-full mx-auto py-20 px-4 md:px-10">
      <span className="text-4xl">💼</span>
      <Heading className="font-black mb-10">Work Experience</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Here&apos;s a summary of my work experience, where I&apos;ve contributed to
        building scalable software solutions, conducting research, and solving
        complex technical challenges.
      </Paragraph>
      <WorkHistory />
    </main>
  );
}
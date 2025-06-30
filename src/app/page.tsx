import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Container>
        <Heading
          as="h3"
          className="font-black text-lg md:text-lg lg:text-lg mt-8 mb-4"
          id="what-ive-worked-on"
        >
          AI & Software Development Projects
        </Heading>
        <Products />
        <TechStack />
      </Container>
    </>
  );
}

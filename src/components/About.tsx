"use client";
import { Paragraph } from "@/components/Paragraph";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JyYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  
  return (
    <BackgroundBeamsWithCollision className="min-h-screen">
      <div className="flex flex-col items-center justify-start w-full px-8 py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-16 w-full">
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{
                opacity: 0,
                y: -50,
                rotate: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: index % 2 === 0 ? 3 : -3,
              }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <Image
                src={image}
                width={200}
                height={400}
                alt="about"
                className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
              />
            </motion.div>
          ))}
        </div>

        <div className="w-full max-w-4xl mx-auto relative z-20">
          <Paragraph className=" mt-4">
            Hey there, I&apos;m Aditya Sugandhi - a passionate software engineer, researcher, and innovator specializing in building automation systems and intelligent infrastructure. Welcome to my corner of the digital world!
          </Paragraph>
          <Paragraph className=" mt-4">
            Currently working as a BAS Software Developer at Florida State University, I&apos;ve been captivated by the intersection of real-time systems, IoT integration, and AI-powered automation. My expertise spans from engineering WebSocket platforms handling 1,600+ concurrent connections to implementing BACnet-TCP/IP protocols for smart building management.
          </Paragraph>
          <Paragraph className=" mt-4">
            My journey encompasses distributed systems architecture, where I&apos;ve deployed Spark pipelines processing 1TB+ climate datasets and built end-to-end infrastructure automation with Terraform and Kubernetes. I believe in creating solutions that not only solve complex technical challenges but also contribute to a more sustainable and efficient future.
          </Paragraph>
          <Paragraph className=" mt-4">
            What drives me is the opportunity to work with cutting-edge technologies like Prometheus monitoring, Grafana dashboards, and machine learning models that can predict and optimize building performance. From developing RESTful APIs to implementing observability solutions, I ensure systems run smoothly with 99.9% uptime.
          </Paragraph>
          <Paragraph className=" mt-4">
            Through this website, I share my insights into building automation, distributed systems, and the fascinating world of intelligent infrastructure. Whether you&apos;re interested in BACnet protocols, Kubernetes deployments, or AI applications in building management, you&apos;ll find valuable content here.
          </Paragraph>
          <Paragraph className=" mt-4">
            Join me as I explore the convergence of traditional building systems with modern cloud-native technologies, creating smarter, more efficient environments that respond intelligently to human needs while minimizing environmental impact.
          </Paragraph>
          <Paragraph className=" mt-4">
            Thank you for visiting, and I look forward to sharing this journey of innovation and discovery with you.
          </Paragraph>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

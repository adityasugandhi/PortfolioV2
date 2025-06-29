"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface SmoothLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

export const SmoothLink = ({ href, children, className, ...props }: SmoothLinkProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Add a subtle transition effect
    document.body.style.opacity = "0.95";
    document.body.style.transition = "opacity 0.15s ease-out";
    
    setTimeout(() => {
      router.push(href);
      
      // Reset opacity after navigation
      setTimeout(() => {
        document.body.style.opacity = "1";
        document.body.style.transition = "";
      }, 50);
    }, 100);
  };

  return (
    <Link 
      href={href} 
      className={className} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};
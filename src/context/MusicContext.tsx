"use client";
import { createContext, useContext, useRef, useState, useEffect, ReactNode } from "react";

interface MusicContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
  volume: number;
  setVolume: (volume: number) => void;
  initializeMusic: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const useMusicContext = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusicContext must be used within a MusicProvider");
  }
  return context;
};

interface MusicProviderProps {
  children: ReactNode;
}

export const MusicProvider = ({ children }: MusicProviderProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.25);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Create the audio element once when the provider mounts
    // Use a global variable to persist across navigation
    if (!audioRef.current) {
      // Check if there's already a global audio instance
      if (typeof window !== 'undefined') {
        if (!(window as any).__globalAudio) {
          const audio = new Audio("/music/SENSITIVE (SLOWED TO PERFECTION).mp3");
          audio.loop = true;
          audio.volume = volume;
          audio.preload = "auto";
          (window as any).__globalAudio = audio;
        }
        audioRef.current = (window as any).__globalAudio;
        
        // Sync state with existing audio
        if (audioRef.current) {
          setIsPlaying(!audioRef.current.paused);
        }
        
        // Add event listeners
        const audio = audioRef.current;
        if (audio) {
          const handlePlay = () => setIsPlaying(true);
          const handlePause = () => setIsPlaying(false);
          const handleEnded = () => setIsPlaying(false);
          
          audio.addEventListener("play", handlePlay);
          audio.addEventListener("pause", handlePause);
          audio.addEventListener("ended", handleEnded);
          
          // Cleanup function for event listeners only
          return () => {
            audio.removeEventListener("play", handlePlay);
            audio.removeEventListener("pause", handlePause);
            audio.removeEventListener("ended", handleEnded);
          };
        }
      }
    }
  }, [volume]);

  const initializeMusic = () => {
    // Check if music is already initialized globally
    if (typeof window !== 'undefined' && (window as any).__musicInitialized) {
      return; // Already initialized, don't restart
    }
    
    if (!isInitialized && audioRef.current) {
      setIsInitialized(true);
      if (typeof window !== 'undefined') {
        (window as any).__musicInitialized = true;
      }
      // Auto-start music after user interaction (vinyl loads)
      toggleMusic();
    }
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.log("Audio play failed:", error);
      });
    }
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const value: MusicContextType = {
    isPlaying,
    toggleMusic,
    volume,
    setVolume,
    initializeMusic,
  };

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
};
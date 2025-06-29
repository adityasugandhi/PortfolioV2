"use client";
import { useEffect, useRef, useState, forwardRef, useImperativeHandle, useCallback } from "react";

interface BackgroundMusicProps {
  shouldPlay: boolean;
  volume?: number;
  onToggle?: (isPlaying: boolean) => void;
}

interface BackgroundMusicRef {
  toggleMusic: () => void;
}

export const BackgroundMusic = forwardRef<BackgroundMusicRef, BackgroundMusicProps>(
  ({ shouldPlay, volume = 0.25, onToggle }, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      onToggle?.(false);
    } else {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          onToggle?.(true);
        })
        .catch((error) => {
          console.log("Audio play failed:", error);
        });
    }
  }, [isPlaying, onToggle]);

  // Expose toggle function to parent component
  useImperativeHandle(ref, () => ({
    toggleMusic
  }), [toggleMusic]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    if (shouldPlay && !isPlaying) {
      // Add a small delay before starting music
      const timer = setTimeout(() => {
        audio.play()
          .then(() => {
            setIsPlaying(true);
            onToggle?.(true);
          })
          .catch((error) => {
            console.log("Audio autoplay prevented:", error);
            // Autoplay was prevented, which is normal in most browsers
          });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [shouldPlay, volume, isPlaying, onToggle]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setIsPlaying(false);
      onToggle?.(false);
    };

    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, [onToggle]);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      className="hidden"
    >
      <source src="/music/SENSITIVE (SLOWED TO PERFECTION).mp3" type="audio/mpeg" />
    </audio>
  );
});

BackgroundMusic.displayName = 'BackgroundMusic';
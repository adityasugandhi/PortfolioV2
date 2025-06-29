# Vinyl Record Video Conversion Guide

## Current File
- Source: `public/vecteezy_a-smooth-minimal-animation-of-a-vinyl-record-disc-moving-out_35643433.mov`

## Required Conversions

### 1. Convert to MP4 (Primary)
```bash
# Using FFmpeg (recommended)
ffmpeg -i public/vecteezy_a-smooth-minimal-animation-of-a-vinyl-record-disc-moving-out_35643433.mov \
  -c:v libx264 \
  -crf 23 \
  -preset medium \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  public/vinyl-record.mp4
```

### 2. Convert to WebM (Modern browsers)
```bash
ffmpeg -i public/vecteezy_a-smooth-minimal-animation-of-a-vinyl-record-disc-moving-out_35643433.mov \
  -c:v libvpx-vp9 \
  -crf 30 \
  -b:v 0 \
  -c:a libopus \
  -b:a 128k \
  public/vinyl-record.webm
```

### 3. Alternative: Online Conversion
If you don't have FFmpeg installed:
1. Visit: https://cloudconvert.com/mov-to-mp4
2. Upload your .mov file
3. Convert to MP4 (H.264, High quality)
4. Convert to WebM (VP9 codec)
5. Download and rename to `vinyl-record.mp4` and `vinyl-record.webm`

## File Placement
Place the converted files in:
- `public/vinyl-record.mp4`
- `public/vinyl-record.webm`

## Background Music (Optional)
Add your background music files:
- `public/background-music.mp3`
- `public/background-music.ogg`

## Features Implemented
✅ Vinyl record animation in top-right corner
✅ Starts after page fully loads
✅ Background music at 25% volume
✅ Responsive sizing (24px mobile → 40px desktop)
✅ Smooth fade-in animation
✅ Fallback for unsupported browsers
✅ Music starts after vinyl animation loads

## Notes
- The animation will loop continuously
- Music will loop continuously
- Volume is set to 25% (0.25)
- Autoplay might be blocked by browsers (normal behavior)
- Users may need to interact with the page first for audio to play
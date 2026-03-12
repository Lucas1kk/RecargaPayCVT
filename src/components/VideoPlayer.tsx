import React, { useState, useRef } from 'react';
import { Play, AlertTriangle } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
}

export function VideoPlayer({ url }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    
    // Send play command to Vimeo player via postMessage API
    // This ensures the video plays with sound because it's triggered by a direct user click
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(JSON.stringify({ method: 'play' }), '*');
      iframeRef.current.contentWindow.postMessage(JSON.stringify({ method: 'setVolume', value: 1 }), '*');
    }
  };

  return (
    <div className="w-full bg-black rounded-2xl overflow-hidden relative group">
      
      {/* Custom Overlay - Only visible when not playing */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer transition-all duration-500 hover:bg-black/70"
          onClick={handlePlay}
        >
          {/* Background Gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/80 pointer-events-none" />

          {/* Pulsing Play Button */}
          <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300 z-30">
            <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-20 duration-1000" />
            <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.5)] border border-amber-200/30">
              <Play fill="#000" className="text-black ml-2 w-8 h-8 md:w-10 md:h-10" />
            </div>
          </div>

          {/* Warning Text Box matching the image */}
          <div className="text-center px-6 py-5 max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700 z-30 border border-amber-500/50 rounded-xl bg-black/60 shadow-[0_0_30px_rgba(245,158,11,0.15)]">
            <div className="flex justify-center mb-3">
              <AlertTriangle size={32} className="text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-amber-400 mb-2 leading-tight">
              ATENÇÃO: Assista a este vídeo de 3 minutos
            </h3>
            <p className="text-gray-300 text-sm md:text-base font-medium">
              Descubra o passo a passo para garantir seu bônus sem erros.
            </p>
          </div>
        </div>
      )}

      {/* Responsive Iframe Container */}
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        {/* Iframe is always rendered to preload the video, avoiding gray screens and allowing instant play */}
        <iframe 
          ref={iframeRef}
          src={`${url}?api=1&title=0&byline=0&portrait=0&badge=0&autopause=0&muted=0`} 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} 
          allowFullScreen 
          allow="autoplay; fullscreen; picture-in-picture"
          title="Vimeo Video"
        />
      </div>
    </div>
  );
}

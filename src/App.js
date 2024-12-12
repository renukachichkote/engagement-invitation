import React, { useState, useRef } from "react";

const EngagementInvitation = () => {
  const [theme] = useState({
    primaryColor: "#FF6B9E", // Vibrant pink
    secondaryColor: "#9C27B0", // Deep purple
    tertiaryColor: "#00BCD4", // Bright cyan
    accentColor: "#FFC107", // Amber
    complementaryColor: "#4CAF50", // Green
    fonts: {
      heading: "'Playfair Display', serif",
      names: "'Parisienne', cursive",
      details: "'Montserrat', sans-serif",
      quote: "'Tangerine', cursive",
    },
  });

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((error) => console.error("Audio play error:", error));
      }
    }
  };

  const handledAudioEnd = () => {
    setIsPlaying(false);
  };

  // Enhanced Intricate Flower Decoration (unchanged)
  const ElaborateFlowerDecoration = ({ className, colors, scale = 1 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      style={{ transform: `scale(${scale})` }}
    >
      <defs>
        <radialGradient id="elaborateFlowerGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={colors.primaryColor} stopOpacity="0.8" />
          <stop
            offset="100%"
            stopColor={colors.secondaryColor}
            stopOpacity="0.4"
          />
        </radialGradient>
      </defs>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation) => (
        <g key={rotation} transform={`rotate(${rotation} 100 100)`}>
          <path
            d="M100 100
               Q120 50, 100 20
               Q80 50, 100 100
               Q120 150, 100 180
               Q80 150, 100 100"
            fill="url(#elaborateFlowerGradient)"
            stroke={colors.accentColor}
            strokeWidth="2"
            opacity="0.7"
          />
        </g>
      ))}
      <circle
        cx="100"
        cy="100"
        r="15"
        fill={colors.complementaryColor}
        opacity="0.6"
      />
    </svg>
  );

  // Enhanced Leaf Decoration (unchanged)
  const IntricateLeafDecoration = ({ className, colors, scale = 1 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      style={{ transform: `scale(${scale})` }}
    >
      <defs>
        <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="0%"
            stopColor={colors.tertiaryColor}
            stopOpacity="0.7"
          />
          <stop
            offset="100%"
            stopColor={colors.complementaryColor}
            stopOpacity="0.3"
          />
        </linearGradient>
      </defs>
      <path
        d="M100 100
           C70 50, 50 80, 70 120
           C90 160, 130 140, 100 100
           C70 60, 90 40, 100 100
           C130 160, 150 80, 100 100"
        fill="url(#leafGradient)"
        stroke={colors.accentColor}
        strokeWidth="3"
        opacity="0.8"
      />
      <path
        d="M100 100
           Q80 70, 90 50
           Q110 30, 100 100
           Q90 170, 110 150
           Q120 130, 100 100"
        fill="none"
        stroke={colors.secondaryColor}
        strokeWidth="1.5"
        opacity="0.5"
      />
    </svg>
  );

  return (
    <>
      {/* Google Fonts Link with Added Font Weights */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Parisienne&family=Montserrat:wght@400;500;600;700&family=Tangerine:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* Tailwind CSS animations and styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatAnimation {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes bloomAnimation {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(5deg); }
        }
        @keyframes pulseAnimation {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: floatAnimation 4s ease-in-out infinite;
        }
        .animate-bloom {
          animation: bloomAnimation 5s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulseAnimation 2s ease-in-out infinite;
        }
      `}</style>

      <div
        className="min-h-screen flex items-center justify-center relative overflow-hidden p-4"
        style={{
          background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor}, ${theme.tertiaryColor})`,
          fontFamily: theme.fonts.details,
        }}
      >
        <audio
          ref={audioRef}
          src="/audio.mp3"
          onEnded={handledAudioEnd}
          aria-label="Background music for engagement invitation"
        />

        {/* Decorative Border Elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Corner Decorations with More Elaborate Flowers */}
          <ElaborateFlowerDecoration
            className="absolute top-0 left-0 w-32 h-32 animate-float opacity-70 transform -rotate-45"
            colors={theme}
            scale={1.2}
          />
          <ElaborateFlowerDecoration
            className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 animate-float opacity-70 transform rotate-45"
            colors={theme}
            scale={1.2}
          />
          <ElaborateFlowerDecoration
            className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 animate-bloom opacity-60 transform -rotate-90"
            colors={theme}
            scale={1}
          />
          <ElaborateFlowerDecoration
            className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 animate-bloom opacity-60 transform rotate-90"
            colors={theme}
            scale={1}
          />
          {/* Additional Corner Flowers and Leaves */}
          <ElaborateFlowerDecoration
            className="absolute top-1/4 left-4 w-24 h-24 md:w-32 md:h-32 animate-float opacity-50 transform -rotate-15"
            colors={theme}
          />
          <ElaborateFlowerDecoration
            className="absolute top-1/4 right-4 w-24 h-24 md:w-32 md:h-32 animate-float opacity-50 transform rotate-15"
            colors={theme}
          />
        </div>

        <div
          className="w-full max-w-sm mx-auto bg-white relative z-10 text-center rounded-lg shadow-lg"
          style={{
            boxShadow: `0 25px 50px -12px ${theme.primaryColor}40`,
          }}
          aria-live="polite"
        >
          <div className="relative py-6 px-4">
            {/* Invitation Content with Animations */}
            <h1
              className="text-xl mb-3 animate-fade-in font-bold"
              style={{
                color: theme.complementaryColor,
                fontFamily: theme.fonts.heading,
                animationDelay: "0.2s",
              }}
            >
              Join us to celebrate the engagement of
            </h1>

            <div className="mb-4">
              <p
                className="text-4xl mb-1 animate-fade-in font-semibold"
                style={{
                  color: theme.primaryColor,
                  fontFamily: theme.fonts.names,
                  animationDelay: "0.4s",
                }}
              >
                Vijaylaxmi
              </p>
              <span
                className="animate-fade-in font-semibold"
                style={{
                  display: "inline-block",
                  fontSize: ".8rem",
                  color: theme.complementaryColor,
                  animationDelay: "0.6s",
                }}
                aria-label="and"
              >
                AND
              </span>
              <p
                className="text-4xl mt-1 animate-fade-in font-semibold"
                style={{
                  color: theme.primaryColor,
                  fontFamily: theme.fonts.names,
                  animationDelay: "0.8s",
                }}
              >
                Viresh
              </p>
            </div>

            <div
              className="mb-4 text-gray-800 animate-fade-in"
              style={{
                animationDelay: "1s",
                color: theme.secondaryColor,
              }}
            >
              <h2
                className="text-lg font-bold mb-1"
                style={{
                  color: theme.complementaryColor,
                  fontFamily: theme.fonts.heading,
                }}
              >
                Venue
              </h2>
              <address
                style={{
                  fontFamily: theme.fonts.details,
                  color: theme.secondaryColor,
                }}
                className="not-italic font-semibold text-sm"
              >
                Date: December 25, 2024
                <br />
                Tara Bangarage Kalyan Mantap, near High Court
                <br />
                KALABURAGI
              </address>
            </div>

            {/* Enhanced Audio Control Button */}
            <div
              className="mt-3 animate-fade-in"
              style={{ animationDelay: "1.2s" }}
            >
              <button
                onClick={toggleAudio}
                className={`
                  px-5 py-2 rounded-full
                  transition-all duration-300
                  hover:shadow-lg
                  focus:outline-none
                  ${isPlaying ? "animate-pulse" : ""}
                `}
                style={{
                  backgroundColor: theme.complementaryColor,
                  color: "white",
                  fontFamily: theme.fonts.details,
                  fontWeight: 600,
                  boxShadow: `0 4px 6px -1px ${theme.primaryColor}40, 0 2px 4px -1px ${theme.primaryColor}30`,
                }}
                aria-label={isPlaying ? "Pause music" : "Play music"}
              >
                {isPlaying ? "Pause Music" : "Play Music"}
                <span
                  className="ml-2 inline-block"
                  style={{
                    color: theme.accentColor,
                    transform: isPlaying ? "rotate(90deg)" : "none",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {isPlaying ? "❚❚" : "▶"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EngagementInvitation;

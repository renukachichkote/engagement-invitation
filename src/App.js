import React, { useState, useEffect, useRef } from "react";

const EngagementInvitation = () => {
  const [theme] = useState({
    primaryColor: "#10B981", // Emerald green
    secondaryColor: "#D1FAE5", // Light mint green
    accentColor: "#059669", // Deep green
    fonts: {
      heading: "'Merriweather', serif",
      names: "'Great Vibes', cursive",
      details: "'Lato', sans-serif",
      quote: "'Caveat', cursive",
    },
  });

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Play audio automatically on load
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Audio autoplay blocked:", error);
        });
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Audio play error:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const LeafDecoration = ({ className, colors }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
    >
      <path
        d="M50 50
           C30 30, 20 40, 30 60
           C40 80, 60 80, 50 50
           C40 30, 60 20, 50 50"
        fill={colors.secondaryColor}
        stroke={colors.primaryColor}
        strokeWidth="2"
        opacity="0.7"
      />
    </svg>
  );

  const FlowerDecoration = ({ className, colors }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
    >
      <defs>
        <radialGradient id="flowerGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={colors.primaryColor} stopOpacity="0.7" />
          <stop
            offset="100%"
            stopColor={colors.secondaryColor}
            stopOpacity="0.3"
          />
        </radialGradient>
      </defs>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation) => (
        <path
          key={rotation}
          d="M50 50
             C40 30, 30 40, 40 55
             C50 70, 60 60, 50 50"
          transform={`rotate(${rotation} 50 50)`}
          fill="url(#flowerGradient)"
          stroke={colors.accentColor}
          strokeWidth="1.5"
          opacity="0.8"
        />
      ))}
      <circle cx="50" cy="50" r="10" fill={colors.accentColor} opacity="0.5" />
    </svg>
  );

  return (
    <>
      {/* Google Fonts Link */}
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Great+Vibes&family=Lato:wght@400;700&family=Caveat&display=swap"
        rel="stylesheet"
      />

      <div
        onClick={toggleAudio}
        className="min-h-screen flex items-center justify-center relative overflow-hidden cursor-pointer p-4"
        style={{
          background: `linear-gradient(135deg, ${theme.secondaryColor}, ${theme.primaryColor})`,
          fontFamily: theme.fonts.details,
        }}
      >
        <audio ref={audioRef} src="/audio.mp3" />

        {/* Decorative Leaves and Flowers */}
        <div className="absolute inset-0 pointer-events-none">
          <LeafDecoration
            className="absolute top-4 left-4 w-24 h-24 md:w-32 md:h-32 transform -rotate-45"
            colors={theme}
          />
          <LeafDecoration
            className="absolute bottom-4 right-4 w-24 h-24 md:w-32 md:h-32 transform rotate-135"
            colors={theme}
          />
          <FlowerDecoration
            className="absolute top-20 right-20 w-16 h-16 md:w-24 md:h-24"
            colors={theme}
          />
          <FlowerDecoration
            className="absolute bottom-20 left-20 w-16 h-16 md:w-24 md:h-24"
            colors={theme}
          />
        </div>

        <div
          className="w-full max-w-md mx-auto bg-white relative z-10 text-center rounded-lg shadow-lg"
          style={{
            boxShadow: `0 25px 50px -12px ${theme.primaryColor}40`,
          }}
        >
          <div className="relative py-8 px-6">
            {/* Invitation Content */}
            <h2
              className="text-xl mb-4"
              style={{
                color: theme.accentColor,
                fontFamily: theme.fonts.heading,
              }}
            >
              Join us to celebrate the engagement of
            </h2>

            <div className="mb-6">
              <p
                className="text-4xl mb-2"
                style={{
                  color: theme.primaryColor,
                  fontFamily: theme.fonts.names,
                  fontWeight: 400,
                }}
              >
                Vijaylaxmi
              </p>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "1.5rem",
                  color: theme.accentColor,
                }}
              >
                &hearts;
              </span>
              <p
                className="text-4xl mt-2"
                style={{
                  color: theme.primaryColor,
                  fontFamily: theme.fonts.names,
                  fontWeight: 400,
                }}
              >
                Viresh
              </p>
            </div>

            <div className="mb-6 text-gray-700">
              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  color: theme.accentColor,
                  fontFamily: theme.fonts.heading,
                }}
              >
                Venue
              </h3>
              <p style={{ fontFamily: theme.fonts.details }}>
                Date: December 25, 2024
                <br />
                Tara Bangarage Kalyan Mantap, near High Court
                <br />
                KALABURAGI
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EngagementInvitation;

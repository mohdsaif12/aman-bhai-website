// PLACEHOLDER — replace with real logo image when available
// Matches: Blue "A" triangle icon + "INCORVIA" in bold blue

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      {/* "A" triangle icon — matches design reference */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer triangle (A shape) */}
        <path
          d="M18 3 L34 32 H2 Z"
          fill="#0054B1"
        />
        {/* Inner cutout to form the "A" crossbar */}
        <path
          d="M18 16 L24 28 H12 Z"
          fill="white"
        />
      </svg>

      {/* Wordmark — bold blue, no subtitle */}
      <span
        className="font-black text-[#0054B1]"
        style={{ fontSize: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1 }}
      >
        INCORVIA
      </span>
    </div>
  );
};

export default Logo;

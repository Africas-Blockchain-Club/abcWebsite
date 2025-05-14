export default function SectionDivider() {
  return (
    <div className="w-full overflow-hidden bg-[#2B2B2B]">
      <svg
        viewBox="0 0 1440 100"
        className="w-full h-20"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L480,0 L500,40 L520,0 L1440,0 L1440,100 L0,100 Z"
          fill="#FFD700"
          style={{
            filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.2))",
          }}
        />
      </svg>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="" style={{ background: 'linear-gradient(to left, darkblue, purple)', minHeight: '300vh' }}>
        {Array(100).fill(null).map((_, i) => (
          <p key={i}>.</p>
        ))}
      </main>
      
    </div>
  );
}

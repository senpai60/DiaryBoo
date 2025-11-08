import React from "react";

const dummyEntry = {
  // Main "Asahi" image se content le raha hoon
  title: "About Me",
  bio: [
    "ASAHI",
    "20/08/2001",
    "Age: 21th",
    "Weight: 56 kg",
    "Height: 173 cm",
  ],
  content: [
    "His MBTI personality type is INFP.",
    "He taught himself how to self-compose when he was in middle school.",
    "His hobbies are composing, soccer, and football.",
    "His motto is 'good attitude, good mood, good music'.",
  ],
  images: [
    // In images ko "Polaroid" style denge
    "https://i.pinimg.com/736x/78/92/79/7892791a95ad8b1f8ea4f69e8b8a737b.jpg", // Asahi 1
    "https://i.pinimg.com/736x/53/31/5b/53315b38a2150213eb6a45ab04e34209.jpg", // Asahi 2
  ],
  // Paperclip image (yeh assets tujhe dhoondne honge)
  paperclipImage: "images/realistic-paperclip.png",
};

export default function DiaryPreview() {
  const { title, bio, content, images, paperclipImage } = dummyEntry;

  {/* 1. FONT: 'Kalam' (handwritten) aur 'Special Elite' (typewriter) perfect hain */}
  {/* (Import: @import url('https://fonts.googleapis.com/css2?family=Kalam&family=Special+Elite&display=swap');) */}

  return (
    // 2. BACKGROUND: Gradient ki jagah, ek real texture (jaise cork board)
    <section className="relative w-full min-h-screen overflow-hidden 
                   bg-[#c7a983] bg-[url('https://www.transparenttextures.com/patterns/dark-denim.png')] 
                   p-10">
      
      {/* 📔 Main container ko do hisso mein baant diya (like the image) */}
      <div className="relative mx-auto max-w-5xl h-[800px]">
        
        {/* --- LEFT SIDE (Bio & Photos) --- */}

        {/* 3. POLAROID 1 (Photo + Paperclip) */}
        {/* Paperclip ko photo ke upar 'absolute' position kiya hai */}
        <img
          src={paperclipImage} // Yeh asli PNG image hai
          alt="paperclip"
          className="absolute top-8 left-16 w-12 z-10 rotate-[-15deg] drop-shadow-md"
        />
        <div className="absolute left-10 top-12 bg-white p-2 pb-4 rounded-sm shadow-xl rotate-[-8deg]">
          <img
            src={images[0]}
            className="w-52 h-64 object-cover"
            alt="user photo 1"
          />
        </div>
        
        {/* 4. TORN PAPER NOTE (Bio ke liye) */}
        <div className="absolute left-10 top-[350px] w-64 h-48 bg-white/90 p-6 shadow-lg rotate-[-2deg] 
                        font-['Special_Elite'] text-stone-800
                        {/* Yeh assets 'torn paper' look denge */}
                        bg-[url('/assets/images/torn-paper-note.png')] bg-cover">
          {bio.map((line, i) => (
            <p key={i} className={`text-lg ${i === 0 ? 'font-bold text-2xl mb-2' : 'text-md'}`}>
              {line}
            </p>
          ))}
        </div>

        {/* 5. POLAROID 2 (Neeche wala photo) */}
        <img
          src={paperclipImage}
          alt="paperclip"
          className="absolute top-[550px] left-16 w-12 z-10 rotate-[-25deg] drop-shadow-md"
        />
        <div className="absolute left-12 top-[560px] bg-white p-2 pb-4 rounded-sm shadow-xl rotate-[-5deg]">
          <img
            src={images[1]}
            className="w-60 h-44 object-cover"
            alt="user photo 2"
          />
        </div>

        {/* --- RIGHT SIDE (About Me Content) --- */}
        
        {/* 6. CRUMPLED PAPER (Main content ke liye) */}
        <div className="absolute top-10 right-10 w-[60%] h-[720px] 
                        bg-white bg-[url('https://www.transparenttextures.com/patterns/paper-1.png')] 
                        p-12 shadow-2xl rounded-md font-['Kalam'] text-gray-800">
          
          <h1 className="text-5xl text-stone-700 font-bold tracking-tight mb-8">
            {title}
          </h1>
          
          <ul className="list-disc pl-5 space-y-4">
            {content.map((line, i) => (
              <li key={i} className="text-xl leading-relaxed">
                {line}
              </li>
            ))}
          </ul>

          {/* 7. Washi Tape (Yeh bhi CSS ki jagah image ho sakti hai) */}
          <div className="absolute top-10 right-10 w-24 h-5 bg-yellow-300/60 rotate-[20deg] border border-yellow-400/50 shadow-sm"></div>
        </div>
        
      </div>
    </section>
  );
}
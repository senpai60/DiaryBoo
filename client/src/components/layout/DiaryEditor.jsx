import React, { useState } from "react";
import { diaryApi } from "../../api/diaryApi";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
// ... (baaki imports)

function DiaryEditor({
  title,
  setTitle,
  content,
  setContent,
  images,
  setImages,
  stickers,
  setStickers,
  location,
  setLocation,
}) {
  

  const { fetchLatestDiaryEntry } = useContext(AuthContext);

  const handleCreate = async (e) => {
    e.preventDefault();
    const entry = { title, content, images, stickers, location };
    try {
      const response = await diaryApi.post("/create-entry", {
        title,
        content,
        location,
      });
      if (response.data) await fetchLatestDiaryEntry();
    } catch (err) {}
    console.log("New Diary Entry:", entry);
  };

  const paperBoxClass =
    "bg-white bg-[url('https://www.transparenttextures.com/patterns/paper-1.png')] p-6 rounded-lg shadow-xl border border-stone-300";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden 
                       bg-transparent
                       p-10"
    >
      <h1 className="text-5xl font-bold text-stone-800 mb-10 text-center font-['Kalam',cursive]">
        Create New Memory
      </h1>

      <div className="grid grid-cols-12 gap-6">
        <div className={`col-span-12 md:col-span-6 ${paperBoxClass}`}>
          <h2 className="text-3xl font-bold mb-4 text-stone-700 font-['Kalam',cursive]">
            Title
          </h2>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's it called...?"
            className="w-full bg-transparent border-b-2 border-stone-400 py-2 text-xl text-stone-700 placeholder:text-stone-500 font-['Special_Elite'] focus:outline-none focus:border-amber-700"
          />
        </div>

        {/* 🟩 Location */}
        <div className={`col-span-12 md:col-span-6 ${paperBoxClass}`}>
          <h2 className="text-3xl font-bold mb-4 text-stone-700 font-['Kalam',cursive]">
            Location
          </h2>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where did this happen...?"
            className="w-full bg-transparent border-b-2 border-stone-400 py-2 text-xl text-stone-700 placeholder:text-stone-500 font-['Special_Elite'] focus:outline-none focus:border-amber-700"
          />
        </div>

        {/* 🟧 Content Area */}
        <div className={`col-span-12 ${paperBoxClass}`}>
          <h2 className="text-3xl font-bold mb-4 text-stone-700 font-['Kalam',cursive]">
            Your Thoughts
          </h2>

          {/* 6. TEXTAREA: Styled as a paper-box */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your thoughts..."
            rows={8}
            className="w-full bg-stone-50/50 border-2 border-stone-300 rounded-lg p-3 text-xl text-stone-700 placeholder:text-stone-500 font-['Special_Elite'] focus:outline-none focus:border-amber-700"
          />
        </div>

        {/* 🟪 Image Uploader */}
        <div className={`col-span-12 md:col-span-6 ${paperBoxClass}`}>
          <h2 className="text-3xl font-bold mb-4 text-stone-700 font-['Kalam',cursive]">
            Add Photos
          </h2>
          {/* 7. UPLOADER: Suggestion for styling your component */}
          <div className="w-full h-48 border-2 border-dashed border-stone-400 rounded-lg flex items-center justify-center text-center text-stone-500 font-['Special_Elite']">
            (This is where your ImageUploader component goes. <br />
            Make its background transparent.)
          </div>
        </div>

        {/* 🟥 Sticker Selector */}
        <div className={`col-span-12 md:col-span-6 ${paperBoxClass}`}>
          <h2 className="text-3xl font-bold mb-4 text-stone-700 font-['Kalam',cursive]">
            Add Stickers
          </h2>
          <div className="w-full h-48 border-2 border-dashed border-stone-400 rounded-lg flex items-center justify-center text-center text-stone-500 font-['Special_Elite']">
            (This is where your StickerSelector component goes. <br />
            It should also be transparent.)
          </div>
        </div>

        {/* 🟨 Create Button */}
        <div className="col-span-12 flex justify-end">
          {/* 8. BUTTON: Styled as a brown "label" button */}
          <button
            onClick={(e) => handleCreate(e)}
            className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-['Kalam',cursive] text-2xl"
          >
            📔 Create Entry
          </button>
        </div>
      </div>
    </section>
  );
}

export default DiaryEditor;

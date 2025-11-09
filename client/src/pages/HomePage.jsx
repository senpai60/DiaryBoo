import { useState } from "react";
import Button from "../components/ui/Button";
import DiaryEditor from "../components/layout/DiaryEditor";
import DiaryPreview from "../components/layout/DiaryPreview";

export default function HomePage() {
  const [active, setActive] = useState("editor");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [stickers, setStickers] = useState([]);
  const [location, setLocation] = useState("");

  return (
    <section className="w-full h-full p-6 uif">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <Button
            active={active === "editor"}
            onClick={() => setActive("editor")}
            bg="transparent"
            activeBg="#151820"
            color="#fff"
            className={"!font-light text-sm"}
          >
            Editor
          </Button>

          <Button
            active={active === "preview"}
            onClick={() => setActive("preview")}
            bg="transparent"
            activeBg="#151820"
            color="#fff"
            className={"!font-light text-sm"}
          >
            Preview
          </Button>
        </div>
      </div>
      <div className="main-sections w-full">
        {active === "editor" ? (
          <DiaryEditor
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            images={images}
            setImages={setImages}
            stickers={stickers}
            setStickers={setStickers}
            location={location}
            setLocation={setLocation}
          />
        ) : (
          <DiaryPreview 
            title={title}
            content={content}
            images={images}
            stickers={stickers}
            location={location}
          />
        )}
      </div>
    </section>
  );
}

import { useState } from "react";
import Button from "../components/ui/Button";
import DiaryEditor from "../components/layout/DiaryEditor";
import DiaryPreview from "../components/layout/DiaryPreview";

export default function HomePage() {
  const [active, setActive] = useState("editor");

  return (
    <section className="w-full h-full p-6 uif">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl text-white">Create Your Memory :)</h1>

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
            {active==="editor" ? (<DiaryEditor/>) : (<DiaryPreview/>)}
      </div>
    </section>
  );
}

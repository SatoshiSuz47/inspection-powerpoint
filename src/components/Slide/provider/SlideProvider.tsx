import { Button } from "@mui/material";
import { useFullscreen, useToggle } from "react-use";
import { useRef } from "react";

import { slideDataType } from "~/types/type";
import Slide from "../Slide";
import { usePageCounter } from "../../../hooks/usePageCounter";
import { useKeyDown } from "../../../hooks/useKeyDown";

//データ定義

const slideData: slideDataType[] = [];
for (let i = 0; i < 20; i++) {
  slideData.push({
    title: `title${i}`,
    content: `content${i}`,
  });
}

//slideの枚数
const SLIDE_MAX = slideData.length - 1;
const SLIDE_MIN = 0;

console.log(slideData);

export default function SlideProvider() {
  const ref = useRef(null);
  const { count, increment, decrement } = usePageCounter(0);
  const [show, toggle] = useToggle(false);
  useFullscreen(ref, show, {
    onClose: () => toggle(false),
  });
  useKeyDown("ArrowLeft", () => decrement());
  return (
    <>
      <div ref={ref} style={{ backgroundColor: "white" }}>
        {slideData.map((elm, index) => (
          <Slide
            key={elm.title}
            title={elm.title}
            content={elm.content}
            index={index}
            count={count}
          />
        ))}
      </div>
      <Button onClick={() => (count !== SLIDE_MIN ? decrement() : 0)}>
        Prev
      </Button>
      {count}
      <Button onClick={() => (count !== SLIDE_MAX ? increment() : 0)}>
        Next
      </Button>
      <Button onClick={() => toggle()}>Toggle</Button>
    </>
  );
}

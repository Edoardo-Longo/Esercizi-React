import { useRef } from "react";
export default function CarDetails({ data }) {
  const targetModel = useRef();
  const targetColor = useRef();
  const targetYear = useRef();
  return (
    <>
      <input
        ref={targetModel}
        onFocus={() => {
          targetModel.current.value = "";
        }}
        type="text"
        defaultValue={data.model}
      ></input>
      <input
        ref={targetYear}
        onFocus={() => {
          targetYear.current.value = "";
        }}
        type="number"
        defaultValue={data.year}
      ></input>
      <input
        ref={targetColor}
        onFocus={() => {
          targetColor.current.value = "";
        }}
        type="text"
        defaultValue={data.color}
      ></input>
    </>
  );
}

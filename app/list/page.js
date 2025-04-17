"use client";
import { useState } from "react";

export default function List() {
  const [prd, setPrd] = useState(["토마토", "키위", "바나나"]);
  const [like, setLike] = useState("♡");
  function likeHandler() {
    like === "♡" ? setLike("♥") : setLike("♡");
  }

  function changePrd() {
    const newPrdArray = [...prd];
    newPrdArray[0] = "딸기";
    setPrd(newPrdArray);
  }
  return (
    <div>
      <h1>상품목록</h1>
      <div>
        <button onClick={changePrd}>상품변경</button>
      </div>
      {prd.map((item, i) => {
        return (
          <div>
            <img src={`/food${i}.jpeg`}></img>
            {/* <Image src="/food.jpeg"></Image> */}
            <p key={i}>{item}</p>
            <button onClick={likeHandler}>{like}</button>
          </div>
        );
      })}
    </div>
  );
}

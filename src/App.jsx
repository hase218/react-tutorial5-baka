import { useEffect, useState } from "react";

export default function App() {

  const [showStory, setShowStory] = useState(false); //ボタンを押したらバカ話を見せる
  
  const [name, setName] = useState("");

  const [story, setStory] = useState("");
  const [ukus, setUkUs] = useState("us");
  const [units, setUnits] = useState(["94 fahrenheit", "300pounds"]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/.netlify/functions/bakaBanashi");
      const data = await response.json();
      console.log(data)
      setStory(data);
    })();
  }, [setShowStory]);

  //useEffect、第 1 引数には、副作用を起こす関数、第 2 引数には、その副作用が依存する値のリストを配列で渡す
  //下のhandleClicke関数内にぶち込むよりもなにかを第二引数にした方がいいんだろうなぁ...?
  //目標、ボタンが押すたびにランダムな話がでてくる

  function handleClickResetButton() {
    setShowStory(true);
  }
  
  return (
    <>
    <div>
      <label htmlFor="customname">Enter custom name:</label>
      <input value={name}onChange={(event)=>{setName(event.target.value)}}type="text" placeholder="" />
    </div>
    <div>
      <label htmlFor="us">US</label>
      <input value={ukus}onChange={(event)=>{setUkUs("us")}} type="radio" checked={ukus === "us" } />
      <label htmlFor="uk">UK</label>
      <input value={ukus}onChange={(event)=>{setUkUs("uk")}}type="radio"  checked={ukus === "uk" } />
    </div>
    <div>
      <button onClick={handleClickResetButton}>Generate random story</button>
    </div>
    {showStory && (
      <p>
      {story}
      </p>
    )}
    </>
  );
}
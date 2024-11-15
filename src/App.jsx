import { useEffect, useState } from "react";

export default function App() {
  const [story, setStory] = useState(""); //読み込んだ内容入ってる
  const [showStory, setShowStory] = useState(false); //ボタンを押したらバカ話を見せる
  //最初の一回だけなのにuseStateにする意味あんのか？

  const [makeStory, setMakeStory] = useState("false");
  
  const [name, setName] = useState("");

  const [ukus, setUkUs] = useState("us");
  const [units, setUnits] = useState(["94 fahrenheit", "300pounds"]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/.netlify/functions/bakaBanashi");
      const data = await response.json();
      console.log(data);
      console.log(makeStory);
      setStory(data);
    })();
  }, [makeStory]);

  //useEffect、第1引数には、副作用を起こす関数、第2引数には、その副作用が依存する値のリストを配列で渡す

  //目標、ボタンが押すたびにランダムな話がでてくる
  //下のhandleClicke関数内にぶち込むよりもなにかを第二引数にした方がいいんだろうな、なにを引数にすれば？？？
  //あたらしくそれ用の作らなきゃだめ・・・ってコト！？いったんそれでやってみるか
  //makeStoryつくってみた、変数多くてキモ


  function handleClickResetButton() {
    setShowStory(true);
    makeStory === true ? setMakeStory(false) : setMakeStory(true);
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
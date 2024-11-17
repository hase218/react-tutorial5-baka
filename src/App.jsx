import { useEffect, useState } from "react";

export default function App() {
  //useState、ユーザーの操作に応じてページの内容を書き換えるためにはコンポーネントの 状態 を変更します。
  const [story, setStory] = useState(""); //読み込んだバカ話をいれる
  const [showStory, setShowStory] = useState(false); //ボタンを押したらバカ話を見せる
  //実質最初の一回しか動かないけど、定義に基づいたらuseState使った方がいいはず

  const [makeStory, setMakeStory] = useState("false"); //ボタンが押されたときにuseEffectを動かしたい

  const [name, setName] = useState("");
  const [ukus, setUkUs] = useState("us");

  useEffect(() => {
    (async () => {
      const payload = {nameData: name, ukusData: ukus};
      try {
        const response = await fetch("/.netlify/functions/bakaBanashi", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify(payload),
        });
        const data = await response.json();
        //console.log(data);
        console.log(makeStory);
        console.log(name, ukus);
        setStory(data);
      } catch(error) {
        console.error(error.message);
      }
    })();
  }, [makeStory]);

  //useEffect、第1引数には、副作用を起こす関数、第2引数には、その副作用が依存する値のリストを配列で渡す

  //目標、ボタンが押すたびにランダムな話がでてくる
  //下のhandleClicke関数内にぶち込むよりもなにかを第二引数にした方がいいんだろうな、なにを引数にすれば？？？
  //あたらしくそれ用の作らなきゃだめ・・・ってコト！？いったんそれでやってみるか


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
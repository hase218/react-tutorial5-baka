import { useEffect, useState } from "react";

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

export default function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    (async () => {
      const response = await fetch("/.netlify/functions/bakaBanashi");
      const data = await response.json();
      setMessage(data.message);
    })();
  }, []);
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

// export default function App() {
//     const [message, setMessage] = useState("");
//     useEffect( () => {
//         (async () => {
//             const response = await fetch("/.netlify/functions/hello");
//             const data = await responce.json();
//             setMessage(data.message);
//         })();
//     }, []);
    
//     const [showStory, setShowStory] = useState(false);
//     const x = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
//     const y = ["the soup kitchen", "Disneyland", "the White House"];
//     const z = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
    
//     const [name, setName] = useState("");
//     const [xItem, setXItem] = useState(randomValueFromArray(x));
//     const [yItem, setYItem] = useState(randomValueFromArray(y));
//     const [zItem, setZitem] = useState(randomValueFromArray(z));

//     const [story, setStory] = useState("");
//     const [ukus, setUkUs] = useState("us");
//     const [units, setUnits] = useState(["94 fahrenheit", "300pounds"]);

//     function handleClickResetButton(){
//       console.log("click");
//       setXItem(randomValueFromArray(x));
//       setYItem(randomValueFromArray(y));
//       setZitem(randomValueFromArray(z));
//       setShowStory(true);
//       setStory(
//         `It was ${ukus === "us" ? "94 fahrenheit" : "34 celsius"} outside, \
//         so ${xItem} went for a walk.\
//         When theygot to ${yItem}, they stared in horror for a few moments, then ${zItem}.\
//         ${name === "" ? "Bob" : name} saw the whole thing, \
//         but was not surprised — ${xItem} weighs ${ukus === "us" ? "300 pounds" : "21 stone"}, and it was a hot day.`
//       );

//       console.log("befor", xItem, yItem, zItem)

//     }

//     console.log("after", xItem, yItem, zItem);
//     return (
//       <>
//         <div>
//           <label htmlFor="customname">Enter custom name:</label>
//           <input value={name}onChange={(event)=>{setName(event.target.value)}}type="text" placeholder="" />
//         </div>
//         <div>
//           <label htmlFor="us">US</label>
//           <input value={ukus}onChange={(event)=>{setUkUs("us")}} type="radio" checked={ukus === "us" } />
//           <label htmlFor="uk">UK</label>
//           <input value={ukus}onChange={(event)=>{setUkUs("uk")}}type="radio"  checked={ukus === "uk" } />
//         </div>
//         <div>
//           <button onClick={handleClickResetButton}>Generate random story</button>
//         </div>
//         {showStory && (
//           <p>
//             {story}
//           </p>
//         )}
//       </>
//     );
//   }
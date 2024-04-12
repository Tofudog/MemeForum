import './App.css';
import { useState } from 'react';


/*
Report of current problems:
  --> Button click affects other clicks
  --> counter h2 is not side by side to meme
*/

export default function App() {

  //arbitrary and standard image information
  const meme1 = {
    file: "https://wallpapercave.com/wp/wp7474251.jpg",
    votes: 3,
    imageSize: 140,
  }
  const meme2 = {
    file: "https://tse4.mm.bing.net/th?id=OIP.1Uu2KP7LqkHsiEaT2xsJJgHaGl&pid=Api&P=0&h=220.jpg",
    votes: 3,
    imageSize: 140,
  }

  const [count, setCount] = useState(0);

  function likeMeme() {
    setCount(count+1);
  }
  
  function unlikeMeme() {
    setCount(count-1);
  }

  return (
    <div>
      <div>
        <h1>Welcome to the Meme Forum!</h1>
      </div>
      <MemeSection meme={meme1} count={count}/>
      <Button text={"Like"} count={count} onCLick={likeMeme} />
      <Button text={"Unlike"} count={count} onCLick={unlikeMeme} />

      {/* <MemeSection meme={meme2} count={count}/>
      <Button text={"Like"} count={count} onCLick={likeMeme} />
      <Button text={"Unlike"} count={count} onCLick={unlikeMeme} /> */}
    </div>
  )

}

function Button({text, count, onCLick}) {
  return (
    <button onClick={onCLick}>
      {text}
    </button>
  )
}

function MemeSection({meme, count}) {
  return (
    <>
      <div>
        <img
          className="memeImg"
          src={meme.file}
          alt={"Net likes: " + meme.votes}
          style={{
            width: meme.imageSize,
            height: meme.imageSize
          }}/>
          <h2>
            {count}
          </h2>
      </div>
    </>


  );

}


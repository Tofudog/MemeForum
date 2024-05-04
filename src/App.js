import './App.css';
import { useState } from 'react';


/*
Report of current problems:
  --> counter h2 is not side by side to meme
  --> currently, 'votes' field in each meme is useless

To do:
  --> cap the number of likes user can do
  --> include a 'form' that allows choosing meme category
    ---> whenever new category is chosen, re-render entire page
    ---> use hashmap to id the memes (remember the cur problem 'votes' field)
    ---> create another function to loop through memes and render accordingly
      ----> cannot be in 'default App()'
      ----> make sure 'like' functions are available
    ---> perhaps the memes should be a global variable
*/

export default function App() {

  //arbitrary and standard image information
  const meme1 = {
    file: "https://wallpapercave.com/wp/wp7474251.jpg",
    votes: 3,
    imageSize: 180,
  }
  const meme2 = {
    file: "https://tse4.mm.bing.net/th?id=OIP.1Uu2KP7LqkHsiEaT2xsJJgHaGl&pid=Api&P=0&h=220.jpg",
    votes: 3,
    imageSize: 180,
  }

  //'counts' represents the global net votes on a meme
  //'curv' represents user votes, which limits a user
  //...to have a net vote of [-5,5]
  const [counts, setCount] = useState([meme1.votes, meme2.votes]);
  const [curv, setCurv] = useState([0, 0]);

  function likeMeme(idx) {
    const nextCounters = counts.map((c, i) => {
      if (i === idx && curv[i] !== 5) {
        //the index is matched and the user votes does exceed net 5
        return c + 1;
      } else {
        return c;
      }
    });
    setCount(nextCounters);
    const nextCurv = curv.map((c, i) => {
      if (i === idx & curv[i] !== 5) {
        //the index is matched and the user votes does exceed net 5
        return c + 1;
      } else {return c;}
    })
    setCurv(nextCurv);
  }
  
  function unlikeMeme(idx) {
    const nextCounters = counts.map((c, i) => {
      if (i === idx && curv[i] !== -5) {
        //the index is matched and the user votes does exceed net -5
        return c - 1;
      } else {
        return c;
      }
    });
    setCount(nextCounters);
    const nextCurv = curv.map((c, i) => {
      if (i === idx & curv[i] !== -5) {
        //the index is matched and the user votes does exceed net -5
        return c - 1;
      } else {return c;}
    })
    setCurv(nextCurv);
  }

  return (
    <div>
      <div>
        <h1>Welcome to the Meme Forum!</h1>
      </div>
      <MemeSection meme={meme1} count={counts[0]}/>
      <Button text={"Like"} count={counts[0]} onCLick={() => {likeMeme(0)}} />
      <Button text={"Unlike"} count={counts[0]} onCLick={() => {unlikeMeme(0)}} />

      <MemeSection meme={meme2} count={counts[1]}/>
      <Button text={"Like"} count={counts[1]} onCLick={() => {likeMeme(1)} } />
      <Button text={"Unlike"} count={counts[1]} onCLick={() => {unlikeMeme(1)} } />
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
import './App.css';

const meme = {
  file: "https://wallpapercave.com/wp/wp7474251.jpg",
  votes: 3,
  imageSize: 100,
}

var categories = [
  "Tom and Jerry",
  "Competitive Programming",
  "Karate",
  "Mario",
  "Naruto"
]

function App() {
  return (
    <div>
      <div>
        <img
          className="memeImg"
          src={meme.file}
          alt={"Net likes: " + meme.votes}
          style={{
            width: meme.imageSize,
            height: meme.imageSize
          }}/>
      </div>

      <div>
        <button>
          Like
        </button>
        <button>
          Unlike
        </button>
      </div>

      <div>
        {categories.map(CAT=>(
          <ul>
            {CAT}
          </ul>
        ))}
      </div>

    </div>

  );
}

export default App;

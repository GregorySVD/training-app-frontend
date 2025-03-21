import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Locked In Set up</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <h1 className="text-xl bg-colors-customBlue font-bold text-blue-100">
          Hello Tailwind v4!
        </h1>
      </div>
      <div className="text-white p-72 font-customFont">
        Tailwind CSS Customization Test
      </div>
      <div className="bg-customBlue text-white p-72 font-customFont">
        Tailwind CSS Customization Test
      </div>
      ;
    </>
  );
}

export default App;

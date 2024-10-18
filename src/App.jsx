import { useState } from "react";
import StartGame from "./components/StartGame";
import PlayGame from "./components/PlayGame";


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    console.log("toggleGamePlay called");
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <PlayGame/> : <StartGame toggle={toggleGamePlay} />}
   
    </>
  );
}

export default App;

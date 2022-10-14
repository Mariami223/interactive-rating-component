import { useState } from "react";
import "./App.css";
import PrimaryCard from "./components/PrimaryCard";
import RatedCard from "./components/RatedCard";

function App() {
  const [submited, setSubmited] = useState(false);
  const [rate, setRate] = useState(0);
  return (
    <div className="App">
      {submited ? (
        <RatedCard rate={rate} />
      ) : (
        <PrimaryCard
          rate={rate}
          setRate={setRate}
          submited={submited}
          setSubmited={setSubmited}
        />
      )}
    </div>
  );
}

export default App;

import "./App.css";
import BasicCard from "../Card/Card";
import { cities } from "../../cities";


function App() {
  return (
    <div className="App">
      {cities.map((city) => {
        return <BasicCard city={city}></BasicCard>;
      })}
    </div>
  );
}

export default App;

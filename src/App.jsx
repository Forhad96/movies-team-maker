import { useState } from "react";
import "./App.css";
import Actors from "./components/Actors/Actors";
import Cart from "./components/Cart/Cart";
import { saveLocalStorageData } from "./utils/localStorage";

function App() {
  const [selectedActors, setSelectedActors] = useState([]);
  const [totalSalary, setTotalSalary] = useState(0);


  const handleSelect = (handleActor) => {
    const isExist = selectedActors.find(
      (selectedActor) => selectedActor.id === handleActor.id
    );
    if (isExist) {
      return alert("Already added");
    } else {
      if (totalSalary + handleActor.salary >= 20000) {
        alert("Balance inefficient");
        return;
      }
      // calculator Total Salary
      setTotalSalary(totalSalary + handleActor.salary);
      setSelectedActors([...selectedActors, handleActor]);
      saveLocalStorageData(handleActor.id)
    }
  };
  console.log(selectedActors);

  return (
    <div className="container mx-auto">
      <div className="md:flex justify-between gap-5 mt-10">
        <Actors 
        setSelectedActors={setSelectedActors}
        handleSelect={handleSelect}></Actors>
        <Cart
          totalSalary={totalSalary}
          selectedActors={selectedActors}></Cart>
      </div>
    </div>
  );
}

export default App;

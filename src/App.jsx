import { useState } from "react";
import "./App.css";
import Actors from "./components/Actors/Actors";
import Cart from "./components/Cart/Cart";
import { saveLocalStorageData } from "./utils/localStorage";

function App() {
  const [selectedActors, setSelectedActors] = useState([]);
  const [totalSalary, setTotalSalary] = useState(0);
// setTotalSalary(previousTotal);


  const handleSelect = (handleActor) => {
    const isExist = selectedActors.find(
      (selectedActor) => selectedActor.id === handleActor.id
    );
    if (isExist) {
      return alert("Already added");
    } else {
      if (totalSalary + handleActor.salary >= 20000) {
        return alert("Balance inefficient");
        
      }
      setSelectedActors([...selectedActors, handleActor]);

        // calculator to set Total Salary
        setTotalSalary(totalSalary + handleActor.salary);









        // save to local storage data
      saveLocalStorageData(handleActor.id)

    }
  };
  

  return (
    <div className="container mx-auto">
      <div className="md:flex justify-between gap-5 mt-10">
        <Actors 
        setTotalSalary={setTotalSalary}
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

import { useState } from "react";
import "./App.css";
import Actors from "./components/Actors/Actors";
import Cart from "./components/Cart/Cart";
import { removeFromLS, saveLocalStorageData } from "./utils/localStorage";

function App() {
  const [selectedActors, setSelectedActors] = useState([]);
  const [totalSalary, setTotalSalary] = useState(0);
  const [budget,setBudget] = useState(0)

// handle for select actor cart
  const handleSelect = (handleActor) => {
    const isExist = selectedActors.find(
      (selectedActor) => selectedActor.id === handleActor.id
    );
    if (isExist) {
      return alert("Already added");
    } else {
      if (totalSalary + handleActor.salary >= budget) {
        return alert("Balance inefficient");
        
      }
      setSelectedActors([...selectedActors, handleActor]);

        // calculator to set Total Salary
        setTotalSalary(totalSalary + handleActor.salary);

        // save to local storage data
      saveLocalStorageData(handleActor.id)

    }
  };
  // handle for remove from cart
  const handleRemoveCart = (removeId,removeSalary)=>{
    // console.log('removed',actorId);
    const afterRemove = selectedActors.filter(actor=>actor.id !== removeId)
    setSelectedActors(afterRemove)
    // const reduceSalary = selectedActors.find(actor=> actor.salary )
    setTotalSalary(totalSalary-removeSalary)
    removeFromLS(removeId)
  }
  // handle for budget 
  const handleBudget =(e)=>{
    setBudget(e.target.value);
  }

  return (
    <div className="container mx-auto">
      <div className="md:flex justify-between gap-5 mt-10">
        <Actors 
        setTotalSalary={setTotalSalary}
        setSelectedActors={setSelectedActors}
        handleSelect={handleSelect}></Actors>
        <Cart
          totalSalary={totalSalary}
          handleBudget={handleBudget}
          budget={budget}
          handleRemoveCart={handleRemoveCart}
          selectedActors={selectedActors}></Cart>
      </div>
    </div>
  );
}

export default App;

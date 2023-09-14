import { useState } from "react";
import "./App.css";
import Actors from "./components/Actors/Actors";
import Cart from "./components/Cart/Cart";
import { removeFromLS, saveLocalStorageData } from "./utils/localStorage";
import swal from 'sweetalert'

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
      return swal("Already added", "Please select another Actor!", "error");
      // return alert("Already added");
    } else {
      if (totalSalary + handleActor.salary >= budget) {
        return swal("Balance inefficient", "Please Extend the range!", "error");

        // return alert("Balance inefficient");
        
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
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      const afterRemove = selectedActors.filter(actor=>actor.id !== removeId)
      setSelectedActors(afterRemove)
    
      setTotalSalary(totalSalary-removeSalary)
      removeFromLS(removeId)
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
          
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
    // const afterRemove = selectedActors.filter(actor=>actor.id !== removeId)
    // setSelectedActors(afterRemove)
  
    // setTotalSalary(totalSalary-removeSalary)
    // removeFromLS(removeId)




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

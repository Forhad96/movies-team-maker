import PropTypes from 'prop-types'
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import { getLocalStorageData } from '../../utils/localStorage';

const Actors = ({ handleSelect,setSelectedActors,setTotalSalary}) => {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActors(data));

  }, []);
useEffect(()=>{
    // get date from local storage
    const localStorageData = getLocalStorageData()
    let newSelectedCart=[]
    if(actors.length){

      for(const dataId of localStorageData){
        const filteredData = actors.find(actor=> actor.id === dataId)
        newSelectedCart.push(filteredData)

      }
  const previousTotalSalary = newSelectedCart.reduce((total,carVal)=>total + carVal.salary,0)
  setTotalSalary(previousTotalSalary)
  

    }
    setSelectedActors(newSelectedCart)
},[actors,setSelectedActors,setTotalSalary])

  return (
    <div className='w-2/3'>
      <h1 className="text-3xl text-white">Actors:{actors.length}</h1>
      <div className="grid grid-cols-3 gap-3">
        {actors.map((actor) => (
          <Card handleSelect={handleSelect} key={actor.id} actor={actor}></Card>
        ))}
      </div>
    </div>
  );
};
Actors.propTypes={
    handleSelect: PropTypes.func.isRequired,
    setSelectedActors: PropTypes.array.isRequired,
    setTotalSalary: PropTypes.number.isRequired

    
}
export default Actors;

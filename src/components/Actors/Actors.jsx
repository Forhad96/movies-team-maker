import PropTypes from 'prop-types'
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Actors = ({ handleSelect,setSelectedActors}) => {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActors(data));
  
  }, []);


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
}
export default Actors;

import PropTypes from "prop-types";

const Cart = ({ selectedActors,totalSalary,handleRemoveCart,handleBudget,budget}) => {
const remaining = budget-totalSalary

  return (
    <div className="w-1/3 sticky h-full">
      <div className="flex justify-between text-2xl text-white border-b-4 mb-5">
        <div className="mb-3">
          <p className="underline">Budget:-</p>
          <input onChange={handleBudget} className="w-1/2 my-3 bg-transparent border-2 rounded" placeholder="Enter your-$" type="number"></input>
        </div>
        <div className="mb-3">
          <p className="underline">Remaining:</p>
          <p className="border-2 rounded px-4 my-3">${remaining}</p>
        </div>
      </div>
      {selectedActors.map((actor) => (
        <div
          key={actor.id}
          className="flex justify-between items-center text-center mb-3 text-white">
          <div className="space-y-2 px-2 shadow-2xl w-2/3 flex items-center gap-4 bg-slate-800">
            <button onClick={()=>handleRemoveCart(actor.id,actor.salary)} className="bg-red-300">❌</button>
            <img className="w-20 h-20 rounded" src={actor.image} alt="" />
            

            <h3 className="text-sm font-bold">
              {actor.role}: <span className="underline">{actor.name}</span>
            </h3>

          </div>

          <div>
            <h5 className="text-2xl">${actor.salary}</h5>
          </div>
        </div>
      ))}
      <hr className=" border-b-8" />
      <div className="flex justify-between text-white text-2xl">
        <h4>Total:</h4>
        <h4>${totalSalary}</h4>
      </div>
    </div>
  );
};
Cart.propTypes = {
  selectedActors: PropTypes.any.isRequired,
  totalSalary: PropTypes.any.isRequired,
  handleRemoveCart: PropTypes.any.isRequired,
  handleBudget: PropTypes.any.isRequired,
  budget: PropTypes.any.isRequired

};

export default Cart;

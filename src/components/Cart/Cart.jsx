import PropTypes from "prop-types";

const Cart = ({ selectedActors,totalSalary}) => {
const remaining = 20000-totalSalary

  return (
    <div className="w-1/3 sticky h-full">
      <div className="flex justify-between text-2xl text-white text-center border-b-4 mb-5">
        <h3 className="mb-3">
          <span className="underline">Budget:-</span>$40000
        </h3>
        <h1 className="mb-3">
          <span className="underline">Remaining:</span>
          {remaining}
        </h1>
      </div>
      {selectedActors.map((actor) => (
        <div
          key={actor.id}
          className="flex justify-between items-center text-center mb-3 text-white">
          <div className="space-y-2 shadow-2xl w-2/3 flex items-center gap-4 bg-slate-800">
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
  totalSalary: PropTypes.number.isRequired
};

export default Cart;
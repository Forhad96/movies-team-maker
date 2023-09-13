import PropTypes from 'prop-types'
const Card = ({actor,handleSelect}) => {
    const {name,image,salary,role} = actor
    return (
        <div className="text-white border-2 space-y-3 p-5 flex flex-col rounded">
            <div className="flex flex-col space-y-3 items-center">
            <img className="w-20 h-20 rounded-full" src={image} alt="" />
            <h3 className="text-xl font-bold">{name}</h3>
            </div>
            <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            <div className="flex justify-between">
                <p className="font-semibold">Salary:{salary}</p>
                <p className="font-semibold">{role}</p>
            </div>
            
            <button onClick={()=>handleSelect(actor)} className="bg-green-400 py-2 px-4 rounded text-2xl text-white text-center hover:bg-slate-400">Select</button>
        </div>
    );
};

Card.propTypes = {
    actor: PropTypes.object.isRequired,
    handleSelect: PropTypes.func.isRequired
    

}
export default Card;

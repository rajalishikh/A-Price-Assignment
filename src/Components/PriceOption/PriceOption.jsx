import PropTypes from 'prop-types';
const PriceOption = ({ priceAllData }) => {
   const{price,name,features}=priceAllData
    return (
        <div className="bg-blue-500 text-center p-8 rounded-md flex flex-col " >
            
            <h1 className='text-2xl text-center font-semibold text-white' >
                <span >{ price} per month</span><br />
                <span className='text-2xl'>{ name} </span>
            </h1>
            <p className='text-2xl text-center font-semibold text-white flex-grow'>{features}</p>
            <div className='text-center'>
            <button
                className='bg-green-500 p-2 m-3
                 text-white rounded-xl w-52 justify-center align-middle '>
                purchase Now
            </button>

            </div>
            
           
            
        </div>
    );
};


export default PriceOption;
PriceOption.propTypes = {
    priceAllData:PropTypes.object
}
import PropTypes from 'prop-types';
const PriceOption = ({ priceAllData }) => {
   const{price,name,features}=priceAllData
    return (
        <div>
            
        </div>
    );
};


export default PriceOption;
PriceOption.propTypes = {
    priceAllData:PropTypes.object
}
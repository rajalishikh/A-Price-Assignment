import PropTypes from 'prop-types';


const Navbar = ({ routes }) => {
    return (
        
        <div>
           

            <li className='hover:bg-slate-100'  >
                <a  href={routes.path}> {routes.name} </a>

            </li>
            
            
        </div>
    );
};
Navbar.propTypes = {
    routes:PropTypes.object.isRequired
}
export default Navbar;
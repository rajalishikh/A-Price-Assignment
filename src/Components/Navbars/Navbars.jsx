import Navbar from "../NavBar/Navbar";

const Navbars = () => {
    const routes = [
    
        { "id": 1, "path": "/", "name": "Home" },
    { "id": 2, "path": "/about", "name": "About" },
    { "id": 3, "path": "/contact", "name": "Contact" },
    { "id": 4, "path": "/products/all", "name": "All Products" },
   

    ];
    
    return (
       

        <div>
            <ul className=" md:flex">
            {
                    routes.map(item =>
                    <Navbar key={item.id} routes={item}></Navbar>
                    
                )
            }
            </ul>

        </div>
    );
};

export default Navbars;
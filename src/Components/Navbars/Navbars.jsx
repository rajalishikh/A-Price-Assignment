import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import Navbar from "../NavBar/Navbar";


const Navbars = () => {

    const [open, setOpen] = useState(false);
    const routes = [
    
        { "id": 1, "path": "/", "name": "Home" },
    { "id": 2, "path": "/about", "name": "About" },
    { "id": 3, "path": "/contact", "name": "Contact" },
    { "id": 4, "path": "/products/all", "name": "All Products" },
   

    ];
    
    return (
       

        <div>
            <ul className=" md:flex ">
                <div onClick={() => setOpen(!open)}>
                    {
                        open === true ?
                            <HiMenuAlt1 className="text-2xl md:hidden" ></HiMenuAlt1>
                            : <RiCloseFill className="text-3xl md:hidden"></RiCloseFill>
                    }
                    
                   
               </div>
            
                <div className={`absolute  md:flex gap-4
                md:static
                duration-1000
                 ${open ? 'top-8' : '-top-60'}`}>
                {
                    routes.map(item =>
                    <Navbar key={item.id} routes={item}></Navbar>
                    
                        )
                        

                    }
                    
                </div>
                
            </ul>

        </div>
    );
};

export default Navbars;
import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, Legend, Rectangle, Tooltip, XAxis, YAxis } from 'recharts';

const Phones = () => {
    const [phone, setPhone] = useState([]);
    
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(item => {
                const phoneData = item.data.data;
                const phoneFakeData = phoneData.map(item2 => {
                   const obj = {
                        name: item2.phone_name,
                        price: parseInt(item2.slug.split('-')[1]),

                    }
                    return obj;
                })
                setPhone(phoneFakeData);
                console.log(phoneFakeData)
                
            })
        
    },[phone])
    return (
        <div>
            <h1>Here is the total list of my phone {phone.length}</h1>
            <BarChart
          width={800}
          height={300}
          data={phone}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#8B0000" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          
        </BarChart>
        </div>
    );
};

export default Phones;
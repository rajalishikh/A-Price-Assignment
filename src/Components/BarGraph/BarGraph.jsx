import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const BarGraph = () => {
    const townTemperature=[
        {"town": "Dhaka", "temperature": 40.5},
        {"town": "Chittagong", "temperature": 26.8},
        {"town": "Rajshahi", "temperature": 30.2},
        {"town": "Khulna", "temperature": 20.3},
        {"town": "Sylhet", "temperature": 25.6},
        {"town": "Barisal", "temperature": 29.1},
        {"town": "Jessore", "temperature": 28.7},
        {"town": "Cox's Bazar", "temperature": 25.0},
        {"town": "Rangpur", "temperature": 31.5},
        {"town": "Mymensingh", "temperature": 26.3},
        {"town": "Comilla", "temperature": 29.8},
        {"town": "Dinajpur", "temperature": 24.9}
      ]
    
    return (
        <div>
            <h1 className='text-2xl text-center mb-3 font-semibold text-white underline'>Here is the graph of my BarChart</h1>
          
            <BarChart width={730} height={500} data={townTemperature}>
  {/* <CartesianGrid strokeDasharray="3 3" /> */}
  <XAxis dataKey="town" />
                <YAxis />
                <Tooltip/>
  
  <Legend />
  <Bar dataKey="temperature" fill="#8884d8" />
  
</BarChart>
            
            
        </div>
    );
};

export default BarGraph;
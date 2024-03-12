
import './App.css'
import BarGraph from './Components/BarGraph/BarGraph'
import LineChart from './Components/Linechart/LineChart'
import Navbars from './Components/Navbars/Navbars'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/PriceOptions/PriceOptions'






function App() {
 

  return (
    <>
     
      <Navbars></Navbars>
      <PriceOptions></PriceOptions>
      <div className='flex justify-between'>
      <LineChart></LineChart>
      <BarGraph></BarGraph>
      </div>
      <Phones></Phones>
      

    </>
  )
}

export default App

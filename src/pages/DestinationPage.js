import { Helmet } from 'react-helmet';
import './DestinationPage.css'
import { useState } from 'react';
import data from '../data.json'

const DestinationPage = () => {
   const destinations = ['Moon', 'Mars', 'Europa', 'Titan'];
   const [selectedDest, setSelectedDest] = useState('Moon');
   const [destData,setDestData]=useState(data.destinations[0])
   
   const handleOptionChange = (event) => {
      const newOption = event.target.value;
      setSelectedDest(newOption)
      const [selectedDest] = data.destinations.filter((destination)=> destination.name === newOption)
      setDestData(selectedDest)
   }

   return <div className='body'>
      <Helmet>
         <title>Space toursim | Destination</title>
      </Helmet>
      <main className='mainContent'>
         <p className='Header'><span>01</span>PICK YOUR DESTINATION</p>
         <img className='destimg' src={require(`../assets/destination/image-${selectedDest.toLowerCase()}.png`)} alt='destimg'></img>
         <div className='destTextContainer'>
            <ul className="destFilter">{destinations.map((destination) => (
               <li key={destination}>
                  <input
                     id={destination}
                     type="radio"
                     value={destination}
                     checked={selectedDest === destination}
                     onChange={handleOptionChange}
                  />
                  <label htmlFor={destination}>
                     {destination.toUpperCase()}
                  </label></li>))}</ul>
                  <p className='destTitle'>{selectedDest.toUpperCase()}</p>
                  <p className='destDescription'>{destData.description}</p>
                  <div className='infoContainer'>
                  <div className='destInfo mb-[32px]'>
                     <p className='infoTitle'>AVG. DISTANCE</p>
                     <p className='infoData'>{destData.distance.toUpperCase()}</p>
                  </div>
                  <div className='destInfo mb-[58px]'>
                     <p className='infoTitle'>EST. TRAVEL TIME</p>
                     <p className='infoData'>{destData.travel.toUpperCase()}</p>
                  </div>
                  </div>
         </div>
      </main>
   </div>
}
export default DestinationPage;
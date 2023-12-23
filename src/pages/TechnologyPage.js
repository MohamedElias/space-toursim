import { Helmet } from 'react-helmet';
import './TechnologyPage.css'
import MediaQuery from 'react-responsive';
import { useMemo } from 'react';
import { useState } from 'react';
import data from '../data.json'
import { useEffect } from 'react';
const TechnologyPage = () => {
   const tech = useMemo(
      () => ["Launch vehicle", "Spaceport", "Space capsule"],
      [] // Empty dependency array means it won't change unless the component mounts
);
const [selectedTech,SetselectedTech]=useState('Launch vehicle');
const [TechData,setTechData]=useState(data.technology[0])

useEffect(()=>{
   const startInterval = setInterval(() => {
      const currentIndex = tech.indexOf(selectedTech)
      const nextIndex = (currentIndex + 1) % tech.length
      SetselectedTech(tech[nextIndex]);
      const [selectedTechData] = data.technology.filter((Tech)=> Tech.name === tech[nextIndex])
      setTechData(selectedTechData)
   }, 5000);
   return () => clearInterval(startInterval);
},[tech,selectedTech])

const handleOptionChange = (event) => {
   const newOption = event.target.value;
   SetselectedTech(newOption)
   const [selectedTechData] = data.technology.filter((tech)=> tech.name === newOption)
   setTechData(selectedTechData)
}
   return <div className='body'>
      <Helmet>
         <title>Space toursim | Technology</title>
      </Helmet>
      <main className='Tech mainContent'>
      <p className='Tech Header'><span>03</span>SPACE LAUNCH 101</p>
      <div className='techImg'>
      <MediaQuery maxWidth={1439}>
         {(matches)=>{
            if(matches){
               return <img src={require(`../assets/technology/image-${selectedTech.toLowerCase()}-landscape.jpg`)} alt='tech'></img>
            }
            else{
               return <img src={require(`../assets/technology/image-${selectedTech.toLowerCase()}-portrait.jpg`)} alt='tech'></img>
            }
         }}
      </MediaQuery>
         </div>
         <ul className='techFilter'>{tech.map((Tech) => (
            <li key={Tech}>
               <input
                  id={Tech}
                  type="radio"
                  value={Tech}
                  checked={selectedTech === Tech}
                  onChange={handleOptionChange}
               />
               <label className='text-white' htmlFor={Tech}>
                  <div>{tech.indexOf(Tech)+1}
                  </div>
               </label></li>))}
         </ul>
         <div className='techTextContainer'>
            <p className='techTitle'>THE TERMINOLOGY…</p>
            <p className='techName'>{TechData.name.toUpperCase()}</p>
            <p className='techDescription'>{TechData.description}</p>
         </div>
      </main>
   </div>
}
export default TechnologyPage;
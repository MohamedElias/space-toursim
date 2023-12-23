import { Helmet } from 'react-helmet';
import './CrewPage.css'
import { useState , useEffect} from 'react';
import data from '../data.json'
import { useMemo } from 'react';

const CrewPage = () => {
   const crew = useMemo(
      () => ["Douglas Hurley", "Mark Shuttleworth", "Victor Glover", "Anousheh Ansari"],
      [] // Empty dependency array means it won't change unless the component mounts
);
   const [selectedMember,SetselectedMember]=useState('Douglas Hurley');
   const [MemberData,setMemberData]=useState(data.crew[0])

   useEffect(()=>{
      const startInterval = setInterval(() => {
         const currentIndex = crew.indexOf(selectedMember)
         const nextIndex = (currentIndex + 1) % crew.length
         SetselectedMember(crew[nextIndex]);
         const [selectedMemberData] = data.crew.filter((member)=> member.name === crew[nextIndex])
         setMemberData(selectedMemberData)
      }, 5000);
      return () => clearInterval(startInterval);
   },[crew,selectedMember])

   
   const handleOptionChange = (event) => {
      const newOption = event.target.value;
      SetselectedMember(newOption)
      const [selectedMemberData] = data.crew.filter((member)=> member.name === newOption)
      setMemberData(selectedMemberData)
   }
   return <div className='body'>
      <Helmet>
         <title>Space toursim | Crew</title>
      </Helmet>
      <main className='Crew mainContent'>
         <p className='Crew Header'><span>02</span>MEET YOUR CREW</p>
         <div className='crewImg'>
            <img src={require(`../assets/crew/image-${selectedMember.toLowerCase()}.png`)} alt='crew'></img>
         </div>
         <ul className='crewFilter'>{crew.map((member) => (
            <li key={member}>
               <input
                  id={member}
                  type="radio"
                  value={member}
                  checked={selectedMember === member}
                  onChange={handleOptionChange}
               />
               <label htmlFor={member}>
                  <div></div>
               </label></li>))}
         </ul>
         <div className='crewTextContainer'>
            <p className='role'>{MemberData.role.toUpperCase()}</p>
            <p className='name'>{MemberData.name.toUpperCase()}</p>
            <p className='bio'>{MemberData.bio}</p>
         </div>
      </main>
   </div>
}
export default CrewPage;
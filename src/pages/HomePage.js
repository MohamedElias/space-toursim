import { Helmet } from 'react-helmet';
import './HomePage.css'
import { NavLink } from 'react-router-dom';
const HomePage=()=>{
return<div className='body'>
      <Helmet>
      <title>Space toursim | Home</title>
      </Helmet>
      <main className='mainHome'>
         <div className='homeTextContainer'>
      <p className='homeText'>SO, YOU WANT TO TRAVEL TO</p>
      <p className='homeText'>SPACE</p>
      <p className='homeText'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
         </div>
         <NavLink to="destination" className='explore'>EXPLORE</NavLink>
      </main>
</div>
}
export default HomePage;
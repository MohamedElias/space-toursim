import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import './App.css';
import RootLayout from './pages/Root';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import CrewPage from './pages/CrewPage';
import TechnologyPage from './pages/TechnologyPage';

function App() {
  const router = createBrowserRouter([
    { 
      path:'/',
      element:<RootLayout/>,
      children:[
        {path:'/',index:true, element:<HomePage/>},
        {path:'destination', element:<DestinationPage/>},
        {path:'crew', element:<CrewPage/>},
        {path:'technology', element:<TechnologyPage/>}
      ]

  }],{basename:'/space-toursim'})
  return (
    <>
    <RouterProvider router={router}>
    </RouterProvider>
    </>
  );
}

export default App;

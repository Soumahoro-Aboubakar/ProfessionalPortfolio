import AboutMe from './components/AboutMe';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Videos from './components/Videos';
import Prices from './components/Services'
import Contact from './components/Contact';
function App() {
  return (
    <>
    <NavBar />
    <div className='max-w-7xl mx-auto pt-10 px-6 lg:my-6 my-1 '>
       <Header />
       <Videos />
       <Skills  />
       <Prices />
       <AboutMe />
       <Contact />
    </div>
    </>
  );
}

export default App;

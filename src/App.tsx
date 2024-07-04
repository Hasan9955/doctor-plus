import './App.css'
import Navbar from './Sections/Navbar'
import Banner from './Sections/Banner'
import SecondSection from './Sections/SecondSection'
import ThirdSection from './Sections/ThirdSection'
function App() { 

  return (
    <div className='container mx-auto'>
      <Navbar />
      <Banner />
      <SecondSection />
      <ThirdSection />
    </div>
  )
}

export default App

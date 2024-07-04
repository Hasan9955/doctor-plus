import './App.css'
import Navbar from './Sections/Navbar'
import Banner from './Sections/Banner'
import SecondSection from './Sections/SecondSection'
import ThirdSection from './Sections/ThirdSection'
import Services from './Sections/Services'
import FAQSection from './Sections/FAQSection'
function App() { 

  return (
    <div className='text-[#020043] container mx-auto'>
      <Navbar />
      <Banner />
      <SecondSection />
      <ThirdSection />
      <Services />
      <FAQSection />
    </div>
  )
}

export default App

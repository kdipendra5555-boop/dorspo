import './App.css'
import { Routes, Route } from "react-router-dom";

import LandingPage from './pages/LandingPage';
import TermsAndConditions from '../src/components/company/TermsAndConditions';
import PrivacyPolicy from './components/company/PrivacyPolicy';
import AboutUs from './components/company/AboutUs';

function App() {
  return (

    <Routes>

      {/* Homepage */}
      <Route
        path="/"
        element={<LandingPage />}
      />

      {/* Footer Routes */}
      <Route
        path="/terms-and-conditions"
        element={<TermsAndConditions />}
      />

      <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='/about' element={<AboutUs/>}/>

    </Routes>

  )
}

export default App
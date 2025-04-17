
import Details from '../components/Details'
import Hero from '../components/Hero';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  
    return(
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/details/:imdbID" element={<Details />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App

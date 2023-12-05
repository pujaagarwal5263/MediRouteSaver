import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicMap from './components/map';
import Predict from './components/predict';
import Home from './components/home';

function App() {
  return (
    <ChakraProvider>
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/map" element={<BasicMap/>} />
      </Routes>
       </BrowserRouter>
      </ChakraProvider>  
  );
}

export default App;

import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <main>
       <Navbar />
       <Home />
      </main>
    </BrowserRouter>
  );
};

export default App;

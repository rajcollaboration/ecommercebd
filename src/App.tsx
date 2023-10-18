import React from 'react';
import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Appprops{

}

const App: React.FC<Appprops> = () => {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;

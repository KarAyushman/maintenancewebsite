import { Route, Routes } from 'react-router-dom';
import './App.css';
import Page from './Page.js'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page/>} exact />
    </Routes>
  );
    
}

export default App;

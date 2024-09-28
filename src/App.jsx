import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import JobList from './components/JobList';
import Homepage from './components/Homepage';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path='/job' element={<JobList/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;

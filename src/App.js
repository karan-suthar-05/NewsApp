//components
import LoadingBar from 'react-top-loading-bar'
import Navbar from "./components/Navbar";
import News from "./components/News";
import Select from "./components/Select";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



const App =()=>{
    const pageSize = 6;
//     const api = process.env.REACT_APP_API_KEY;
    const api="d446d35aad004c66869ddcc20a71c1ab";
    const [progress,setProgress] = useState(0);  
    const [contry,setContry] = useState("in");  
 
 const ChangeProgress = (progress)=>{
      setProgress(
             progress
      );
 }
 const CahngeContry = (contry)=>{
      setContry( 
       contry
      );
 }
     
    return (
       <> 
       <Router>
       <Navbar key={"select"} Select={<Select CahngeContry={CahngeContry} ChangeProgress={ChangeProgress} api={api} pageSize={pageSize} contry={contry} category="general" />}/>
       <LoadingBar
        color='#6c757d'
        progress={progress}
    
      />
        <Routes>
      <Route path="/" element={<News ChangeProgress={ChangeProgress} key={"/"} api={api} pageSize={pageSize} contry={contry} category="general"
/>} /> 
      <Route path="/General" element={<News ChangeProgress={ChangeProgress} key={"general"} api={api} pageSize={pageSize} contry={contry} category="general"
/>} /> 
      <Route path="/Entertainment" element={<News ChangeProgress={ChangeProgress} key={"entertainment"} api={api} pageSize={pageSize} contry={contry} category="entertainment"
/>} /> 
      <Route path="/Business" element={<News ChangeProgress={ChangeProgress} key={"bussiness"} api={api} pageSize={pageSize} contry={contry} category="business"
/>} /> 
      <Route path="/Health" element={<News ChangeProgress={ChangeProgress} key={"health"} api={api} pageSize={pageSize} contry={contry} category="health"
/>} /> 
      <Route path="/Science" element={<News ChangeProgress={ChangeProgress} key={"science"} api={api} pageSize={pageSize} contry={contry} category="science"
/>} /> 
      <Route path="/Sports" element={<News ChangeProgress={ChangeProgress} key={"sports"} api={api} pageSize={pageSize} contry={contry} category="sports"
/>} /> 
      <Route path="/Technology" element={<News ChangeProgress={ChangeProgress} key={"technology"} api={api} pageSize={pageSize} contry={contry} category="technology"
/>} /> 
      </Routes>
      </Router>     
       </>
    )
   
}

export default App
 
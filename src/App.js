import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CountryDetails from "./components/CountryDetails";
import CountriesList from "./components/CountriesList"; // Import CountriesList here
import countriesData from "./countries.json"
import Navbar from "./components/Navbar";


function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesData); 
  }, []);

  return (
    <Router>

    <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
          <CountriesList countries={countries} />

        
          <Route path="/" element={<CountriesList countries={countries} />} />
          <Route path="/:id" render={(props) => <CountryDetails {...props} countries={countries} />} />
          </div>
        </div>
    </div>
    </Router>
  );
}


export default App;



import React from 'react';
import { useParams } from 'react-router-dom';


function CountryDetails({countries}) {
    const {id} = useParams();

    const selectedCountry = countries.find(country => country.alpha3Code === id);


      // With Bootstrap// 
    return (
      <div className="col-7">
        <h1>{selectedCountry.name.common}</h1>
        <table className="table">
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{selectedCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{selectedCountry.area} km<sup>2</sup></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default CountryDetails;

    







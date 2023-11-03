import React from "react"
import {Link} from "react-router-dom"

const CountriesList =({countries}) => {
    const flagURL = alpha2Code => `https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`;
    return (
        <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
          <div className="list-group">
            {countries.map(country => (
              <Link key={country.alpha3Code} to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action" >
                <img src={flagURL(country.alpha2Code)} alt={`${country.name.common} flag`} style={{ marginRight: '10px' }} />
                {country.name.common}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    export default CountriesList;

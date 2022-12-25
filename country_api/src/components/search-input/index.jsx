import { Input, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'


const SearchInput = ({ setData }) => {
  const [Country, setCountry] = useState([])

  let BASE_URL = 'https://restcountries.com/v2/'
  useEffect(() => {
    fetch(`${BASE_URL}all`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data)
      })
  }, [])

  const filterCountry = (e) => {
    let newCountry = Country.filter((elem) => elem.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    setData(newCountry);
  };

  const filterByRegion = (e) => {
    console.log(e.target.value)
    let newCountryRegion = Country.filter((element) => element.region.includes(e.target.value));
    setData(newCountryRegion);
  };
  return (
    <div className="searchFilterBar">
      <div className="input">
        <Input placeholder='Search for a Country' onChange={(e) => {
          filterCountry(e)
        }} />
      </div>
      <div className="select">
        <Select placeholder='Filter By Region' className='options' onChange={(e) => filterByRegion(e)}>
          <option value='Africa' className='options'>Africa</option>
          <option value='America' className='options'>America</option>
          <option value='Asia' className='options'>Asia</option>
          <option value='Europe' className='options'>Europe</option>
          <option value='Oceania' className='options'>Oceania</option>
        </Select>
      </div>
    </div>
  )
}

export default SearchInput
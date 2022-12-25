import React, { useEffect, useState } from 'react'
import { Card, Image, CardBody, Stack, Heading, Text, Divider } from '@chakra-ui/react'
import './index.scss'
import { Input } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { CircularProgress } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {
  const [Data, setData] = useState([])
  const [isLoading, setIsLoaoding] = useState(true);
  // const [Id, setId] = useState('m')
  const navigate = useNavigate();

  const [ModalData, setModalData] = useState([])

  const searchFilter = (id) => {
    fetch(`https://restcountries.com/v3.1/name/${id}`)
      .then((response) => response.json())
      .then((data) => {
        data.map((e) => [
          console.log(e)
          // setModalData(e)
        ])
      })
    // console.log(ModalData)
  }

  let BASE_URL = 'https://restcountries.com/v2/'
  useEffect(() => {
    fetch(`${BASE_URL}all`)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setIsLoaoding(false)
      })
  }, [])

  const filterCountry = (e) => {
    let newCountry = Data.filter((element) =>
      element.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    setData(newCountry);
  };

  const filterByRegion = (e) => {
    console.log(e.target.value)
    let newCountryRegion = Data.filter((element) => element.region.includes(e.target.value)
    );
    setData(newCountryRegion);
  };

  return (
    <>

      <button></button>
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
      <div className="cards">
        {isLoading ? (<CircularProgress isIndeterminate color='green.300' />) :
          (
            Data.map((e) => {
              return (
                <Link to={`/modal/${e.name}`} key={e.name}>
                  <span id={e.name}>
                    <Card maxW='xs'>.
                      <CardBody>
                        <Image
                          src={e.flags.svg}
                          borderRadius='lg'
                        />
                        <Stack mt='16' spacing='3'>
                          <Heading size='md'>{e.name}</Heading>
                          <Text>Population: {e.population}</Text>
                          <Text>Region: {e.region}</Text>
                          <Text>Capital: {e.capital}</Text>
                        </Stack>
                      </CardBody>
                      <Divider />
                    </Card>
                  </span>
                </Link>
              )
            })
          )
        }
      </div>
    </>
  )
}

export default HomePage
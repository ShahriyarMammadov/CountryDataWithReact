import React, { useEffect, useState } from 'react'
import { Card, Image, CardBody, Stack, Heading, Text, Divider } from '@chakra-ui/react'
import './index.scss'
import { CircularProgress } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import SearchInput from '../../../components/search-input'

const HomePage = () => {
  const [Data, setData] = useState([])
  const [isLoading, setIsLoaoding] = useState(true);

  let BASE_URL = 'https://restcountries.com/v2/'
  useEffect(() => {
    fetch(`${BASE_URL}all`)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setIsLoaoding(false)
      })
  }, [])

  return (
    <>
      <SearchInput setData={setData} />
      <div className="cards">
        {isLoading ? (<CircularProgress isIndeterminate color='green.300' />) :
          (
            Data.map((e) => {
              return (
                <Link to={`/modal/${e.name}`} key={e.name}>
                  <span id={e.name}>
                    <Card maxW='xs' key={e.name}>.
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
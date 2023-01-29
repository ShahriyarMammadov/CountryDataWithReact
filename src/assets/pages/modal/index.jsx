import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Card, CardBody, Stack, Heading, Text } from '@chakra-ui/react'
import './index.scss'

const ModalPage = () => {
    const { name } = useParams();
    const [ModalData, setModalData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then((response) => response.json())
            .then((data) => {
                setModalData(data)
            })
    }, [])

    return (
        <div className='kart'>
            <Button className='backButton' colorScheme='facebook' onClick={() => {
                navigate(-1)
            }}>
                Back
            </Button>
            {ModalData.map((elem) => {
                return (
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        key={elem.name}
                    >
                        <img src={elem.flags.svg} alt="countryFlag" className='cardImg' />
                        <Stack >
                            <CardBody>
                                <Heading size='md' className='name'>{elem.name.common}</Heading>
                                <div className='top'>
                                    <div className="left">
                                        <Text py={3}>Native Name: {Object.values(elem.name.nativeName)[0].official}</Text>
                                        <Text py={3}>Population: {elem.population}</Text>
                                        <Text py={3}>Region: {elem.region}</Text>
                                    </div>
                                    <div className="right">
                                        <Text py={3}>Top Level Domain: {elem.tld}</Text>
                                        <Text py={3}>Currencies: {Object.values(elem.currencies)[0].name}</Text>
                                        <Text py={3}>Languages: {Object.values(elem.languages)[0]}</Text>
                                    </div>
                                </div>
                                <Text py={3} className='region'>Sub Region: {elem.subregion}</Text>
                                <Text py={3} className='region'>Capital: {elem.capital}</Text>
                                <Text py={5} className="border">Border Countries: {(elem.borders)?.map((e) => {
                                    return (
                                        <button>{e}</button>
                                    )
                                })}</Text>
                            </CardBody>
                        </Stack>
                    </Card>
                )
            })}
            {/* })} */}
        </div>
    )
}

export default ModalPage
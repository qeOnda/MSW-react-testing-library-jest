import React, { useState, useEffect } from 'react'
import { WhoisGetter } from './services/WhoisGetter'
import Container from '@material-ui/core/Container';

import Table from './components/TableResults'
import Search from './components/Search'
import Box from '@material-ui/core/Box';

export default function Home(){
    const [whoIs, setWhoIs] = useState([])
    const [searchWord, setSearchWord] = useState("")

    function search(data) {
        return data.filter((d) => d.domain.toLowerCase().indexOf(searchWord) > -1)
    }

    const handleSearch = (event) => {
        setSearchWord(event.target.value)
    }

    useEffect(() => {
        WhoisGetter().then(res => {                       
            setWhoIs(res.related)                
        }).catch(err => {          
            console.log(err);
        })
    }, [])
       
    console.log(searchWord)
    
    return (
        <Container fixed>
            <Box pt={8}>
                <Search handleSearch={handleSearch}/>
            </Box> 
            <Box pt={3}>
                <Table whoIs={search(whoIs)} />
            </Box> 
        </Container>
    )
}



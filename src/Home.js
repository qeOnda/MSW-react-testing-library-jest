import React, { useState, useEffect, useRef } from 'react'
import { WhoisGetter } from './services/WhoisGetter'
import Container from '@material-ui/core/Container';

import Result from './components/Result'
import Table from './components/TableResults'
import Search from './components/Search'
import Box from '@material-ui/core/Box';

export default function Home(){
    const [whoIs, setWhoIs] = useState([])
    const [searchWord, setSearchWord] = useState("")    
    const [checker, setChecker] = useState([])
    const [current, setCurrent] = useState("")
    
    const handleSearch = (event) => {
        setSearchWord(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()        
        setCurrent(searchWord)      
    }
    
    let firstRender = useRef(true);
    useEffect(() => {
        if(firstRender.current) {
            firstRender.current = false;
        } else if (checker.some(e => e.name === current)) {             
            let lookup = checker.filter((domain) => domain.name === current).map(i => i.data)
            setWhoIs(lookup[0])
        } else {
            WhoisGetter(current).then(res => {                       
                setChecker([...checker, {name: current, data: res.data}])
                setWhoIs(res.data)
            }).catch(err => {          
                console.log(err);
            })        
        }
    }, [current])

    return ( 
        <Container fixed>
            <Box pt={8}>
                <Search 
                    handleSearch={handleSearch}
                    handleSubmit={handleSubmit}
                />
            </Box>
            <Box pt={8}>
                <Result 
                    whoIs={whoIs}
                />
            </Box> 
        </Container>
    )  
}



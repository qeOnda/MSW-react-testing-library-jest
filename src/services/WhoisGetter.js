import React from 'react'
import axios from 'axios'

export const WhoisGetter = async (name) => {
    const res =  await axios.get(`https://otx.alienvault.com/otxapi/indicator/domain/whois/${name}`)
    
    console.log(res)
    const response = res.data.data
    const ret = response.filter((res) => res.key === "address" | res.key === "city" | res.key === "country" | res.key === "domain_name")

    return ret
}

import React from 'react'
import axios from 'axios'

export const WhoisGetter = async () => {
    const res =  await axios.get('https://otx.alienvault.com/otxapi/indicator/domain/whois/domain.com')
    return res.data
}

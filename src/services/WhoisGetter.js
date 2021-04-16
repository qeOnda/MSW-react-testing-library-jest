import React from 'react'
import axios from 'axios'

export const WhoisGetter = async (name) => {
    const res =  await axios.get('https://otx.alienvault.com/otxapi/indicator/domain/whois/'+ name)
    return res.data
}

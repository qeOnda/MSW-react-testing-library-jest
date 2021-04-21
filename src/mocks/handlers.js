import { rest } from 'msw'


const handlers = [
    rest.get("https://otx.alienvault.com/otxapi/indicator/domain/whois/*", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({data:[
                  {key: "address", name: "Address", value: "123 Example Road,"},
                  {key: "city", name: "City", value: "Example Park"},
                  {key: "country", name: "Country", value: "US"},
                  {key: "domain_name", name: "Domain Name", value: "EXAMPLE.COM"}
                ]
            })
        )
    })
]

export { handlers, rest }
import { getSession } from '../../lib/iron'
const fetch = require("node-fetch");

export default async function trending(req, res) {
  const resp = await fetch(`https://nextfast.herokuapp.com/searchfeed?size=${req.query.size}&searchString=${req.query.searchString}`)
        const data = await resp.json();
        res.json(data);
}

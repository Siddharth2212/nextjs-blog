import { getSession } from '../../lib/iron'
const fetch = require("node-fetch");

export default async function trending(req, res) {
  const resp = await fetch(`https://nextfast.herokuapp.com/feed/data?size=${req.query.size}`)
        const data = await resp.json();
        res.json(data);
}

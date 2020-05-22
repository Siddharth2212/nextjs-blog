import { getSession } from '../../lib/iron'
const fetch = require("node-fetch");

export default async function trending(req, res) {
  const resp = await fetch(`https://www.newsapp.io/feed/nextprev?date=${req.query.date}&newsid=${req.query.newsid}&category=${req.query.category}`)
        const data = await resp.json();
        res.json(data);
}

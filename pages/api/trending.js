import { getSession } from '../../lib/iron'
const fetch = require("node-fetch");

export default async function trending(req, res) {
  const resp = await fetch('https://nextfast.herokuapp.com/feed/trending')
        const data = await resp.json();
        res.json(data);
}

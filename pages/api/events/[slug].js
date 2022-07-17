const { events } = require('../../../public/data.json');
export default function handler(req, res) {
    const evt = events.filter(data=>data.slug == req.query.slug)
  if (req.method === 'GET') {
    res.status(200).json(evt)
  } else {
    res.status(405).json({message:`${req.method} is not allowed`})
  }
}

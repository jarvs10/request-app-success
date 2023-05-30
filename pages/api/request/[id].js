import { db } from "@/config/db";

export default function handler(req, res) {
  
  const requesId = req.query.id;
  const q = 'SELECT * FROM request WHERE id = ?'

  db.query(q, [requesId], (err, data) => {
    if (err) return res.json(err)
    return res.json(data[0])
  })

  // const { id } = req.query;

  // const [result] = await db.query('SELECT * FROM request WHERE id = ?', [id]);

  // console.log(result);


  // return res.status(200).json(requesId);
}

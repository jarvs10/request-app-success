import { db } from "@/config/db";

export default async function handler(req, res) {

  switch (req.method) {
    case 'GET':
      return await getUser(req, res)
    case 'DELETE':
      return await deleteId(req, res)
    default:
      break;
  }
}

const getUser = async (req, res) => {
  const requesId = req.query.id;
  const q = "SELECT * FROM request WHERE id = ?";

  db.query(q, [requesId], (err, data) => {
    if (err) return res.json(err)
    return res.json(data[0])
  })
}

const deleteId = async (req, res) => {
  const requesId = req.query.id;
  const q = "DELETE FROM request WHERE id = ?";

  db.query(q, [requesId], (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
}

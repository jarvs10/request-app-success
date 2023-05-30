import { db } from "@/config/db"

export default async function handler(req, res) {

  switch (req.method) {
    case 'GET':
      const q = "SELECT * FROM request"
      db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
      })
      return;
    case 'POST':
      postRequest(req, res);
      return;
    case 'DELETE':
      deleteId(req, res);
  }
}

const postRequest = (req, res) => {
  const sql = "INSERT INTO request (`fecha`, `funcionario`, `solicitud`, `descripcion` ) VALUES (?)"
  const values = [
    req.body.fecha,
    req.body.funcionario,
    req.body.solicitud,
    req.body.descripcion,
  ]
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
}

const deleteId = (req, res) => {
  const requesId = req.params.id;
  const q = "DELETE FROM request WHERE id = ?";

  db.query(q, [requesId], (err, data) => {
    if (err) return res.json(err)
    return res.json('Eliminado correctamente')
  })
}



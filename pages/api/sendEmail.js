import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: true, // true for 465, false for other ports
      logger: true,
      debug: true,
      secureConnection: false,
      auth: {
        user: 'jarv1009@gmail.com',
        pass: 'nqkggitngonfuwje',
      },
      tls: {
        rejectUnauthorized: false
      },
    })

    // Configura el correo electrónico
    const mailOptions = {
      from: 'jarv1009@gmail.com',
      to: data.email,
      subject: data.funcionario,
      text: data.respuesta,
    };

    try {
      // Envía el correo electrónico
      await transporter.sendMail({
        ...mailOptions,
      })

      // Envía una respuesta exitosa
      res.status(200).send('Correo enviado exitosamente.');
    } catch (error) {
      console.log(error);
      // Si ocurre un error, envía una respuesta de error
      res.status(500).send(error);
    }
  } else {
    // Si se accede a la ruta con un método diferente a POST, envía una respuesta de error
    res.status(405).send('Método no permitido.');
  }
}





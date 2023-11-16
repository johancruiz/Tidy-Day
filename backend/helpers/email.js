import nodemailer from 'nodemailer';

export const emailRegistro = async(datos) =>{
    const {email, nombre, token} = datos;

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "dfe3a381f7fb22",
        pass: "3624bf7e86a20a"
      }
    });

      //Informacion del email

      const info = await transport.sendMail({
         from: 'TidyDay - Administrador de Proyectos <cuentas@tidyday.com>',
         to: email,
         subject: "Tidyday - Confirma tu cuenta",
         text: "Comprueba tu cuenta en TidiDay",
         html: `<p>Hola ${nombre} Comprueba tu cuenta en TidyDay</p>
         <p>Tu cuenta esta casu lista, solo debes comprobarla en el siguiente enlace:</p>
         
         <a href="${process.env.FRONTEND_URL}/confirmar/${token}" >Comprobar Cuenta</a>
         <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
         
         `
         
      })
}
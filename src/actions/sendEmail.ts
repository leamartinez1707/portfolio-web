import nodemailer from 'nodemailer';

interface EmailRequest {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const sendEmail = async (formData: EmailRequest) => {
    try {

        if (!formData.name || !formData.email || !formData.message) {

            return "Porfavor completa todos los campos requeridos.";
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: import.meta.env.VITE_EMAIL_USER,
                pass: import.meta.env.VITE_EMAIL_PASS,
            },
        });
        const emailHTML = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px; background-color: #f9f9f9;">
                <h2 style="color: #333; text-align: center;">📩 Nuevo mensaje de contacto</h2>
                <p><strong>Nombre:</strong> ${formData.name}</p>
                <p><strong>Correo:</strong> <a href="mailto:${formData.email}" style="color: #007bff;">${formData.email}</a></p>
                <p><strong>Asunto:</strong> <p>${formData.subject}</p>
                <p><strong>Mensaje:</strong></p>
                <div style="background-color: #fff; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
                    <p style="margin: 0; color: #555;">${formData.message}</p>
                </div>
                <p style="text-align: center; margin-top: 20px; color: #888; font-size: 12px;">
                    ✉️ Este mensaje fue enviado desde el formulario de contacto.
                </p>
            </div>
        `;

        await transporter.sendMail({
            from: `"${formData.name}" <${formData.email}>`,
            to: 'leandromartinez.dev@gmail.com', // Correo de destino
            subject: `${formData.subject}`,
            text: formData.message,
            html: emailHTML,
        });

        return 'Correo enviado correctamente'
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return 'Error interno del servidor';
    }
}
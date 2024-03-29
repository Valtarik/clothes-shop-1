import nodemailer from 'nodemailer'

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Активація аккаунту Mon Amour',
            text: '',
            html:
                `
                    <div>
                        <h1>Для активації аккаунту, будь ласка, перейдіть за посиланням:</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `
        })
    }

    async sendResetPasswordMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Відновлення доступу до аккаунту Mon Amour',
            text: '',
            html:
                `
                    <div>
                        <h1>Для відновлення паролю перейдіть за посиланням:</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `
        })
    }
}

const mailService = new MailService()

export default mailService
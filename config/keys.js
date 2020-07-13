// add this file to .gitignore


module.exports = {
    google: {
        clientID: '1024615668156-kbdb3hfjeonh77iu5m5ijjo1hautbjli.apps.googleusercontent.com',
        clientSecret: '6dZOfYqmTc7Nr0iWJBwds1ZF'
    },
    jwt: {
        required: false,
        auth0Logout: true,
        appSession: {
            secret: 'sE-HxanKAl_i_t_mT4tCaJmMdJjTcvwYbAml97TWAwjPh7_r4Bmu3ck8TjCg-194'
        },
        baseURL: 'http://localhost:8081',
        clientID: 'eoG3L0bL7AlvT2rbih8WnKZYnIXamAZ9',
        issuerBaseURL: 'https://dev-lhfpjc3h.eu.auth0.com'
    },
    nodemailer: {
        gmail: {
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'vladislav15.04.200040@gmail.com',
                pass: 'ArMAGeD0N'
            }
        }
    },
    mssql: {
        dialect: 'mssql',
        host: 'LENOVOIDEAPAD51',
        database: 'HABR',
        userId: 'kvo',
        password: 'mypassword'
    },
    URL: 'http://localhost:8081'
};
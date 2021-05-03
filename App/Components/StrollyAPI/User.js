const axios = require('axios').default;

export async function Strolly_postRegister(pseudo, password) {
    const url= 'http://10.0.2.2:8082/register'

    return(
        axios.post(url,
            {pseudo: pseudo, password: password}
        ).then(response => {
            return(true)
        })
        .catch(error => {
            console.log(error)
            return(false)
        })
    )
}

export async function Strolly_postLogin(pseudo, password) {
    const url= 'http://10.0.2.2:8082/login'

    return(
        axios.post(url,
            {pseudo: pseudo, password: password}
        ).then(response => {
            return(true)
        })
        .catch(error => {
            return(false)
        })
    )
}
const axios = require('axios').default;

export async function Strolly_postRegister(pseudo, password) {
    const url= 'https://trendby.herokuapp.com/register'

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
    const url= 'https://trendby.herokuapp.com/login'

    return(
        axios.post(url,
            {pseudo: pseudo, password: password}
        ).then(response => {
            return(response.data.message)
        })
        .catch(error => {
            return(null)
        })
    )
}
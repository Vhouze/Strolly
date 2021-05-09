const axios = require('axios').default;

export async function GetCafe() {
    const url= 'http://10.0.2.2:8082/GetCafe'

    return(
        axios.post(url,
        ).then(response => {
            return(true)
        })
        .catch(error => {
            console.log(error)
            return(false)
        })
    )
}

const axios = require('axios').default;

export async function GetCafe() {
    const url= 'http://10.0.2.2:8082/getCafe'

    return(
        axios.post(url,
        ).then(response => {
            return(response.data.message)
        })
        .catch(error => {
            console.log(error)
            return(null)
        })
    )
}

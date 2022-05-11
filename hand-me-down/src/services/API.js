// import Axios from 'axios'
import React from 'react'

// export const BASE_URL = 'http://localhost:8000'

// const Client = Axios.create({ baseURL: BASE_URL })

function api(){
    return (
        <div>
            <center>
                <h1>API</h1>
                <h3>Populate data</h3>
                <hr/>

            </center>
        </div>
    )
}

// Client.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token')
//         if (token) {
//             config.headers['authorization'] = `Bearer ${token}`
//         }
//         return config 
//     },
//     (error) => Promise.reject(error)
// )

export default api
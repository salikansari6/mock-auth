import React from 'react'

const LoginCallback = () => {
    const code =  window.location.search.split("?code=")[1]
    const params = new URLSearchParams({
        'client_id':'bc8937aa7cf8f0b7e106',
        'client_secret':'19b9deb912c11318b5638bf86b075cef59ec1388',
        'code':code

    })

    React.useEffect(() =>{
        const getToken = (tokenURL) =>{
            return new Promise((resolve,reject)=>{
                    fetch(tokenURL,
                    {
                        method:'POST',
                        headers:{
                            // "Access-Control-Allow-Origin":"*",
                            'Accept': 'application/json',
                            // 'Content-Type':'application/json'
                        },
                        body: params
                    })
                    .then(res => res.json())
                    .then(token => {
                        resolve(sessionStorage.setItem('access_token',token['access_token']))
                    })
                    .catch(err => reject(err))
                               
            })
        }
 
        
       getToken("https://github.com/login/oauth/access_token").then(() =>{
           window.location.pathname="/dashboard"
       })
       .catch(err => console.log(err))
       

    },[])

    return (
        <div>
            Redirecting to DashBoard.....
        </div>
    )
}

export default LoginCallback

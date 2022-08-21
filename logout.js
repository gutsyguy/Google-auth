import { GoogleLogin } from 'react-google-login';
import React, {useEffect} from "react";
const clientId = "722191149866-k9uhh2fmc5mkgr7ha4b4g9r65e19a5kr.apps.googleusercontent.com"

    const onSuccess = (res) =>{
        console.log("Login sucess! cureent user: ", res.profileObj)
    }
    const onFailure = (res) =>{
        console.log("Login failed! res: ", res)
    }
function Login(){
    return(
        <div id="signInButton">
            <GoogleLogin
            clientId={clientId}
            buttonText= {"Logout"}
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}
export default Login
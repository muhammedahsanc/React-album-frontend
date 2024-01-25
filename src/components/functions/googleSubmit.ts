import axios from "../../config/axiosinstance";
import Cookies from 'js-cookie';
import { notify, errorToast } from "../../utils";

const googleSubmit = async(email:string)=> {

    try{
        if(email){   
        const data =  await axios.post("/addGoogleLoginData/googleLogin", {email});
        const token = data.data.token
        Cookies.set('token',JSON.stringify(token))
        notify(data.data.message)
        return data
        }else{
            throw new Error("Something went wrong");
        }
    
    }catch(error:any){
        console.error('An error occurred:', error);
        errorToast(error)
    }
}

export default googleSubmit
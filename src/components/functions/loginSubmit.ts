import axios from "../../config/axiosinstance";
import { setStateType, loginDataProps } from "../../interfaces";
import { notify, errorToast } from "../../utils";
import Cookies from "js-cookie";
// import { useDispatch } from "react-redux";
// import  { addToList} from "../redux/data"

export type SubmitProps = {
  formData: loginDataProps;
  setFormData: setStateType<loginDataProps>;
  error: string | null;
};

const loginSubmit = async ({ formData, setFormData, error }: SubmitProps) => {
  try {
    if (formData.username && formData.password && !error) {
      const data = await axios.post("/addLoginData/addLogin", formData);
      if (data instanceof Error) throw new Error("Something went wrong");
      notify(data.data.message);
      const token = data.data.token;
      const tokenString = JSON.stringify(token);
      Cookies.set("token", tokenString);
      setFormData({ username: "", password: "" });
      return data.data;
    } else {
      throw new Error("Please fill completely");
    }
  } catch (error: any) {
    errorToast(error.message);
    console.log(error.message);
  }
};

export { loginSubmit };

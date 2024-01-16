import axios from "../../config/axiosinstance";
import { formDataProps, setStateType } from "../../interfaces";
import { notify, errorToast } from "../../utils";

export type SubmitProps = {
  formData: formDataProps;
  setFormData: setStateType<formDataProps>;
  error: string | null;
};

const handleSignUpSubmit = async ({
  formData,
  setFormData,
  error,
}: SubmitProps) => {
  if (
    formData.username &&
    formData.password &&
    formData.conformPassword &&
    !error
  ) {
    if (formData.password === formData.conformPassword) {
      await axios.post("/addSignUpData/add", formData);
      notify(
        "Please check your Gmail inbox for a verification email. Kindly verify your account and proceed with the login process"
      );
      setFormData({ username: "", password: "", conformPassword: "" });
    } else {
      throw new Error("Passwords not match");
    }
  } else {
    throw new Error("Please fill completely");
  }
};

export { handleSignUpSubmit };

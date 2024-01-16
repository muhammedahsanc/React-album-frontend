import { toast } from "react-toastify";
const errorToast = (error: any) =>
  toast.error(
    error?.response?.data?.message ?? error.message ?? "Something went wrong"
  );
export { errorToast };

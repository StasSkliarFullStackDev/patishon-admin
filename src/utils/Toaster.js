import { toast } from "react-toastify";
export const toaster = (data,type="success") => {
  toast(data, { limit: 1, type: type });
};

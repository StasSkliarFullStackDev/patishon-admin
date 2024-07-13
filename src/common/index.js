import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import appconstant from "../themes/appconstant";

//****** this is used to show config in the config Management ******/

export const LinkFn = (props) => {
  const { destination, img, text } = props;
  return (
    <Link to={destination}>
      <div className="">
        <img src={img} alt="" />
        <p>{text}</p>
      </div>
    </Link>
  );
};

//**** this function show input fileds which is disabe *******/

export const DisabledField = (props) => {
  const { className, label, value } = props;
  return (
    <div className={`${className ? className : "form-group"}`}>
      <label>{`${appconstant[label]}`}</label>
      <p>{value}</p>
    </div>
  );
};

//**** this is breadcrumb function which automaticaly create the total length of the breadcrumb ******/

export const BreadcrumbFn = ({ path, pathName }) => {
  const totalBreadcrumbItem = () => {
    return pathName?.map((item, index) => {
      return path[index] ? (
        <Breadcrumb.Item key={""}>
          <Link to={`/${path[index]}`}>{item}</Link>
        </Breadcrumb.Item>
      ) : (
        <Breadcrumb.Item key={""}>{item}</Breadcrumb.Item>
      );
    });
  };
  return <Breadcrumb>{totalBreadcrumbItem()}</Breadcrumb>;
};

export const isInternetConnected = (history) => {
  if (navigator.onLine) {
    return true
  } else {
    toast.error("Please check your internet connection.")
  }
};

export const removeItem = (key) => {
  return () => localStorage.removeItem(`${key}`)
}
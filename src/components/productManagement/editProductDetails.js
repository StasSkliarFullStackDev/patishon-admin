import React, { useState, useEffect } from "react";
import { Image } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import appconstant from "../../themes/appconstant";
import { FiPlusCircle } from "react-icons/fi";
import Textfiled from "../../common/Textfield";
import { EditProductAction } from "../../Redux/Actions/ProductManagement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { toaster } from "../../utils/Toaster";
import { validateImageRatioOneByOne } from "../../utils/ImageValidation";
import { BreadcrumbFn } from "../../common";
import { Dispatched } from "../../utils/utils";

const EditProductDetails = () => {
  const { state } = useLocation();
  const [name, setname] = useState(state?.productName);
  const [image, setImage] = useState(state?.productImage);
  const [newImage, setNewImage] = useState();
  const [ImageBlob, setImagelob] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Patishon";
    window.scrollTo(0, 0);
    if (!state?.productName && !state?.productImage) {
      navigate("/productManagement");
    }
  }, []);
  const onUpdateButtonClick = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productName", name);
    formData.append("productImage", newImage);
    formData.append("productId", state._id);
    Dispatched(EditProductAction({ formData: formData, navigate }));
  };
  const imageValidation = (value) => {
    let fileTypes = ["jpg", "jpeg", "svg", "png"];
    return fileTypes.indexOf(value) > -1;
  };
  const OnImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      let uploadFile = event.target.files[0];
      let splitName = uploadFile.name.split(".").pop().toLowerCase();
      let isSuccess = imageValidation(splitName);
      if (isSuccess) {
        validateImageRatioOneByOne(event.target.files[0])
          .then(() => {
            setNewImage(event.target.files[0]);
            let reader = new FileReader();
            reader.onload = (e) => {
              setImagelob(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
            return;
          })
          .catch(() => {
            toaster("You can only upload image of 1:1 ratio.");
            return false;
          });
      } else {
        toaster("Only .jpg, .jpeg, .png and .svg format images are allowed.");
      }
    }
  };


  return (
    <div>
      <BreadcrumbFn
        path={["productManagement"]}
        pathName={[
          <FontAwesomeIcon icon={faHome} />,
          appconstant.editProductDetails,
        ]}
      />
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <div className="content-e">
          <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
            <h6 className="text-white text-capitalize ps-3">
              {appconstant.editProductDetails}
            </h6>
          </div>
          <div className="wrapper_line view_modules view">
            <div className="datacenter">
              <label>{appconstant.productImage}</label>
              <Image
                src={
                  ImageBlob.length
                    ? ImageBlob
                    : image
                      ? appconstant.ImageUrl + image
                      : ""
                }
                alt="product Image"
                width={"100px"}
                height={"100px"}
                className="ProductImage"
              />
              {/* </div> */}
              <label htmlFor="ImageUpload">
                <div className="datacenter-icon">
                  <FiPlusCircle
                    size={30}
                    color="#3b495b"
                    title="Click to change image."
                  />
                </div>
              </label>
            </div>
            <form onSubmit={onUpdateButtonClick}>
              <div className="form-group editProductForm">
                <label>{appconstant.productName}</label>
                <Textfiled
                  disabled
                  className="form-control"
                  type="text"
                  placeholder="Product Name"
                  value={name}
                  name="productName"
                  onChange={(e) => setname(e.target.value)}
                />
                <input
                  style={{ display: "none" }}
                  id="ImageUpload"
                  type="file"
                  accept="image/*"
                  onChange={OnImageUpload}
                  onClick={(e) => (e.target.value = null)}
                />
              </div>
              <div>
                <button type="submit" className="button-list">
                  {appconstant.buttonupate}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditProductDetails;

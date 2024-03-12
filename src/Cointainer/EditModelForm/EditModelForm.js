import React, { useEffect, useState } from "react";
import placeholder from "../../Assets/Image/product-placeholder.png";
import "./EditModelForm.css";
import axios from "axios";
import { backendapi } from "../../App";

const EditModelForm = ({ handleClose, modelData }) => {
  const [imageUpload, setImageUpload] = useState();

  const handleImageUpload = (e) => {
    let file = e.target.files[0];

    setImageUpload(URL.createObjectURL(file));
  };

  const [productedit, setProductedit] = useState({
    product_name: "",
    in_stock: "",
    market_price: "",
    our_price: "",
    ratings: "",
    slogan: "",
    slogan1: "",
  });

  useEffect(() => {
    setProductedit({
      product_name: modelData.product_name,
      in_stock: modelData.in_stock,
      market_price: modelData.market_price,
      our_price: modelData.our_price,
      ratings: modelData.ratings,
      slogan: modelData.slogan,
      slogan1: modelData.slogan1,
    });
    setImageUpload(modelData.image);
  }, []);

  const handleChange = ({ target: { value, name } }) => {
    setProductedit({ ...productedit, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const {
        product_name,
        in_stock,
        our_price,
        market_price,
        ratings,
        slogan,
        slogan1,
      } = productedit;

      var product_cat;
      if (modelData.category == "vegetables") {
        product_cat = "update_vegetable";
      } else if (modelData.category == "seeds") {
        product_cat = "update_seeds";
      } else {
        product_cat = "update_fertilizer";
      }

      const postData = await axios.put(
        `${backendapi}/category/${product_cat}/${modelData.id}`,
        {
          product_name,
          in_stock,
          image: imageUpload,
          our_price,
          market_price,
          ratings,
          slogan,
          slogan1,
        }
      );

      if (postData.data.message == "Updated success") {
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="model_container">
      <div className="modelPopupBG"></div>
      <div className="foom">
        <div className="modelFormCard">
          <div className="modalpop_top">
            <div className="modalpop_top_heading">Edit Products</div>
            <button onClick={handleClose} className="close_btn">
              x
            </button>
          </div>
          <div className="modalpop_content">
            <div className="popup_profie_section">
              <div className="profile_image_box">
                <div className="profile_Image">
                  {imageUpload ? (
                    <img src={imageUpload} alt="ProfilePicture" />
                  ) : (
                    <img src={placeholder} alt="placeholder" />
                  )}
                </div>
                <div className="profile_plus_icon">
                  <input
                    type="file"
                    accept="jpeg, jpg, png"
                    onChange={handleImageUpload}
                  />
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              id="form"
              className="form"
              autoComplete="off"
            >
              <div className="popup_input_section">
                <input
                  type="text"
                  placeholder="Product Name"
                  id="product_name"
                  name="product_name"
                  onChange={handleChange}
                  value={productedit.product_name}
                />
                <input
                  type="text"
                  placeholder="Stock"
                  id="in_stock"
                  name="in_stock"
                  onChange={handleChange}
                  value={productedit.in_stock}
                />
                <input
                  type="number"
                  placeholder="Market Price"
                  id="market_price"
                  name="market_price"
                  onChange={handleChange}
                  value={productedit.market_price}
                />
                <input
                  type="text"
                  placeholder="Our Price"
                  id="our_price"
                  name="our_price"
                  onChange={handleChange}
                  value={productedit.our_price}
                />
                <input
                  type="text"
                  placeholder="Ratings"
                  id="ratings"
                  name="ratings"
                  onChange={handleChange}
                  value={productedit.ratings}
                />
                <textarea
                  rows={4}
                  className="text-area"
                  placeholder="Enter a words about Product"
                  id="slogan"
                  name="slogan"
                  onChange={handleChange}
                  value={productedit.slogan}
                />
                <textarea
                  rows={4}
                  className="text-area"
                  placeholder="Enter a words about Product"
                  id="slogan1"
                  name="slogan1"
                  onChange={handleChange}
                  value={productedit.slogan1}
                />
              </div>
              <div className="popup_submit_btn">
                <input
                  type="submit"
                  value={"Submit"}
                  className="popup_Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModelForm;

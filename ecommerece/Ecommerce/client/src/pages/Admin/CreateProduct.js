// import React, { useEffect, useState } from "react";
// import Layout from "../../components/Layout/Layout";
// import AdminMenu from "../../components/Layout/AdminMenu";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Select } from "antd";

// const { Option } = Select;

// const CreateProduct = () => {
//   const navigate = useNavigate();
//   const [categories, setCategories] = useState([]);
//   const [category, setCategory] = useState("");
//   const [photo, setPhoto] = useState("");
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [price, setPrice] = useState("");
//   const [shipping, setShipping] = useState("");
//   const [attributes, setAttributes] = useState([{ key: "", value: "" }]);

//   const getAllCategory = async () => {
//     try {
//       const { data } = await axios.get("/api/v1/category/all-category");
//       if (data?.success) {
//         setCategories(data?.category);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong in getting categories");
//     }
//   };

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     try {
//       const productData = new FormData();
//       productData.append("name", name);
//       productData.append("description", description);
//       productData.append("price", price);
//       productData.append("photo", photo);
//       productData.append("category", category);
//       productData.append("quantity", quantity);
//       productData.append("shipping", shipping);
//       productData.append("attributes", JSON.stringify(attributes));

//       // Log product data to verify the attributes array
//       for (let pair of productData.entries()) {
//         console.log(pair[0] + ", " + pair[1]);
//       }

//       const { data } = await axios.post(
//         "/api/v1/product/create-product",
//         productData
//       );
//       if (data?.success) {
//         toast.error(data?.message);
//       } else {
//         toast.success("Product created successfully");
//         navigate("/dashboard/admin/products");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };

//   const handleAttributeChange = (index, key, value) => {
//     const newAttributes = [...attributes];
//     newAttributes[index][key] = value;
//     setAttributes(newAttributes);
//   };

//   const addAttributeField = () => {
//     setAttributes([...attributes, { key: "", value: "" }]);
//   };

//   useEffect(() => {
//     getAllCategory();
//   }, []);

//   return (
//     <Layout title={"Dashboard - Create Product"}>
//       <div className="container-fluid m-3 p-3">
//         <div className="row">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9">
//             <h1>Create Product</h1>
//             <div className="m-1 w-100">
//               <Select
//                 style={{ border: "none" }}
//                 placeholder="Select Category"
//                 size="large"
//                 showSearch
//                 className="form-select mb-3"
//                 onChange={(value) => setCategory(value)}
//               >
//                 {categories?.map((c) => (
//                   <Option key={c._id} value={c._id}>
//                     {c.name}
//                   </Option>
//                 ))}
//               </Select>
//               <div className="mb-3">
//                 <label className="btn btn-outline-secondary col-md-12">
//                   {photo ? photo.name : "Upload Photo"}
//                   <input
//                     type="file"
//                     name="photo"
//                     accept="image/*"
//                     onChange={(e) => setPhoto(e.target.files[0])}
//                     hidden
//                   />
//                 </label>
//               </div>
//               <div className="mb-3">
//                 {photo && (
//                   <div className="text-center">
//                     <img
//                       src={URL.createObjectURL(photo)}
//                       alt="Product"
//                       height="200px"
//                       className="img img-responsive"
//                     />
//                   </div>
//                 )}
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   value={name}
//                   placeholder="Write a name"
//                   className="form-control"
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   value={description}
//                   placeholder="Write a description"
//                   className="form-control"
//                   onChange={(e) => setDescription(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   value={price}
//                   placeholder="Write a price"
//                   className="form-control"
//                   onChange={(e) => setPrice(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   value={quantity}
//                   placeholder="Write a quantity"
//                   className="form-control"
//                   onChange={(e) => setQuantity(e.target.value)}
//                 />
//               </div>
//               <Select
//                 style={{ border: "none" }}
//                 placeholder="Select Shipping"
//                 size="large"
//                 showSearch
//                 className="form-select mb-3"
//                 onChange={(value) => setShipping(value)}
//               >
//                 <Option value="true">YES</Option>
//                 <Option value="false">NO</Option>
//               </Select>
//               <div className="mb-3">
//                 <h4>Product Attributes</h4>
//                 {attributes.map((attr, index) => (
//                   <div key={index} className="d-flex mb-2">
//                     <input
//                       type="text"
//                       value={attr.key}
//                       placeholder="Key"
//                       className="form-control mr-2"
//                       onChange={(e) =>
//                         handleAttributeChange(index, "key", e.target.value)
//                       }
//                     />
//                     <input
//                       type="text"
//                       value={attr.value}
//                       placeholder="Value"
//                       className="form-control mr-2"
//                       onChange={(e) =>
//                         handleAttributeChange(index, "value", e.target.value)
//                       }
//                     />
//                   </div>
//                 ))}
//                 <button
//                   className="btn btn-outline-secondary"
//                   onClick={addAttributeField}
//                 >
//                   Add Attribute
//                 </button>
//               </div>
//               <div className="mb-3">
//                 <button className="btn btn-primary" onClick={handleCreate}>
//                   Create Product
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CreateProduct;
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";

const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [shipping, setShipping] = useState("");
  const [attributes, setAttributes] = useState([{ key: "", values: [""] }]);

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/all-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting categories");
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("photo", photo);
      productData.append("category", category);
      productData.append("quantity", quantity);
      productData.append("shipping", shipping);
      productData.append("attributes", JSON.stringify(attributes));

      const { data } = await axios.post(
        "/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product created successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleAttributeChange = (index, key, valueIndex, value) => {
    const newAttributes = [...attributes];
    if (key === "key") {
      newAttributes[index].key = value;
    } else {
      newAttributes[index].values[valueIndex] = value;
    }
    setAttributes(newAttributes);
  };

  const addAttributeField = () => {
    setAttributes([...attributes, { key: "", values: [""] }]);
  };

  const addValueField = (index) => {
    const newAttributes = [...attributes];
    newAttributes[index].values.push("");
    setAttributes(newAttributes);
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Product</h1>
            <div className="m-1 w-100">
              <Select
                style={{ border: "none" }}
                placeholder="Select Category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => setCategory(value)}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="Product"
                      height="200px"
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="Write a name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={description}
                  placeholder="Write a description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={price}
                  placeholder="Write a price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={quantity}
                  placeholder="Write a quantity"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <Select
                style={{ border: "none" }}
                placeholder="Select Shipping"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => setShipping(value)}
              >
                <Option value="true">YES</Option>
                <Option value="false">NO</Option>
              </Select>
              <div className="mb-3">
                <h4>Product Attributes</h4>
                {attributes.map((attr, index) => (
                  <div key={index} className="mb-2">
                    <div className="d-flex mb-2">
                      <input
                        type="text"
                        value={attr.key}
                        placeholder="Key"
                        className="form-control mr-2"
                        onChange={(e) =>
                          handleAttributeChange(index, "key", 0, e.target.value)
                        }
                      />
                    </div>
                    {attr.values.map((value, valueIndex) => (
                      <div key={valueIndex} className="d-flex mb-2">
                        <input
                          type="text"
                          value={value}
                          placeholder="Value"
                          className="form-control mr-2"
                          onChange={(e) =>
                            handleAttributeChange(
                              index,
                              "value",
                              valueIndex,
                              e.target.value
                            )
                          }
                        />
                      </div>
                    ))}
                    <button
                      className="btn btn-outline-secondary mb-2"
                      onClick={() => addValueField(index)}
                    >
                      Add Value
                    </button>
                  </div>
                ))}
                <button
                  className="btn btn-outline-secondary"
                  onClick={addAttributeField}
                >
                  Add Attribute
                </button>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  Create Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;

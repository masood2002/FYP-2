import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useEffect, useState } from 'react'
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import{Select}from 'antd'
const {Option}=Select;

const CreateProduct = () => {
  const navigate=useNavigate()
 const [categories,setCategories]=useState([])
 const [category,setCategory]=useState("")
 const [photo,setPhoto]=useState("");
 const [name,setname]=useState("");
 const [description,setDescription]=useState("");
 const [quantity,setQuantity]=useState("");
 const [price,setPrice]=useState("");
 const [shipping,setShipping]=useState("");
//  Getting cateories form create categories
const getAllCategory = async () => {
  try {
    const { data } = await axios.get("/api/v1/category/all-category");
    if (data?.success) {
      setCategories(data?.category);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something Went wring in getting category");
  }
};
const handleCreate= async (e)=>{
e.preventDefault();
try {
  const productData=new FormData();
  productData.append('name',name)
  productData.append('description',description)
  productData.append('price',price)
  productData.append('photo',photo)
  productData.append('category',category)
  productData.append('quantity',quantity)
  
  const data = await axios.post('/api/v1/product/create-product',productData)
  if(data?.success){
    toast.error(data?.message)
    // to be fixed 
  }else{
    toast.success('Product created Succesfully')
    navigate('/dashboard/admin/products')
  }
} catch (error) {
  console.log(error)
  toast.error('something went wrong')
}

}
useEffect(() => {
  getAllCategory();
},[]);
  return (
    <Layout title={"Dashboard - All Products"}>
    <div className="container-fluid m-3 p-3">
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1>Create Products</h1>
          <div className='m-1 w-100'>
               <Select  style={{ border: 'none'}} placeholder="Select Category" size='Large' showSearch className='form-select mb-3' onChange={(value)=>{setCategory(value)}} >
               {categories?.map( (c) => (
                
                <Option key={c._id} value={c._id}>
                 {c.name} 
                 </Option>
               
               ))}
                        
               </Select>
               <div className='mb-3'>
                <label  className='btn btn-outline-secondary col-md-12'>
                {photo ? photo.name : "Upload Photo"}
                <input type='file' name='photo' accept='image/*' onChange={(e)=>setPhoto(e.target.files[0]) } hidden/>

                </label>
               </div>
               <div className='mb-3'>
                {photo && (
                  <div className='text-center'>
                    <img src={URL.createObjectURL(photo)} alt='' height={'200px'} className='img img-responsive'></img>
                  </div>
                )}
               </div>
               <div className='mb-3'>
               
                <input type='text' value={name} placeholder='Write a name' className='form-control' onChange={(e)=>{setname(e.target.value)}}/>
               
               </div>
               <div className='mb-3'>
               
                <input type='text' value={description} placeholder='Write a desctiption' className='form-control' onChange={(e)=>{setDescription(e.target.value)}}/>
               
               </div>
               <div className='mb-3'>
               
                <input type='text' value={price} placeholder='Write a price' className='form-control' onChange={(e)=>{setPrice(e.target.value)}}/>
               
               </div>
               <div className='mb-3'>
               
                <input type='text' value={quantity} placeholder='Write a quantity' className='form-control' onChange={(e)=>{setQuantity(e.target.value)}}/>
               
               </div>
               <Select  style={{ border: 'none'}} placeholder="Select Shipping" size='Large' showSearch className='form-select mb-3' onChange={(value)=>{setShipping(value)}} >
              
                
                <Option  value='0'> YES  </Option>
                <Option  value='1'> NO  </Option>
               
            
                        
               </Select>
           <div className='mb-3'>
            <button className='btn btn-primary' onClick={handleCreate }> Create Product</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default CreateProduct

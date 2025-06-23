import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { Navigate, useNavigate, useParams } from "react-router-dom";

function EditProduct(){
    const {id}=useParams();
    const {register,handleSubmit, reset , setValue }=useForm()
    const  navigate=useNavigate();
const getSingleData=()=>{

    axios.get(`http://localhost:5000/products/${id}`).then(response=>{
if(response.status==200)
{
    console.log(response.data);
    for(let props in response.data){
        setValue(props,response.data[props])
    }
}
    })
}
useEffect(getSingleData,[])

function  updateData(data){
axios.put(`http://localhost:5000/products/${id}`,data).then(response=>{
    if(response.status==200)
    {
        alert("Product uodated");
        reset();
        navigate('/view');
    }
}

)
}
    

    return(
          <div className='d-flex justify-content-center'>
        <div className='card bg-tranparent w-50 mt-2 p-3'>
             <h1 className='text-center fs-3'>Add Product Here</h1>
   <form onSubmit={handleSubmit(updateData)}>
<div>
    
    <label className='fs-2 form-label'>productName</label>
    <input type="text" className='form-control'   {...register("productName")}></input>
   </div>

    <div>
   <label className='fs-2 form-label' >Category</label>
    <input type="text" name="Category"  className='form-control' {...register("Category")}></input>
</div>

    <div>
<label className='fs-2 form-label'>Price</label>
    <input type="text" name="Price" className='form-control' {...register("Price")}></input>
</div>

 <div>
<label className='fs-2 form-label' >Supplier</label>
    <input type="text" name="Supplier" className='form-control' {...register("Supplier")}></input>
</div>

 <div>
<label className='fs-2 form-label'>descripition</label>
    <input type="text" name="descripition"className='form-control'  {...register("descripition")}></input>
</div>

<div>
<label className='fs-2 form-label'>quantity</label>
    <input type="text" name="quantity"className='form-control'  {...register("quantity")}></input>
</div>

<div>
<label className='fs-2 form-label'>instock</label>
    <input type='checkbox' name="instock" className='form-check-input mt-3 ms-4 fs-4'  {...register("instock")}></input>
</div>



<div className='text-center'>
    <button type="submit">Save</button>
   
</div>
   </form>
   </div>
   </div>
   );
}


        
    

export default EditProduct

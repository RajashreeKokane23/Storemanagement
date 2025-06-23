import axios from "axios"
import { useEffect , useState } from "react"
import { Link } from "react-router-dom"

function ViewProduct(){

    const[products,setProducts]=useState([])

    function getAlldata(){

axios.get(`http://localhost:8080/get`).then(response=>{

          if(response.status==200){
                setProducts(response.data)
          }

      }).catch(error=>{
           console.log(error);
      })

    }

    useEffect(getAlldata,[])
    function deleteData(id){
axios.delete(`http://localhost:5000/products/${id}`).then(response=>{
 if(response.status==200){
              alert("product successfull deleted...");
              getAlldata();
            }
})
    }
    
return<>
<div>
    <h1 className='text-center text-success'>VIEW Product</h1>
</div>
<div>
    <button onClick={getAlldata}>GETALLDATA</button>
</div>

        <table className='table table-bordered'>
<thead>
    <tr>
        <th>ID</th>
        <th>productName</th>
        <th>Price</th>
        <th>Supplier</th>
        <th>descripition</th>
        <th>quantity</th>
         <th>instock</th> 
         <th>Action</th>
    </tr>
</thead >
<tbody>
    {
        products.map((p,i)=><tr key={i}>
            <td>{p.id}</td>
        <td>{p.productName}</td>
        <td>{p.Price}</td>
        <td>{p.Supplier}</td>
         <td>{p.descripition}</td>
         <td>{p.quantity}</td>
         <td><input type='checkbox' checked={p.inStock}></input></td>
         <td ><button className="btn btn-danger" onClick={()=>deleteData(p.id)}><i className="bi bi-trash"></i>
</button></td>
        <td><Link className="btn btn-dark" to={`/edit/${p.id}`} ><i className="bi bi-pencil"></i></Link></td>

       </tr>) 
    }
</tbody>
</table>
</>
}
export default ViewProduct

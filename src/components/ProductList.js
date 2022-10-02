import { useEffect, useState } from "react";
import Product from "./Product";
function ProductList() {
    const api_url="https://fakestoreapi.com/products";
   const [products, setproducts]=useState([]);
   const [categories, setcategories]=useState([]);

   const getProducts=()=>{
    fetch(api_url)
    .then((res)=>res.json())
    .then((data)=>setproducts(data));
    //console.log(products);

   }

   const getGategories=()=>{
    fetch(`${api_url}/categories`)
    .then((res)=>res.json())
    .then((data)=>setcategories(data));

   }
   const getProductIncategory=(catName)=>{
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
    .then((res)=>res.json())
    .then((data)=>setproducts(data)
    );
    
   }

    useEffect(()=>{
     getProducts();
     getGategories();
    // console.log(categories);

    },[]);

return(
    <>
    <h2 className="text-center p-3">Our Product</h2>
    <div className="container">
    <button  onClick={()=>{
                getProducts();}}
                 className="btn btn-info">ALL</button>
                         {categories.map((cat)=>{
          return (
              <button  key={cat} onClick={()=>{
                    getProductIncategory(cat);

              }}
                className="btn btn-info">{cat}</button>
            )
        })} 
    <div className="row">
        { products.map((product) =>{
            return(
                <div className="col-3" key={product.id}>
                <Product product={product} showButton={true}/>
             </div>
            );
        })}
     
</div>         
        </div>
    </>
)

}
export default ProductList;
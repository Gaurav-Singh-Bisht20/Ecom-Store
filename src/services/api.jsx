import { useEffect, useState } from "react";


export function useProducts(){
    const [products,setProducts]= useState(null);
    
    useEffect(()=>{
        async function fetchProducts (){
            try{
                const response = await fetch("https://api.escuelajs.co/api/v1/products");
                const data = await response.json();
                setProducts(data.slice(0,50));
                console.log(data.slice(0,50))
            }catch(error){
                console.error("error fetching products",error)
                setProducts([]);
            }
        }
        fetchProducts();
    },[]);
    
    return products
 }
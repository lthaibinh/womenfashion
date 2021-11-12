import React, { useState, useEffect } from "react";
import productApi from './../../api/ProductApi' ;
import ProductItem from './ProductItem';
import { useParams} from 'react-router-dom';
let ProductsList = () => {
    let [products,setProducts] = useState([]);
    const { slug } = useParams();
    console.log("test" + slug);
  
    useEffect(() => {
        const fetchProductsList = async () => {
            try {
                if(!slug){  // khong co type
                    const params = {};
                    const response = await productApi.getAll(params);
                    // console.log('fetch successfully', response)
                    setProducts(response)
                    console.log(response)
                }else{  // co type
                    const params = {};
                    const response = await productApi.getByType(slug,params);
                    // console.log('fetch successfully', response)
                    setProducts(response)
                    console.log(response)
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchProductsList();
    }, [slug]);

    let productsList = products.map((product,index) => {
        return(
            <ProductItem key={index} product={product}></ProductItem>
        )
    })

    return (
        <div className="w3ls_dresses_grid_right_grid3">
            {productsList}
            <div className="clearfix"> </div>
        </div>
    )
}
export default ProductsList
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {GET_PRODUCTS} from "../../redux/actionTypes/actionTypes";
import {getCategory, getProducts} from "../../redux/actions/simpleActions";
import "./product.css"
import SingleContent from "../SingleContent/SingleContent";
import CustomPagination from "../Pagination/CustomPagination";
import Header from "../Header/Header";
import Example from "../SiteLoader/Example";

function Products() {
    const [page,setPage]=useState(1)

    const {products,totalNumberOfPAges,loading} = useSelector(state => state.simpleReducer);

    const dispatch = useDispatch();

    const [loader, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        },3000)
        dispatch(getCategory())
        dispatch(getProducts(page))

    }, [page]);
    if (loader) {
        return (
            <Example/>
        )
    }



    return (
        <div>
            <Header page={page}/>
            <div className="container">
                <div className="page-title ">Our Products</div>
                <div className={products.length>1?"d-none":"nothing-found"}>Nothing was found !!!</div>
                <div className={products.length>1?"products":"d-none"}>
                    <div className="row">
                        {products?.map((item,index)=>(
                            <div className="col-xl-4" key={index}>
                                <SingleContent
                                    id={item.id}
                                    brand={item.brand}
                                    category={item.category}
                                    description={item.description}
                                    discountPercentage={item.discountPercentage}
                                    images={item.images}
                                    price={item.price}
                                    rating={item.rating}
                                    stock={item.stock}
                                    thumbnail={item.thumbnail}
                                    title={item.title}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {totalNumberOfPAges>1&&products.length>1?<CustomPagination page={page} setPage={setPage} totalNumberOfPAges={totalNumberOfPAges}/>:""}
            </div>
        </div>
    );
}

export default Products;
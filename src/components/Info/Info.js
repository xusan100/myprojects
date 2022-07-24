import React, {useEffect} from 'react';
import "./info.css";
import {useDispatch, useSelector} from "react-redux";
import {getSingleContent} from "../../redux/actions/simpleActions";
import {useParams} from "react-router-dom";
import Slider from "react-slick";
import Carousel from "../Carousel/Carousel";


function Info(props) {




    const {id} = useParams();


    const dispatch = useDispatch();


    const {singleContent} = useSelector(state => state.simpleReducer)

    useEffect(() => {
        dispatch(getSingleContent(id))
    }, [id])

    return (
        <div className="container mt-4 ">
            <div className="row">
                <div className="col-xl-6 container1">
                    {singleContent.images?<Carousel/>:""}
                </div>
                <div className="col-xl-6">
                    <div className="info-box">
                        <div className="img">
                            <img src={singleContent.thumbnail} alt=""/>
                        </div>
                        <div className="texts">
                            <div className="infos title">
                                {singleContent.title}
                            </div>
                            <div className="infos">
                                {singleContent.description}
                            </div>
                            <div className="infos category">
                                Category: <span>{singleContent.category}</span>
                            </div>
                            <div className="infos">
                                Brand: <span>{singleContent.brand}</span>
                            </div>
                            <div className="infos">
                                Price: <span> $ {singleContent.price}</span>
                            </div>
                            <div className="infos">
                                Rating: <span>{singleContent.rating}</span>
                            </div>
                            <div className="infos">
                                Discount Percentage: <span>{singleContent.discountPercentage}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
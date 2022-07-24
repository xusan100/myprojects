import React, {useRef} from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "./singleContent.css"
import {SelectImg} from "../../redux/actions/simpleActions";
import styled from "tachyons-components";


function SingleContent({
                           id,
                           brand,
                           category,
                           description,
                           discountPercentage,
                           images,
                           price,
                           rating,
                           stock,
                           thumbnail,
                           title
                       }) {

    function imgClick(id) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                dispatch(SelectImg(products[i]))
            }
        }

    }

    const dispatch = useDispatch()


    const {products, selectedImg} = useSelector(state => state.simpleReducer)

    const history = useHistory();

    const colorChanger = useRef();

    function colorChange() {
        setInterval(() => {
            let a = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let c = Math.floor(Math.random() * 256);
            let wordColor = document.getElementsByClassName("info-link");

            for(let i = 0; i < wordColor.length; i++) {
                wordColor[i].style.color = `rgb(${a},${b},${c})`};
        }, 2000)

    }

    colorChange();

    /*    useEffect(()=>{
        },[])*/

    return (
        <>
            <div className="box1">
                <div className="box">
                    <div className="img">
                        <button type="button" className="border-0" data-bs-toggle="modal" data-bs-target="#myModal">
                            <img data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => imgClick(id)}
                                 src={thumbnail} alt=""/>
                        </button>
                        <div className="for-modal">
                            <div className="modal fade" id="myModal">
                                <div className="modal-dialog">
                                    <div className="modal-content">


                                        <div className="modal-body">
                                            <div className="img">
                                                <img src={selectedImg} alt=""/>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                        <span className={`${rating < 4.3 ? "bg-warning rating" : "bg-success rating"}`}>
                        {rating}
                    </span>
                    </div>
                    <div className="texts">
                        <div className="brand-name">
                            {title}
                        </div>
                        <div className="description">
                            {description}
                        </div>
                        <div ref={colorChanger} onClick={() => history.push(`info/${id}`)} className="info-link">
                            LEARN MORE
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleContent;

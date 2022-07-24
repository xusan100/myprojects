import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./header.css"
import {getChangeVal, getSearchVal} from "../../redux/actions/simpleActions";

function Header({page}) {
    const {loading, products, category, selectChangeVal, searchVal} = useSelector(state => state.simpleReducer)

    const dispatch = useDispatch();


    function selectChange() {
        dispatch(getChangeVal(selectVal.current.value, inputVal.current.value, page))
    }

    const inputVal = useRef();
    const selectVal = useRef();


    function SearchInputValue() {
        dispatch(getSearchVal(inputVal.current.value,selectVal.current.value, page))
    }


    return (
        <div className="container pt-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className="for-search">
                    <label htmlFor="search" className="d-flex">
                        <input ref={inputVal}
                               id='search'
                               className="search-input form-control shadow-none border-end-0"
                               placeholder="Search for product"
                               type="text"/>
                        <span onClick={SearchInputValue} className="bg-secondary bg-opacity-50 ">
                            <img src="images/search.svg" alt=""/>
                        </span>

                    </label>
                </div>
                <div className="for-select">
                    <select ref={selectVal} onChange={selectChange} className="form-control shadow-none ">
                        <option value=''>Select</option>
                        {
                            category?.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Header;
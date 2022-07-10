import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getRandom } from "../../actions/actions";
import reducerQuote from '../../reducers/reducers';

export const App = () => {
    let text = ''; 
    let author = ''; 
    const dispatch = useDispatch();
    const response = useSelector(state => {
        if (state.response) {
            text = state.response.data.quotes[0].text;
            author = state.response.data.quotes[0].author;

            return state.response;
        }
        
        return null;
    });

    const handleClick = () => {
        dispatch(getRandom());
    }

    return (
        <div>
            <button onClick={handleClick}>Press to see Random Quote</button>
            <p>{text}</p>
            <p>{author}</p>
        </div>
    )
} 
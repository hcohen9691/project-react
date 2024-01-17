import React from "react";
import { Link } from "react-router-dom";
import {getFormattedDate} from '../common/Utils';

export default function ItemDetailsComponent({ item }) {
    const { Title, Year, Poster, Type, imdbID } = item;
    
    return (
        <div className="page-container pt-4" style={{ backgroundImage: `url("${Poster}")` }}>
            <div className="container">
                <div className="p-l-12 custom-text" style={{ width: 'fit-content' }}>
                    <Link to={'/'}>back</Link>
                </div>
                <div className="d-flex justify-content-center">

                    <ul >
                        <li style={{ listStyle: 'none' }}><h1 className="decoration-line-underline">Details</h1></li>
                        <li className="font-size custom-text">{Title}</li>
                        <li className="font-size custom-text">{getFormattedDate(Year)}</li>
                        {/* <img className="size-image b-r-10" src={Poster} alt="poster" /> */}
                        <li className="font-size custom-text">{Type}</li>
                        <li className="font-size custom-text">{imdbID}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import FieldComponent from "../common/FieldComponent";
import {getFormattedDate} from '../common/Utils';

export default function DetailsComponent({ item, setItem, setDataResponse,
    data, dataResponse, updateResponse, isGridView }) {
        
    const { Title, Year, Poster, imdbID } = item;
    const [isEditTitle, setIsEditTitle] = useState(false);
    const [editedText, setEditedText] = useState('');

    const editTitle = (value) => {
        setIsEditTitle(false)
        const editJson = dataResponse.map(item => {
            if (imdbID === item.imdbID) {
                item.Title = value
            }
            return item
        });
        setDataResponse(editJson);
        updateResponse(editJson);
        setEditedText('');
    }

    const setTitle = () => {
        setIsEditTitle(true)
        setEditedText(Title)
    }

    return (
        <div className={`${isGridView ? 'card' : ''} flex-row col-10 d-flex p-border`}>
            <Link to='/details' ><div className="size-image" onClick={() => setItem(item)}>
                {Poster !== "N/A" ? <img className="w-100 h-100 b-r-10" src={Poster} alt="poster" /> :
                    <div className="w-100 h-100 b-r-10"></div>}
            </div></Link>
            <div className="p-l-12 title-year">
                {!isEditTitle ? <div onClick={setTitle} className="border border-primary b-r-10 ">{Title}</div>
                    : <FieldComponent
                        onBlur={editTitle}
                        value={editedText}
                        onChange={setEditedText}
                    />
                }
                <div className="border border-primary b-r-10 mt-1">{getFormattedDate(Year)}</div>
            </div>
        </div>
    )

}
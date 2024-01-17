import React, { useState, useEffect } from "react";
import ButtonComponent from "../common/ButtonComponent";
import DetailsComponent from "./DetailsComponent";
import Header from "./Header";
import {getFormattedDate} from '../common/Utils';

export default function MainComponent({ dataResponse, setDataResponse, fetchData,
    setItem, updateResponse }) {
    const [typeCounts, setTypeCounts] = useState({});
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [type, setType] = useState('');
    const [isSortReverse, setIsSortReverse] = useState(false);
    const [isGridView, setIsGridView] = useState(true);

    const sortReverse = () => {
        setIsSortReverse(!isSortReverse);
        const dataSorted = data.reverse();
        setData([...dataSorted]);
    }

    const toggleView = () => {
        setIsGridView(!isGridView);
    };

    useEffect(() => {
        searchTextInput();
    }, [searchText]);

    const searchTextInput = () => {
        setData(dataResponse);
        const search = dataResponse.filter(item =>
            item.Title.includes(searchText) || getFormattedDate(item.Year).includes(searchText)
        );
        if (type !== '') {
            const filterSearch = search.filter(item => item.Type === type);
            const sortFilterSearch = [...filterSearch].sort((a, b) => isSortReverse ? b.Title.localeCompare(a.Title): a.Title.localeCompare(b.Title))
            setData(sortFilterSearch);
        }
        else {
            setData(search);
        }
    }


    useEffect(() => {
        if (dataResponse) {
            setSearchText(searchText)
            setData([...dataResponse].sort((a, b) => a.Title.localeCompare(b.Title)));
            setType(type)
            countTypes();
        }
    }, [dataResponse]);

    useEffect(() => {
        searchTextInput()
    }, [type]);

    const countTypes = () => {
        const typeCounts1 = {};
        dataResponse.forEach(item => {
            const type = item.Type;
            typeCounts1[type] = (typeCounts1[type] || 0) + 1;
        });
        setTypeCounts(typeCounts1);
    };


    return (
        <div style={{ backgroundColor: 'aliceblue', minHeight: '100vh' }}>
            <div className="d-flex">
                <div className="col-3 d-flex flex-column p-types">
                    {
                        <div className="my-3 borderCount border border-primary align-items-center d-flex flex-column">
                            {Object.keys(typeCounts).map((key) => <div key={key} onClick={() => setType(key)}>
                                {key}: ({typeCounts[key]})
                            </div>)}
                        </div>}
                    <ButtonComponent
                        textButton={'change view'}
                        clickButton={toggleView}
                    />
                </div>
                <div className="col-9">
                <div className="col-10">
                <Header
                    fetchData={fetchData}
                    setSearchText={setSearchText}
                    searchText={searchText}
                    setType={setType}
                    sortReverse={sortReverse}
                />
            </div>
                    <ul style={{ listStyleType: isGridView ? 'none' : 'disc' }}>
                        {data.map((key) =>
                            <li key={`cat-${key}`} className="p-b-15">
                                <DetailsComponent
                                    item={key}
                                    setItem={setItem}
                                    setDataResponse={setDataResponse}
                                    data={data}
                                    dataResponse={dataResponse}
                                    updateResponse={updateResponse}
                                    isGridView={isGridView}
                                />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )

}
import React from "react"
import ButtonComponent from "../common/ButtonComponent"
import FieldComponent from "../common/FieldComponent"

export default function Header({ fetchData, setSearchText,
     searchText, setType, sortReverse }) {

    const handleButtonClick = async() => {
        setType('');
        await fetchData();
        setSearchText('')
      };

    return (
        <div className="" style={{paddingLeft: '2rem'}}>
            <div className="header">
            <FieldComponent
                onChange={setSearchText}
                value={searchText}
            />
            <ButtonComponent
                textButton={'clear'}
                clickButton={setSearchText}
            />
            <ButtonComponent
                textButton={'refresh'}
                fetchData={fetchData}
                setType={setType}
                clickButton={handleButtonClick}
            />
            <ButtonComponent
                textButton={'sort'}
                clickButton={sortReverse}
            />
        </div>
        </div>
        
    )
}

import React from "react";
import SearchBar from 'material-ui-search-bar'
import {SearchList} from "./SearchList";


export const SearchPage: React.FC<any> = () => {
    return (
        <>
            <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
                style={{
                    margin: '0 auto',
                    maxWidth: 800
                }}
            />
            <SearchList/>
        </>
    )
}

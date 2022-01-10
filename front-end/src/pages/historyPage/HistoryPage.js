import React from 'react';
import { useSelector } from 'react-redux';

import './HistoryPage.css'

const HistoryPage = () => {

    const {lastCalculateArray} = useSelector(state => state.Calculator);

    return (
        <div role="list" className="ui celled ordered list">
           { lastCalculateArray.map((char, index) => <div key={index} role="listitem" className="item list-item">{char}</div>)}
        </div>
    )
}

export default HistoryPage;
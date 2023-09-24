import React from 'react';
import {BookContext} from '../../contexts';
import ScanGo from './ScanGo';

const WorldPage = ({ navigation,route }) => {

    return (
        <BookContext.Provider value={{ navigation,route }}>
            <ScanGo />
        </BookContext.Provider>
    )
}

export default WorldPage;
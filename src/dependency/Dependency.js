import React, { useState, useEffect } from 'react';
import InputItems from '../components/inputitems/InputItems';

const Dependency = () => {
    const [incomeSources, setIncomeSources] = useState([]);
    useEffect(() => {
        fetch('https://ab267729-fb9d-4b1a-88d1-19b88ca7979a.mock.pstmn.io/getTransactionList')
            .then((response) => response.json())
            .then((response) => {
                console.log('This is success', response);
                setIncomeSources(response);
            })
            .catch((error) => {
                console.log('This is Error', error);
            })
    }, []);
    return (
        <div>
            {incomeSources && incomeSources.length > 0 && incomeSources.map((item) => {
                return <InputItems {...item} />
            })}
        </div>
    );
}
export default Dependency;
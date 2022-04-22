import { useEffect, useState } from 'react';
const Dependency1 = () => {
    const [value, setValue] = useState([]);
    useEffect(() => {
        fetch('https://ab267729-fb9d-4b1a-88d1-19b88ca7979a.mock.pstmn.io/getTransactionList',
            .then((res) => {
            console.log('this is  something', res);
        })

    }, []);
    return (
        <div>

        </div>
    );
}
export default Dependency1;

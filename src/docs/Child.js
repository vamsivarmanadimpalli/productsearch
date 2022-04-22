const Child = (props) => {
    function update(e, key) {
        <span style={{ color: 'red' }}> {key}</span >
        console.log(e, key);
    }
    return (
        <div>

            {
                props.names.map((item, index) => {
                    return (<li><button onClick={() => { update(item, index) }}>{item}</button> </li>)
                })
            }
        </div>

    );
}
export default Child;
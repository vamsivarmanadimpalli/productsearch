const InputItems = ({ categories, type, amount, date, interval, description }) => {
    return (
        <div>


            <td><label>{categories}</label></td>
            <td><label>{type}</label></td>
            <td><label>{amount}</label></td>
            <td><label>{date}</label></td>
            <td><label>{interval}</label></td>
            <td><label>{description}</label></td>


        </div >
    )
};
export default InputItems;
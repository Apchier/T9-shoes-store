/* eslint-disable react/prop-types */
const FilterUpload = ({name , id }) => {
    const option = [
        {
            value : "Last 7 Days",
            description : "Last 7 Days"
        },
        {
            value : "Last 14 Days",
            description : "Last 14 Days"
        },
        {
            value : "Last 30 Days",
            description : "Last 30 Days"
        }
    ]
    return (
        <select name={name} id={id} className="outline-none p-1 bg-transparent border-2 border-white rounded-lg">
            {option.map((options, index) => (
                <option key={index} value={options.value}>{options.description}</option>
            ))}
        </select>
    )
}


export default FilterUpload
import "./ShowSearch.css";

export default function ShowSearch({ setSearchTerm, searchTerm }) {
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="search-div">
            <label>Enter Search: </label>
            <input
                className="search"
                placeholder="Search"
                onChange={handleChange}
                value={searchTerm}
            />
        </div>
    );
}

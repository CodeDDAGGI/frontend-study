import "./style.css"

function Main_Search() {
    return (
        <div className="container">
            <div className="search-continer" >
                <div className="search">
                    <div className="search-element">
                            <input className="search-area" type="text"  />
                            <input className="search-date" type="text"  />
                            <input className="search-Personnel" type="text"  />
                            <button className="search-button"></button>    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main_Search;

import "./style.css";

const Dictionary = ({ dictStatus }) => {
  return (
    <>
      {dictStatus && (
        <div className="dictionary">
            {/* search bar */}
            <div className="search-bar">
                <input type="text" placeholder="Search for a word" />
                <button>Search</button>
            </div>

            <div className="text">
          <h2 className="dialog-box">Dictionary</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Dictionary;

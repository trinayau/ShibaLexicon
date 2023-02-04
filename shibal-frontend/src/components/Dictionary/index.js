import { useState } from "react";
import "./style.css";

const Dictionary = ({ dictStatus }) => {

    const [keyword, setKeyword] = useState("");

    const search = (e) => {
        e.preventDefault();
        console.log("searching", keyword);
    }

    const handleKeywordChange = (e) => {
        setKeyword(e.target.value);
    }

  return (
    <>
      {dictStatus && (
        <div className="dictionary">
            {/* search bar */}
            <div className="search-bar">
                <form onSubmit={search}>
                <input type="text" autoFocus={true} value={keyword} onChange={handleKeywordChange} placeholder="Search for a word" required />
                <button>Search</button>
                </form>
            </div>

            <div className="text">
          <h2 className="dialog-box">ShibaLexicon</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Dictionary;

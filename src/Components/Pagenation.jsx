import React from "react";
import "./Style.css"

const Pagenation = ({ totalPages, handlePage, currentpage }) => {
  let page = new Array(totalPages).fill(0).map((ele, i) => {
    return (
    <>
      <button className="btns"
        key={i}
        disabled={currentpage === i + 1}
        onClick={() => handlePage(i + 1)}
      >
        {i + 1}
      </button>
    </>
    );
  });
  return (
    <div className="btn2">
      {page}
    </div>
  );
};

export default Pagenation;

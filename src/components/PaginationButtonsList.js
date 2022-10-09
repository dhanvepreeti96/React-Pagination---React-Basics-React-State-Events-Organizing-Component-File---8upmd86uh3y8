import React, { useState } from "react";

const buttonArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const PaginationButtonsList = (props) => {
  const [pageNum, setPageNum] = useState(1);
  props.onClick(pageNum);
  const button = buttonArray.map((btn) => (
    <button
      className={btn == pageNum ? "active-btn" : ""}
      key={`${btn}`}
      onClick={() => {
        setPageNum(`${btn}`);
      }}
      id={`button-${btn}`}
    >{`${btn}`}</button>
  ));
  return <div className="pagination-buttons-list">{button}</div>;
};

export { PaginationButtonsList };

import React, { useEffect } from "react";
import "./product.css";
import axios from "axios";
import { useState } from "react";
export const Pagination = ({ setProducts, fulllength }) => {
  const [page, setPage] = useState(1);

  const handleChange = (value) => {
    setPage(page + value);
  };
  console.log(page);
  const data = async () => {
    try {
      let res = await axios.get(
        `https://tackle-and-trail.onrender.com/camping?_page=${page}&_limit=9`
      );
      setProducts(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    data();
  }, [page]);
  return (
    <div>
      <div className="pagination">
        <button
          disabled={page == 1}
          className="button"
          onClick={() => handleChange(-1)}
        >
          Prev
        </button>
        <button className="button">{page}</button>
        <button
          disabled={page === Math.ceil(fulllength.length / 9)}
          className="button"
          onClick={() => handleChange(1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};



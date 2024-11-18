import React, { useEffect, useState } from "react";
import "./infinitescroll.css";

const InfiniteScroll = () => {
  //state to manage api Data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  //asyn function
  const fetchData = async () => {
    setLoading(true);
    try { 
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?page=${page}`);
      const data = await response.json();
      setData(data);
      setData((prevData) => [...prevData, ...data]);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight -5 && !loading) {
      setLoading(true);
      setPage((prevPage) => prevPage + 1);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="landing">
      <h2>Infinite Scroll in JS</h2>
      <div className="scroll-container">
        <div>
          {data && data.length
            ? data.map((item, index) => {
                return (
                  <div key={index}>
                    <h3 className="heading">Title: {item.title}</h3>
                  </div>
                );
              })
            : null}
          {loading && <p>Loading in Progress! Please wait...</p>}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;

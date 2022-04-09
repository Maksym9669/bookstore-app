import React, { useState, useEffect } from "react";
import TextContent from "../components/TextContent";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";

import { save } from "../redux/locationSlice";
import { increment, decrement, incrementByAmount } from "../redux/counterSlice";
import {
  increment2,
  decrement2,
  incrementByAmount2,
  fetchBooksTest,
  fetchBooks,
} from "../redux/apiSlice";

import { selectLocation } from "../redux/locationSlice";
import { selectCounter } from "../redux/counterSlice";
import { selectCounter2 } from "../redux/apiSlice";

function Home(props) {
  const [locationName, setLocationName] = useState("");
  const dispatch = useDispatch();
  const { location } = useSelector(selectLocation);
  const { counter } = useSelector(selectCounter);
  const books = useSelector((state) => state.api.books);

  const handleData = (e) => {
    setLocationName(e.target.value);
  };

  const handleSave = () => {
    const ifPrestent = location.includes(locationName);
    if (locationName !== undefined && !ifPrestent) {
      dispatch(save(locationName));
      setLocationName("");
    } else {
      setLocationName("");
    }
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div>
      <Header />
      <TextContent />
      {/* <input
        onChange={handleData}
        value={locationName}
        label="Enter location name"
      />
      <button
        style={{ margin: "10px" }}
        variant="contained"
        color="primary"
        onClick={handleSave}
      >
        add
      </button>
      <h3> List of locations </h3>
      <ul>
        {location.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <p>Value: {counter}</p> */}

      <p>Books:</p>
      {books ? books.map((book) => <li>{book}</li>) : null}
    </div>
  );
}

export default Home;

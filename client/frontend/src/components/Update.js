import React from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateToggle } from "../redux/apiSlice";

const Update = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        style={props.style}
        onClick={() => dispatch(updateToggle(props.id))}
      >
        Edit
      </Button>
    </div>
  );
};

export default Update;

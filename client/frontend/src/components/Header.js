import React from "react";
import { Button } from "antd";

function Header(props) {
  return (
    <div className="App-header">
      <header className="header-text">Library</header>
      <img
        alt="library_image"
        width={400}
        src="https://cdnuploads.aa.com.tr/uploads/Contents/2020/02/19/thumbs_b_c_5b0f5fae30f09e6fb515cd287f8449f3.jpg"
      />
      <Button
        type="primary"
        className="header-button"
        style={{ margin: "10px" }}
      >
        Go to Library
      </Button>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import { Row, Col } from "antd";
import { Image } from "antd";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../redux/apiSlice";

import Update from "./Update";
import Read from "./Read";

function BooksList(props) {
  const dispatch = useDispatch();

  const elementStyle = { margin: "10px", padding: "2px 5px" };

  const currentBooks = useSelector((state) => state.api.books);

  return (
    <ul>
      {currentBooks.map((elem) => (
        <div className="row-elem">
          <Row key={elem.id}>
            <Col span={12} style={{ display: "flex", alignItems: "center" }}>
              <Image
                width={100}
                style={elementStyle}
                src={
                  elem.imageUrl
                    ? `http://localhost:8050/public/files/${elem.imageUrl}`
                    : "https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg"
                }
              />
              <p style={elementStyle}>{elem.title}</p>
            </Col>
            <Row span={12} style={{ display: "flex", alignItems: "center" }}>
              <Update id={elem.id} style={elementStyle}></Update>
              <Read id={elem.id} style={elementStyle}></Read>
              <Button
                style={elementStyle}
                onClick={() => dispatch(deleteBook(elem.id))}
              >
                Delete
              </Button>
            </Row>
          </Row>
        </div>
      ))}
    </ul>
  );
}

export default BooksList;

// export default class BooksList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   deleteElement(id) {
//     axios
//       .delete(`http://localhost:8050/superheroes/delete/${id}`)
//       .then((res) => {
//         console.log(res.data);
//         this.props.updateData();
//       });
//   }

//   render() {
//     const elementStyle = { margin: "10px", padding: "2px 5px" };
//     const indexOfLastSuperhero =
//       this.props.currentPage * this.props.superheroesPerPage;
//     const indexOfFirstSuperhero =
//       indexOfLastSuperhero - this.props.superheroesPerPage;
//     const currentSuperheroes = this.props.superheroes.slice(
//       indexOfFirstSuperhero,
//       indexOfLastSuperhero
//     );

//     return (
//       <ul>
//         {currentSuperheroes.map((elem) => (
//           <div className="row-elem">
//             <Row key={elem.id}>
//               <Col span={12} style={{ display: "flex", alignItems: "center" }}>
//                 <Image
//                   width={100}
//                   style={elementStyle}
//                   src={
//                     elem.imageUrl
//                       ? `http://localhost:8050/public/${elem.imageUrl}`
//                       : "https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg"
//                   }
//                 />
//                 <p style={elementStyle}>{elem.nickname}</p>
//               </Col>
//               <Row span={12} style={{ display: "flex", alignItems: "center" }}>
//                 <Update id={elem.id} style={elementStyle}></Update>
//                 <Read id={elem.id} style={elementStyle}></Read>
//                 <Button
//                   style={elementStyle}
//                   onClick={() => this.deleteElement(elem.id)}
//                 >
//                   Delete
//                 </Button>
//               </Row>
//             </Row>
//           </div>
//         ))}
//       </ul>
//     );
//   }
// }

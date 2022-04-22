import React from "react";
import Item from "./item";

function List(props) {
  return (
    <div className="list">
      {props.items.map((item) => (
        <Item key={item.id} id={item.id} title={item.title} />
      ))}
    </div>
  );
}

export default List;

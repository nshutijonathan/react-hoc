import React, { useContext } from "react";
import UserContext from "./userContext";
import CartContext from "./cartContext";
function MovieRow(props) {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  console.log("cartContext", cartContext);
  console.log("userContext", userContext);
  return (
    <div>
      Movie Row{userContext.currentUser ? userContext.currentUser.name : ""}
    </div>
  );
}

export default MovieRow;

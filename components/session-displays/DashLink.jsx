import React from "react";
import Link from "next/link";

function DashLink(props) {
  const isCurrentPage = props.CurrentPage === props.pageName;
  const [buttonState, changeButtonState] = React.useState(false);

  function mouseOut() {
    changeButtonState(false);
  }

  function mouseOver() {
    changeButtonState(true);
  }

  return (
    <Link
      href={{
        pathname: props.hyperLink,
        query: { sessionID: props.sessionID, currentPage: props.CurrentPage, currentIndex: props.currentIndex },
      }}
    >
      <a
        href="/pages#"
        style={
          isCurrentPage
            ? {
                backgroundColor: "#850000",
                color: "white",
              }
            : {
                backgroundColor: buttonState ? "#850000" : "#f5f5f5",
                color: buttonState ? "white" : "black",
              }
        }
        onMouseOut={mouseOut}
        onMouseOver={mouseOver}
        className="button"
        alt="state button"
      >
        {props.pageName}
      </a>
    </Link>
  );
}

export default DashLink;

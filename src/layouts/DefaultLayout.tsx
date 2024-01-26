import React, { useState, useRef, useEffect } from "react";
import Login from "pages/Login";
import TopBar from "components/TopBar";
import TwoColLayout from "layouts/TwoColumnLayout";

const DefaultLayout = () => {
  const user = { loggedIn: false };
  const myElementRef = useRef(null);
  const [elementHeight, setElementHeight] = useState(0);

  useEffect(() => {
    console.log("🚀 ~ App ~ myElementRef:", myElementRef);
    if (myElementRef.current) {
      // Get the height of the element
      const height = myElementRef.current.clientHeight;
      setElementHeight(height);
    }
  }, [myElementRef]);
  return (
    <div>
      {!user.loggedIn ? (
        <Login />
      ) : (
        <>
          <TopBar ref={myElementRef} />
          <TwoColLayout siblingHeight={elementHeight} />
        </>
      )}
    </div>
  );
};

export default DefaultLayout;

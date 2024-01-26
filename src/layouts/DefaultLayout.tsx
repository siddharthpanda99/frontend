import React, { useState, useRef, useEffect } from "react";
import Login from "pages/Login";
import { useUserContext } from "hooks/useUserContext";
import TwoColLayout from "layouts/TwoColumnLayout";
import TopBar from "components/TopBar";

const DefaultLayout = () => {
  const { user } = useUserContext();
  const myElementRef = useRef(null);
  const [elementHeight, setElementHeight] = useState(0);

  useEffect(() => {
    if (myElementRef.current) {
      // Get the height of the element
      const height = myElementRef.current.clientHeight;
      setElementHeight(height);
    }
  }, [myElementRef]);
  return (
    <div>
      <TopBar ref={myElementRef} />
      {!user.loggedIn ? (
        <Login />
      ) : (
        <>
          <TwoColLayout siblingHeight={elementHeight} />
        </>
      )}
    </div>
  );
};

export default DefaultLayout;

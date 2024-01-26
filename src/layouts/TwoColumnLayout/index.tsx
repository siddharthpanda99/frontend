import React from 'react'
import RouterComponent from 'app/routes';

const TwoColLayout = ({ siblingHeight }) => {
  console.log("🚀 ~ TwoColLayout ~ siblingHeight:", siblingHeight)
  const styles = {
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      width: "100vw",
      justifyContent: 'center'
      // border: '1px solid red'
    },
  };
  return (
    <div style={{ ...styles.flexContainer, height: `calc(100vh - ${siblingHeight}px)` }}>
      <div
        style={{
          ...styles.flexContainer,
          maxWidth: "20%",
          borderRight: "1px solid red",
        }}
      >
        Hi
      </div>
      <div style={{ ...styles.flexContainer, maxWidth: "80%" }}>
        <RouterComponent />
      </div>
    </div>
  );
};

export default TwoColLayout;
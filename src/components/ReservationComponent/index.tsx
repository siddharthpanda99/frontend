import React from "react";

const HotelReservation = () => {
  const styles = {
    container: {
      maxWidth: 1100,
      width: 900,
      padding: 0,
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "5px",
      boxShadow: "0 5px 25px rgba(0,0,0,0.4)",
    },
    leftSide: {
      height: "500px",
      flexBasis: "50%",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderTopLeftRadius: "5px",
      borderBottomLeftRadius: "5px",
    },
    rightSide: {
      flex: 2,
      textAlign: "left",
      padding: "0 5rem 0 2rem",
      color: "#fff",
      margin: 0,
    },
    h2: { fontSize: "1.75rem" },
    h3: { fontSize: "1.2rem", fontWeight: 600 },
    spacer: { marginTop: 30, marginBottom: 30 },
  };
  return (
    <div style={styles.container}>
      <div style={styles.leftSide}>
        <img
          style={styles.img}
          src="https://i.ibb.co/DzZyM1v/hotel.jpg"
          alt=""
        />
      </div>
      <div style={styles.rightSide}>
        <h2 style={styles.h2}>Massa Dictumst Hotel</h2>
        <h4 style={{ opacity: 0.8 }}>Glasgow, MT 59230</h4>
        <ul style={styles.spacer}>
          <li style={styles.spacer}>
            <p>Arrival</p>
            <h3 style={styles.h3}>Mar 11 2020 at 14:00</h3>
          </li>
          <li style={styles.spacer}>
            <p>Departure</p>
            <h3 style={styles.h3}>Mar 21 2020 at 14:00</h3>
          </li>
          <li style={styles.spacer}>
            <p>Includes</p>
            <h3 style={styles.h3}>Breakfast, Spa</h3>
          </li>
        </ul>
        <button className="btn">Confirm Reservation</button>
      </div>
    </div>
  );
};

export default HotelReservation;

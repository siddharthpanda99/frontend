import React from "react";

// *{
//     box-sizing: border-box;
// }

// body{
//     min-height: 100vh;
//     margin: 0;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-family: 'Lato',sans-serif;
//     overflow-x: hidden;
//     background: url('https://i.ibb.co/DzZyM1v/hotel.jpg');
//     background-position: center center;
//     background-size: cover;
//     background-repeat: no-repeat;
//     backdrop-filter: blur(12px);
// }

//     .left-side{

//         height: 500px;
//         flex: 3;

//         img{
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//             border-top-left-radius: 5px;
//             border-bottom-left-radius: 5px;
//         }
//     }

//     .right-side{
//         flex: 2;
//         text-align: left;
//         padding: 0 5rem 0 2rem;
//         color: #fff;
//         margin: 0;

//         h4{
//             opacity: 0.5;
//             margin: -0.8rem 0 1.2rem 0;
//         }

//         ul{
//             margin-top: 3rem;
//             padding: 0;
//             list-style: none;

//             li{

//                 margin: 2.5rem 0;

//                 p{
//                     opacity: 0.5;
//                 }

//                 h3{
//                     margin: -0.5rem 0;
//                 }
//             }
//         }

//         .btn{
//             border: none;
//             outline: none;
//             background-color: #301D19;
//             color: #fff;
//             padding: 1rem;
//             width: 100%;
//             font-size: 1rem;
//             border-radius: 1rem;
//             margin-top: 1rem;
//             cursor: pointer;

//             &:hover{
//                 background-color: #f3f3f3;
//                 color: #3E2622;
//                 transition: 0.4s ease all;
//             }
//         }
//     }
// }

// @media(max-width: 800px){

//     body{
//         padding: 5rem 0;
//     }

//     .container{
//         width: 575px;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         background-color: #3E2622;

//         .left-side{

//             height: 450px;
//             flex: 3;

//             img{
//                 width: 100%;
//                 height: 100%;
//                 object-fit: cover;
//                 border-top-left-radius: 5px;
//                 border-top-right-radius: 5px;
//             }
//         }

//         .right-side{
//             flex: 3;
//             text-align: center;
//             color: #fff;

//             ul{
//                 margin-top: 3rem;
//                 list-style: none;
//             }

//             .btn{
//                 margin: 1.5rem 0;
//             }
//         }
//     }
// }

// @media(max-width: 550px){

//     .container{
//         width: 425px;
//     }
// }

// @media(max-width: 400px){

//     .container{
//         width: 100%;
//     }
// }

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

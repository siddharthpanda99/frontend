import React, {useState, useEffect} from "react";
import { useHotelContext } from "app/hooks/useHotelContext";import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Box } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useUserContext } from "app/hooks/useUserContext";

const styles = {
  container: {
    maxWidth: 1100,
    width: 900,
    padding: 0,
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#333",
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

const HotelReservation = () => {
  const { hotel } = useHotelContext();
  const { user } = useUserContext();

  const { id, name, location } = hotel;
  console.log("🚀 ~ HotelReservation ~ hotel:", hotel)
  const {email} = user;
  const [dateRange, setDateRange] = React.useState<DateRange<Dayjs>>([
    dayjs(Date.now()),
    dayjs(Date.now()),
  ]);

  const [bookingInfo, setBookingInfo] = useState({
    hotel_id: id,
    check_in_date: dateRange[0].toString(),
    check_out_date: dateRange[1].toString(),
    room_id: 0,
    total_amount: 0,
    user_email: email
  });

  useEffect(() => {
    console.log("🚀 ~ HotelReservation ~ bookingInfo:", bookingInfo)
  }, [bookingInfo]);
  

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
        <h2 style={styles.h2}>{name}</h2>
        <h4 style={{ opacity: 0.8 }}>{location}</h4>
        <Box sx={{ marginTop: 3, background: "#fff" }}>
          <DateRangePicker
            value={dateRange}
            onChange={(newDateRange) => setDateRange(newDateRange)}
            localeText={{ start: "Check-in", end: "Check-out" }}
          />
        </Box>
        <ul style={styles.spacer}>
          <li style={styles.spacer}>
            <p>Arrival</p>
            <h3 style={styles.h3}>{dateRange[0].$d.toString()}</h3>
          </li>
          <li style={styles.spacer}>
            <p>Departure</p>
            <h3 style={styles.h3}>{dateRange[1].$d.toString()}</h3>
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

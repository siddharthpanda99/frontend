import React, {useEffect, useState} from 'react'
import { useUserContext } from 'app/hooks/useUserContext'
import { baseUrl } from 'app/constants';
import { useQuery } from 'react-query';

const BookingsList = () => {
  const { user } = useUserContext();
  const { email } = user;

  const [bookingData, setBookingData] = useState([]);

  // Fetcher function
  const getBookingsForUser = async () => {
    const res = await fetch(
      `${baseUrl}/bookings/user?email=${email}`
    );
    return res.json();
  };
  // Using the hook
  const { data, error, isLoading } = useQuery("bookingsByUserEmail", getBookingsForUser);

  useEffect(() => {
    setBookingData(data?.data);
  }, [data?.data]);

  return (
    <div>
      <h1>Bookings</h1>
      {bookingData?.map((booking) => (
        <li>{JSON.stringify(booking)}</li>
      ))}
    </div>
  );
}

export default BookingsList
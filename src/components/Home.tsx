import React, {useEffect, useState} from 'react'
import useGet from 'app/hooks/services/useGet';

const Home = () => {
  const { getData, data, error, loading } = useGet("/hotels");
  const [hotels, setHotels] = useState([]);
  
  useEffect(() => {
    console.log("🚀 ~ Home ~ hotels:", data)
    setHotels(data?.data);
  }, [data])
  

  useEffect(() => {
    // console.log('Getting user data')
      getData();
  }, []);

  return (
    <div><ul>
      {hotels.map((hotel) => (
        <li key={hotel?.id}>{hotel?.name}</li>
      ))}
      </ul></div>
  )
}

export default Home
import React, { useEffect, useState } from "react";
import useGet from "app/hooks/services/useGet";
import HotelCard from "../components/CardComponent";
import { Hotel } from "app/types/Hotel";

const Home = () => {
  const { getData, data, error, loading } = useGet("/hotels");
  // console.log("🚀 ~ Home ~ data, error, loading:", data, error, loading)
  const [hotels, setHotels] = useState<Hotel[] | undefined>([]);

  useEffect(() => {
    setHotels(data?.data);
  }, [data]);

  useEffect(() => {
    console.log("Getting user data");
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="overflow-y-scroll">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
        {hotels?.length ? (
          hotels?.map((hotel) => <HotelCard info={hotel} key={hotel?.id} />)
        ) : (
          <h4>Hotels list not found</h4>
        )}
      </div>
    </div>
  );
};

export default Home;

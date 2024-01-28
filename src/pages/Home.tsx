import React, { useEffect, useState } from "react";
import useGet from "app/hooks/services/useGet";
import HotelCard from "../components/CardComponent";
import { Hotel } from "app/types/Hotel";
import SearchSortFilter from "app/components/SearchFilterSort";

const Home = () => {
  const {
    getData,
    data = { data: [] as Hotel[], message: "" },
    error,
    loading,
  } = useGet("/hotels");
  // console.log("🚀 ~ Home ~ data, error, loading:", data, error, loading)
  const [hotels, setHotels] = useState<Hotel[] | undefined>([]);
  const [filteredHotels, setFilteredHotels] = useState<Hotel[] | undefined>([]);

  useEffect(() => {
    if (data && data.data) {
    setHotels(data?.data);
    setFilteredHotels(data?.data);
    }
  }, [data]);

  useEffect(() => {
    console.log("Getting user data");
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResultsChange = (filteredAndSortedHotels: Hotel[]) => {
    setFilteredHotels(filteredAndSortedHotels);
  };

  return (
    <div className="overflow-y-scroll">
      {loading ? <h5>Loading data...</h5> : ""}
      {hotels ? (
        <>
          <SearchSortFilter
            hotels={hotels}
            filteredHotels={filteredHotels}
            onResultsChange={handleResultsChange}
          />
          {filteredHotels?.length ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
                {filteredHotels?.map((hotel) => (
                  <HotelCard info={hotel} key={hotel?.id} />
                ))}
              </div>
            </>
          ) : (
            <h4>Hotels matching your criteria not found</h4>
          )}
        </>
      ) : (
        <p>
          Please check if you have any data or your server or if you have any
          errors
        </p>
      )}
      {error ? <h5>You ran into some error: {error}</h5> : ""}
    </div>
  );
};

export default Home;

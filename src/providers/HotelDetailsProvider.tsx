import { useState, ReactNode } from "react";
import { HotelContext } from "app/contexts/HotelDetailsContext";
import { HotelState } from "app/types/HotelState";

type HotelDetailsProviderProps = {
  children: ReactNode;
};


const HotelDetailsProvider = ({ children }: HotelDetailsProviderProps) => {
  const [hotel, setHotel] = useState<HotelState>({
    id: 0,
    location: "",
    name: "",
    price: 0,
    rating: 0,
    rooms: [],
    selectedRoom: 0
  });

  const updateHotel = (key: string, value: any) => {
    setHotel({
      ...hotel, // Copy the old fields
      [key]: value, // But override this one
    });
  };

  return (
    <HotelContext.Provider value={{ hotel, setHotel, updateHotel }}>
      {children}
    </HotelContext.Provider>
  );
};

export default HotelDetailsProvider;

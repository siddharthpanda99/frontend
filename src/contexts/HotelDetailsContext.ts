import { createContext } from "react";
import { HotelContextInterface } from "app/interfaces/HotelContext.interface";
import { Hotel } from "app/types/Hotel";

// export const HotelContext = createContext<Partial<HotelContextInterface>>({});
const initialState = {
    hotel: {
        id: 0,
        name: '',
        location: '',
        rating: 0,
        price: 0,
        rooms: [],
    },
    setHotel: (hotel: Hotel) => { },
    updateHotel: (key: string, value: any) => {},
} as HotelContextInterface;

export const HotelContext = createContext<HotelContextInterface>(initialState);
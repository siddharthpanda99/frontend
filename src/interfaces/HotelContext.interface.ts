import { Dispatch, SetStateAction } from "react";
import { HotelState } from "app/types/HotelState";

export interface HotelContextInterface {
    hotel: HotelState,
    setHotel: Dispatch<SetStateAction<HotelState>>,
    updateHotel: (key: string, value: any) => void,
    // loggedIn: boolean,
    // setLoggedIn: Dispatch<SetStateAction<boolean>>,
}
import { useContext } from "react"
import { HotelContext } from "contexts/HotelDetailsContext";

export const useHotelContext = () => {
    const context = useContext(HotelContext);
    if (!context) {
        throw new Error("useHotelContext must be used within a HotelDetailsProvider")
    }
    return context;
}
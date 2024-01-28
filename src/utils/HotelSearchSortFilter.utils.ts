import { Hotel } from "app/types/Hotel";
import { FilterOptions } from "app/interfaces/SearchSortFilter.interface";

export const searchHotels = (hotels: Hotel[], term: string): Hotel[] => {
    const lowerCaseTerm = term.toLowerCase();
    return hotels.filter((hotel) =>
        hotel.name.toLowerCase().includes(lowerCaseTerm) ||
        hotel.location.toLowerCase().includes(lowerCaseTerm)
    );
};


export const filterHotels = (hotels: Hotel[], options: FilterOptions): Hotel[] => {
    return hotels.filter((hotel) => {
        return (
            (!options.location ||
                hotel.location.toLowerCase() === options.location.toLowerCase()) &&
            (!options.price || hotel.price <= options.price) &&
            (!options.rating || hotel.rating >= options.rating)
        );
    });
};

export const sortHotels = (hotels: Hotel[], sortBy: keyof Hotel, order: "asc" | "desc"): Hotel[] => {
    return [...hotels].sort((a, b) => {
        if (order === "asc") {
            return a[sortBy] - b[sortBy];
        } else {
            return b[sortBy] - a[sortBy];
        }
    });
};
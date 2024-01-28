import { Hotel } from "app/types/Hotel";

export const searchHotels = (hotels, term: string): Hotel[] => {
    const lowerCaseTerm = term.toLowerCase();
    return hotels.filter((hotel) =>
        hotel.name.toLowerCase().includes(lowerCaseTerm) ||
        hotel.location.toLowerCase().includes(lowerCaseTerm)
    );
};


export const filterHotels = (hotels, options: FilterOptions): Hotel[] => {
    return hotels.filter((hotel) => {
        return (
            (!options.location ||
                hotel.location.toLowerCase() === options.location.toLowerCase()) &&
            (!options.price || hotel.price <= options.price) &&
            (!options.rating || hotel.rating >= options.rating)
        );
    });
};

export const sortHotels = (hotels, sortBy: keyof Hotel, order: "asc" | "desc"): Hotel[] => {
    return [...hotels].sort((a, b) => {
        if (order === "asc") {
            return a[sortBy] - b[sortBy];
        } else {
            return b[sortBy] - a[sortBy];
        }
    });
};

// export const searchHotels = (term: string, hotels: Hotel[]): Hotel[] => {
//     const lowerCaseTerm = term.toLowerCase();
//     return hotels.filter(
//         (hotel) =>
//             hotel.name.toLowerCase().includes(lowerCaseTerm) ||
//             hotel.location.toLowerCase().includes(lowerCaseTerm)
//     );
// };
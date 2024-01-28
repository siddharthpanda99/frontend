import { Room } from "app/types/Room";

export interface Hotel {
    id: number;
    name: string;
    location: string;
    price: number;
    rating: number;
    rooms: Room[];
}

export interface FilterOptions {
    location?: string;
    price?: number;
    rating?: number;
}

export interface SearchSortFilterProps {
    hotels: Hotel[];
    onResultsChange: (filteredAndSortedHotels: Hotel[]) => void;
}

import React, { useEffect, useState } from "react";
import { SearchSortFilterProps, FilterOptions, Hotel } from "app/interfaces/SearchSortFilter.interface";
// import { searchHotels } from "app/utils/search";
import { searchHotels, filterHotels, sortHotels } from "app/utils/HotelSearchSortFilter.utils";

const SearchSortFilter: React.FC<SearchSortFilterProps> = ({
  hotels,
  onResultsChange,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filters, setFilters] = useState<FilterOptions>({});
  const [sortBy, setSortBy] = useState<keyof Hotel>("price");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedSearchTerm = event.target.value;
    setSearchTerm(updatedSearchTerm);
  };

  useEffect(() => {
    console.log("🚀 ~ searchTerm:", searchTerm)
    updateResults(searchTerm);
  }, [searchTerm])
  

  const updateResults = (updatedSearchTerm: string) => {
    const searchResults = updatedSearchTerm
      ? searchHotels(hotels, updatedSearchTerm)
      : hotels;
    const filterResults = filters ? filterHotels(hotels, filters) : hotels;
    console.log("🚀 ~ updateResults ~ sortOrder:", sortOrder)
    const sortedResults = sortHotels(hotels, sortBy, sortOrder);

    const filteredAndSortedHotels = sortedResults.filter((hotel) => {
      return searchResults.includes(hotel) && filterResults.includes(hotel);
    });

    onResultsChange(filteredAndSortedHotels);
  };

  useEffect(() => {
    updateResults(searchTerm);
  }, [sortBy, sortOrder, searchTerm])
  

  // const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setFilters({ ...filters, [event.target.name]: event.target.value });
  //   updateResults();
  // };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as keyof Hotel);
    updateResults(searchTerm);
  };

  const handleSortOrderChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log("🚀 ~ event:", event.target.value);
    
    setSortOrder(event.target.value as "asc" | "desc");
    updateResults(searchTerm);
  };

  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search by name or location"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {/* Filter inputs (add more as needed) */}
      {/* <input
        type="text"
        placeholder="Filter by location"
        name="location"
        onChange={handleFilterChange}
      />
      <input
        type="number"
        placeholder="Filter by price"
        name="price"
        onChange={handleFilterChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        name="rating"
        onChange={handleFilterChange}
      /> */}

      {/* Sort inputs */}
      <select value={sortBy} onChange={handleSortChange}>
        <option value="price">Sort by Price</option>
        <option value="rating">Sort by Rating</option>
      </select>
      <select value={sortOrder} onChange={handleSortOrderChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SearchSortFilter;

import { useSearchParams } from "react-router-dom";

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (event) => {
    const sortedBy = event.target.value;
    searchParams.set("sortedBy", sortedBy);
    setSearchParams(searchParams);
  }

  return (
    <div className="mb-4 items-center justify-end">
      <select 
        id="sort"
        value={searchParams.get("sortBy") || ""}
        onChange={handleSortChange}
        className="border border-gray-200 bg-white p-2 rounded-md focus:outline-none"
      >
        <option value="">Default</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  )
}

export default SortOptions;

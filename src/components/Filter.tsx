import useStore from "../store/useStore";
import {
  MagnifyingGlassIcon as SearchIcon,
  FunnelIcon as FilterIcon,
} from "@heroicons/react/24/outline";

const Filter = () => {
  const { setFilter } = useStore();

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded-lg">
        <SearchIcon className="h-5 w-5 text-gray-300" />
        <input
          type="text"
          placeholder="Filtrar por nome"
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded-lg">
          <FilterIcon className="h-5 w-5 text-gray-300" />
          <input
            type="number"
            placeholder="Preço mínimo"
            onChange={(e) => setFilter(null, Number(e.target.value))}
            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded-lg">
          <FilterIcon className="h-5 w-5 text-gray-300" />
          <input
            type="number"
            placeholder="Preço máximo"
            onChange={(e) => setFilter(null, null, Number(e.target.value))}
            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;

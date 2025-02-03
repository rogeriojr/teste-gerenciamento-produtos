import useStore from "../store/useStore";

const Pagination = () => {
  const { currentPage, itemsPerPage, setCurrentPage, products } = useStore();
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="flex justify-center space-x-2 my-4 text-white">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => setCurrentPage(index + 1)}
          className={`px-4 py-2 border rounded-lg transition-all ${
            currentPage === index + 1
              ? "bg-gray-700 text-white"
              : "bg-gray-900 text-gray-400 hover:bg-gray-700"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

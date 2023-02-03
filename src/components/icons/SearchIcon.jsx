const SearchIcon = ({ large }) => {
  console.log(large);
  return (
    <div className="m-4  md:order-2  ">
      <div className="relative  md:block">
        <div className="pointer-events-none absolute  inset-y-0 left-0 flex w-full items-center pl-3">
          <svg
            className="h-5 w-5 text-gray-500"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block w-full  rounded-3xl border border-gray-300  bg-rosa-claro p-2 pl-10  text-sm  dark:text-black dark:placeholder-gray-400 dark:focus:ring-blue-500 "
          placeholder="¿Qué estas buscando?"
        />
      </div>
    </div>
  );
};

export default SearchIcon;

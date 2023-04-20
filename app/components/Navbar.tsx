const Navbar = ({ handleSidebarToggle }) => {
  return (
    <>
      <div className="lg:hidden flex flex-1 fixed top-0 p-2 border-b-2 border-gray-500 bg-gray-200 text-gray-700 z-10 w-full">
        <button
          className=" inline-flex  items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            p-2 px-4 bg-gray-200 border-gray-500 text-gray-700 z-10"
          onClick={handleSidebarToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="p-4 flex-1 text-center text-base font-normal">
          New chat
        </h1>
      </div>
    </>
  );
};

export default Navbar;

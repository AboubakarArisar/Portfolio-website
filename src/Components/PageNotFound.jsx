import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center ">
       <div className="flex justify-center items-center fixed top-4 w-full ">
            <Link
              to="/"
              className="px-5 py-3 text-xl font-medium leading-5 shadow-2xl text-white transition-all duration-300 border border-transparent rounded-lg focus:outline-none bg-green-500 hover:bg-green-600"
            >
              Back to homepage
            </Link>
          </div>
      <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-[#8B8A91]">
        <div className="w-full lg:w-1/2 mx-8">
          <div className="text-7xl text-green-500 font-extrabold mb-8">
            404
          </div>
          <p className="text-2xl md:text-3xl font-semibold leading-normal mb-8">
            Sorry we couldn't find the page you're looking for
          </p>
         
        </div>
        <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
          <img
            src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
            className="w-full max-w-lg"
            alt="Page not found"
          />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;

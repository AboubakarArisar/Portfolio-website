import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='flex fixed z-30 top-0 left-0 right-0 shadow-2xl'>
        <nav className='bg-black  w-full flex justify-between shadow-2xl items-center h-[70px] px-8'>
          <div className='text-white text-2xl font-bold'>Ab</div>
          <div>
            <button
              onClick={() => navigate("/contact")}
              className='bg-green-400 flex gap-2 rounded py-2 px-5 mx-8 w-[max-content] text-white h-10'
            >
              Contact me
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-home'
              >
                {" "}
                <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'></path>
                <circle cx='12' cy='7' r='4'></circle>
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

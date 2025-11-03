import Logout from "../Logout";

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header className="block">
      <h1 className=" font-semibold text-4xl  mt-4">
        Employee Management Software
      </h1>
      <div className="my-8">
        <button
          className="border  bg-[#0366ee] hover:bg-[#0356d6] text-base text-white py-2 px-4 rounded font-bold"
          onClick={() => 
            setIsAdding(true)
          }
        >
          Add Employee
        </button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;

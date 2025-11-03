import Swal from "sweetalert2";

const Logout = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    Swal.fire({
      icon: "question",
      title: "Logging out?",
      text: "Are you sure you want to log out?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logging out...",
          timer: 1500,
          showConfirmButton: false,
          didOpen: () => {
            Swal.showLoading();
          },
        }).then(() => {
          Swal.fire({
            icon: "success",
            title: "Logged out!",
            text: "You have been logged out successfully.",
            timer: 1500,
            showConfirmButton: false,
          });
          setIsAuthenticated(false);
          localStorage.setItem("is_authenticated", false);
        });
      }
    });
  };

  return (
    <button
      style={{ marginLeft: "12px" }}
      className="border border-[#cdcdcd] hover:border-[#000] text-base py-2 px-4 rounded font-bold"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;

import { useState } from "react";
import Swal from "sweetalert2";

const Add = ({ employees, setEmployees, setIsAdding }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;

    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };

    const updatedEmployee = [...employees, newEmployee];

    Swal.fire({
      icon: "success",
      title: "Employee Added",
      text: `${newEmployee.firstName} ${newEmployee.lastName}'s data has been added successfully.`,
      timer: 1500,
      showConfirmButton: false,
    });

    setEmployees(updatedEmployee);

    setIsAdding(false);
  };

  return (
    <div className="max-w-[70%] mx-auto">
      <form className="p-8 flex flex-col gap-3" onSubmit={handleAdd}>
        <h1 className="text-4xl font-[600] mb-4">Add Employee</h1>
        <label className="font-semibold" htmlFor="firstName">
          First Name
        </label>
        <input
          className="w-full border rounded border-[#dedede] py-2 px-4 focus:outline-none focus:ring-2 
         focus:ring-[#0366ee] focus:ring-offset-2 transition"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label className="font-semibold" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="w-full border rounded border-[#dedede] py-2 px-4 focus:outline-none focus:ring-2 
         focus:ring-[#0366ee] focus:ring-offset-2 transition"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label className="font-semibold" htmlFor="email">
          Email
        </label>
        <input
          className="w-full border rounded border-[#dedede] py-2 px-4 focus:outline-none focus:ring-2 
         focus:ring-[#0366ee] focus:ring-offset-2 transition"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="font-semibold" htmlFor="salary">
          Salary ($)
        </label>
        <input
          className="w-full border rounded border-[#dedede] py-2 px-4 focus:outline-none focus:ring-2 
         focus:ring-[#0366ee] focus:ring-offset-2 transition"
          type="number"
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <label className="font-semibold" htmlFor="date">
          Date
        </label>
        <input
          className="w-full border rounded border-[#dedede] py-2 px-4 focus:outline-none focus:ring-2 
         focus:ring-[#0366ee] focus:ring-offset-2 transition"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input
            className=" bg-[#0366ee] hover:bg-[#0356d6] text-base text-white py-2 px-4 rounded font-bold"
            type="submit"
            value="Add"
          />
          <input
            className="border border-[#cdcdcd] hover:border-[#000] text-base py-2 px-4 rounded font-bold"
            style={{ marginLeft: "12px" }}
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;

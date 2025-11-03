import { useState } from "react";
import Swal from "sweetalert2";

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
  const id = selectedEmployee.id;

  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      return alert("All fields are required");
    }

    const employee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };

    const updatedEmployee = employees.map((emp) =>
      emp.id === id ? employee : emp
    );

    Swal.fire({
      icon: "success",
      title: "Employee Updated",
      text: `${employee.firstName} ${employee.lastName}'s data has been updated successfully.`,
      timer: 1500,
      showConfirmButton: false,
    });

    setEmployees(updatedEmployee);

    setIsEditing(false);
  };

  return (
    <div className="max-w-[70%]  mx-auto">
      <form className=" w-full flex flex-col gap-3" onSubmit={handleUpdate}>
        <h1 className="text-4xl font-[600] mt-4">Edit Employee</h1>
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
            className="border bg-[#0366ee] hover:bg-[#0356d6] text-base py-2 px-4 rounded font-bold text-white"
            type="submit"
            value="Update"
          />
          <input
            className="border border-[#cdcdcd] hover:border-[#000] text-base py-2 px-4 rounded font-bold"
            style={{ marginLeft: "12px" }}
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;

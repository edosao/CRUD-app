import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import Header from "./Header";
import Table from "./Table";
import Add from "./Add";
import Edit from "./Edit";

import { employeesData } from "../../data";

const Dashboard = ({ setIsAuthenticated }) => {
  const [employees, setEmployees] = useState(() => {
    const stored = localStorage.getItem("employee_data");
    return stored ? JSON.parse(stored) : employeesData;
  });
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("employee_data", JSON.stringify(employees));
  }, [employees]);

  const handleEdit = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);

    setSelectedEmployee(employee);

    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You can't reverse this action!",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        const [employee] = employees.filter((employee) => employee.id === id);

        Swal.fire({
          icon: "success",
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          timer: 1500,
          title: "Deleted successfully!",
          showConfirmButton: false,
        });
      }
    });

    const employeesCopy = employees.filter((employee) => employee.id !== id);
    setEmployees(employeesCopy);
  };

  return (
    <div className="max-w-[1200px] mx-auto text-[#404040]">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;

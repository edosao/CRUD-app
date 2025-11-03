const Table = ({ employees, handleEdit, handleDelete }) => {
  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: null,
  });

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse text-[#4e4e4e]">
        <thead>
          <tr>
            <th className="text-left p-2 border-b border-b-[#dedede]">No.</th>
            <th className="text-left p-2 border-b border-b-[#dedede]">
              First Name
            </th>
            <th className="text-left p-2 border-b border-b-[#dedede]">
              Last Name
            </th>
            <th className="text-left p-2 border-b border-b-[#dedede]">Email</th>
            <th className="text-left p-2 border-b border-b-[#dedede]">
              Salary
            </th>
            <th className="text-left p-2 border-b border-b-[#dedede]">Date</th>
            <th
              className="text-center p-2 border-b border-b-[#dedede]"
              colSpan={2}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, i) => {
            return (
              <tr className=" odd:bg-gray-100 even:bg-white" key={employee.id}>
                <td className="text-left p-2 border-b border-b-[#dedede] ">
                  {i + 1}
                </td>
                <td className="text-left p-2 border-b border-b-[#dedede] ">
                  {employee.firstName}
                </td>
                <td className="text-left p-2 border-b border-b-[#dedede] ">
                  {employee.lastName}
                </td>
                <td className="text-left p-2 border-b border-b-[#dedede] ">
                  {employee.email}
                </td>
                <td className="text-left p-2 border-b border-b-[#dedede] ">
                  {formatter.format(employee.salary)}
                </td>
                <td className="text-left p-2 border-b border-b-[#dedede] ">
                  {employee.date}
                </td>
                <td className="text-right p-2 border-b border-b-[#dedede] ">
                  <button
                    className="border border-[#cdcdcd] hover:border-[#000] text-right text-base py-2 px-5 rounded font-bold"
                    onClick={() => handleEdit(employee.id)}
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left p-2 border-b border-b-[#dedede] ">
                  <button
                    className="border border-[#cdcdcd] hover:border-[#000] text-left  text-base py-2 px-5 rounded font-bold"
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

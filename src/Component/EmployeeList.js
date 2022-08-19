import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [employeeData, setemployeeData] = useState([]);
  const handleClick = (e) => {
    navigate(`/${e.first_name}`);
  };

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees"
    )
      .then((data) => data.json())
      .then((data) => setemployeeData(data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>ID</TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="right">
              First Name
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="right">
              Last Name
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="right">
              Date of Birth
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="right">
              Address
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="right">
              Date of Joining
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="right">
              Salary
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="right">
              Designation
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeData.map((data) => (
            <TableRow
              key={data.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.id}
              </TableCell>
              <TableCell align="right">{data.first_name}</TableCell>
              <TableCell align="right">{data.last_name}</TableCell>
              <TableCell align="right">{data.date_of_birth}</TableCell>
              <TableCell align="right">{data.address}</TableCell>
              <TableCell align="right">{data.date_of_joining}</TableCell>
              <TableCell align="right">{data.salary}</TableCell>
              <TableCell align="right">{data.designation}</TableCell>
              <TableCell align="right">
                <Button onClick={() => handleClick(data)} variant="contained">
                  Employee Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeList;

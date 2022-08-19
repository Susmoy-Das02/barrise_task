import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const EmployeeDetails = () => {
  const { first_name } = useParams();
  const [employeeDetails, setEmployeeDetails] = useState([]);

  useEffect(() => {
    const url = `https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/${first_name}`;
    console.log(url);
    fetch(url)
      .then((data) => data.json())
      .then((data) => setEmployeeDetails(data));
  }, [first_name]);
  console.log(first_name, employeeDetails);

  

  return (
    <TableContainer style={{display:"flex",justifyContent:"center", alignItems:"center", height:"100%"}} component={Paper}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Field</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeDetails?.map((data) => (
            <TableRow
              key={data.first_name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                First Name
              </TableCell>
              <TableCell align="right">{data.first_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody>
          {employeeDetails?.map((data) => (
            <TableRow
              key={data.first_name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Last Name
              </TableCell>
              <TableCell align="right">{data.last_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody>
          {employeeDetails.map((data) => (
            <TableRow
              key={data.first_name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Last Name
              </TableCell>
              <TableCell align="right">{data.last_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody>
          {employeeDetails.map((data) => (
            <TableRow
              key={data.first_name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Data Of Birth
              </TableCell>
              <TableCell align="right">{data.date_of_birth}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody>
          {employeeDetails.map((data) => (
            <TableRow
              key={data.first_name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Address
              </TableCell>
              <TableCell align="right">{data.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody>
          {employeeDetails.map((data) => (
            <TableRow
              key={data.first_name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Date of Joining
              </TableCell>
              <TableCell align="right">{data.date_of_joining}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody>
          {employeeDetails.map((data) => (
            <TableRow
              key={data.first_name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Designation
              </TableCell>
              <TableCell align="right">{data.designation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeDetails;

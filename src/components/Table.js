import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from "react-redux";

import Paper from '@mui/material/Paper';

export default function BasicTable() {
  const [userData, setUserData] = useState({});
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
            method: "GET",
            url: "https://sandbox.practical.me/api/user/profile",
            headers: { Authorization: `Bearer ${token}` },
          });
        const userData = response.data.data;

        setUserData(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Information</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">First Name</TableCell>
            <TableCell align="right">{userData.first_name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Surname</TableCell>
            <TableCell align="right">{userData.sur_name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Email</TableCell>
            <TableCell align="right">{userData.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Phone</TableCell>
            <TableCell align="right">{userData.phone}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

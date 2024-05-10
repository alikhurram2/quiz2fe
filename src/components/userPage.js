import { Box, Grid } from "@mui/material";
import BasicTable from "./Table";
import FAQList from "./faq";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const UserPage = () => {
  
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr', // Split the container into two columns
        gap: '20px', // Add some gap between the components
        width: '100vw',
        height: '100vh',
        padding: '20px', // Add padding instead of margin
      }}
    >
      <BasicTable />
      <FAQList />
    </Box>
  );
};

export default UserPage;

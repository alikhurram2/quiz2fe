import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from "react-redux";


export default function FAQList() {
  const [faqData, setFaqData] = useState([]);
  const token = useSelector((state) => state.user.token);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
            method: "GET",
            url: "https://sandbox.practical.me/api/faq",
            headers: { Authorization: `Bearer ${token}` },
          });
        const faqData = response.data.data;
        setFaqData(faqData);
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {faqData.map((faq) => (
        <React.Fragment key={faq.id}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={faq.question} />
            </ListItemButton>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

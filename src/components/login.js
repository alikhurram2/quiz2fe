import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { useDispatch } from "react-redux";
import { login } from "../redux/user.reducer";

const Login = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "admin@gmail.com",
      password: "test1234",
    },
    onSubmit: async (values) => {
      
      const formData = new FormData();
      formData.append("password", values.password);
      formData.append("social_auth_type", "normal");
      formData.append("email",values.email);
      
      const response = await axios.post(
        "https://sandbox.practical.me/api/login",
        formData
      );
      if (response.status === 200) {
        NotificationManager.success(response.message);
        dispatch(login(response.data.auth_token));
      } else {
        NotificationManager.error(response.message || response.statusText);
      }
    },
  });

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={formik.handleSubmit}
    >
      <TextField
        onChange={formik.handleChange}
        value={formik.values.email}
        name="email"
        label="Email"
        variant="outlined"
      />
      <TextField
        onChange={formik.handleChange}
        value={formik.values.password}
        name="password"
        label="Password"
        type="password"
        variant="outlined"
      />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </form>
  );
};

export default Login;

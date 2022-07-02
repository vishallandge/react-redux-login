import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";
import { useHistory } from "react-router-dom";
import { getUser } from "../redux/selector.js";

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/action";
import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentLogin = useSelector(getUser);

  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
    },
    image: {
      backgroundImage: "url(https://source.unsplash.com/random)",
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();

  const url = "http://staging.indianreward.com/api/v1/login";

  const [data, setData] = useState({
    uemail: "",
    upassword: "",
  });
  const [response, setResponse] = useState({});

  function submit(e) {
    e.preventDefault();

    let formData = new FormData(); //formdata object

    formData.append("uemail", data.uemail); //append the values with key, value pair
    formData.append("upassword", data.upassword);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    axios
      .post(url, formData, config)
      .then((res) => {
        console.log(res.data);
        setResponse(res.data);
        dispatch(setUser({ email: data.uemail, password: data.upassword }));
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={(e) => submit(e)}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="uemail"
                label="uemail Address"
                name="uemail"
                autoComplete="uemail"
                autoFocus
                onChange={(e) => handle(e)}
                value={data.uemail}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="upassword"
                label="upassword"
                type="upassword"
                id="upassword"
                autoComplete="current-upassword"
                value={data.upassword}
                onChange={(e) => handle(e)}
              />

              
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                className={classes.submit}
              >
                Sign In
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default Login;

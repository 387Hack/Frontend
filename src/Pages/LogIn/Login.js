import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { hipster2 } from "react-icons-kit/icomoon";
import { LinkStyled, TextFieldCustom } from "./Login.style";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import client from "../../utils/Connection";
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  CssBaseline,
  Button,
  Avatar,
} from "@material-ui/core";

import Cookies from "universal-cookie";
const cookies = new Cookies();
const cookies1 = new Cookies();

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "black",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "#424242",
    },
  },
  blackTextField: {
    backgroundColor: "#424242",
  },
}));

export default function LogIn() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const onChange = (name, value) => {
    name(value);
  };

  const onSubmit = async () => {
    console.log(email, password);
    const data = {
      email,
      password,
    };
    if (!email || !password) swal("Please fill all field");
    else {
      try {
        const res = await client.post("/auth/signin", data);
        if (res.status === 200) {
          cookies.set("token", res.data.token, { path: "/" });
          console.log(res);
          cookies1.set("name", res.data.user.name, { path: "/" });
          history.push("/profile");
        } else {
          swal("Incorrect email or password");
        }
      } catch (err) {
        swal("Incorrect data");
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Icon icon={hipster2} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextFieldCustom
                required
                fullWidth
                label="Email Address"
                onChange={(e) => {
                  onChange(setEmail, e.target.value);
                }}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldCustom
                required
                fullWidth
                label="Password"
                type="password"
                onChange={(e) => {
                  onChange(setPassword, e.target.value);
                }}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            style={{ padding: "1rem 0" }}
            fullWidth
            onClick={onSubmit}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container justify="center" style={{ margin: "2rem 0" }}>
            <Grid item>
              <LinkStyled to="/signup">Don't have account? Sign up</LinkStyled>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

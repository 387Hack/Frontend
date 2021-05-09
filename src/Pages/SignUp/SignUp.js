import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { hipster2 } from "react-icons-kit/icomoon";
import { LinkStyled, TextFieldCustom } from "./SignUp.style";
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  CssBaseline,
  Button,
  Avatar,
} from "@material-ui/core";

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

export default function SignUp() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onChange = (name, value) => {
    name(value);
  };

  const onSubmit = () => {
    console.log(name, email, password, password2);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Icon icon={hipster2} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextFieldCustom
                autoComplete="name"
                variant="outlined"
                required
                fullWidth
                onChange={(e) => {
                  onChange(setName, e.target.value);
                }}
                label="First Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextFieldCustom
                variant="outlined"
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
                variant="outlined"
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
            <Grid item xs={12}>
              <TextFieldCustom
                variant="outlined"
                required
                fullWidth
                label="Confirm Password"
                type="password"
                onChange={(e) => {
                  onChange(setPassword2, e.target.value);
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
            Sign Up
          </Button>
          <Grid container justify="center" style={{ margin: "2rem 0" }}>
            <Grid item>
              <LinkStyled to="/login">
                Already have an account? Sign in
              </LinkStyled>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

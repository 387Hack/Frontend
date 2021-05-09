import { Link } from "react-router-dom";
import styled from "styled-components";
import { withStyles, TextField } from "@material-ui/core";

export const LinkStyled = styled(Link)`
  color: black;
  font-size: 120%;
  font-weight: 600;
  text-decoration: underline;
  &:hover {
    color: #424242;
  }
`;

export const TextFieldCustom = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
      fontWeight: "600",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
})(TextField);

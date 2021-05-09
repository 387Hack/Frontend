import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Logout() {
  const history = useHistory();
  useEffect(() => {
    cookies.set("token", "", { path: "/" });
    history.push("/");
  }, [history]);
  return <div></div>;
}

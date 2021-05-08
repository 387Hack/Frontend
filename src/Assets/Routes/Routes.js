import HomePage from "../../Pages/HomePage/HomePage";
import Error from "../../Pages/Error/Error";
import Profile from "../../Pages/Profile/Profile";
import SignUp from "../../Pages/SignUp/SignUp";
import LogIn from "../../Pages/LogIn/Login";
import SoundGame from "../../Pages/SoundGame/SoundGame";
export const Routes = [
  {
    id: 1,
    component: HomePage,
    path: "/",
    exact: true,
  },
  {
    id: 2,
    component: Error,
    path: "/error",
    exact: true,
  },
  {
    id: 3,
    component: Profile,
    path: "/profile",
    exact: true,
  },
  {
    id: 4,
    component: SignUp,
    path: "/signup",
    exact: true,
  },
  {
    id: 5,
    component: LogIn,
    path: "/login",
    exact: true,
  },
  {
    id: 6,
    component: SoundGame,
    path: "/soundgame",
  },
];

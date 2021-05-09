import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #000000;
`;

export const UlWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  list-style: none;

  & a {
    text-decoration: none;
  }

  & li {
    padding: 1.5rem;
    color: white;
    transition: 0.5s;
  }

  & li:hover {
    background-color: white;
    color: black;
  }

  @media (max-width: 1000px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    display: block;
    width: 100%;
    text-align: center;
  }
`;

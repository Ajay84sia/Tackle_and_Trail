import { Avatar, Button, Flex, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link as NavLink } from "react-router-dom";
import AdminTabs from "./AdminTabs";
import Logo from "./Image/logo.png";
import { AuthContext } from "../Contextapi/AuthContext";

const AdminDashboard = () => {
  const { logout } = useContext(AuthContext);
  return (
    <>
      <Flex
        style={{
          width: "100vw",
          height: "11vh",
          backgroundColor: "black",
          color: "white",
          padding: "15px",
          justifyContent: "space-between",
          position: "fixed",
          zIndex: "100",
        }}
      >
        <NavLink to="/admin">
          <Avatar
            height="8vh"
            width="8vw"
            src={Logo}
            cursor="pointer"
            marginTop={"-1"}
          />
        </NavLink>
        <Heading as="h1">Admin Dashboard</Heading>
        <NavLink to="/">
          <Button
            backgroundColor="white"
            size="lg"
            color={"black"}
            fontSize="lg"
            fontWeight="bold"
            onClick={logout()}
          >
            Logout
          </Button>
        </NavLink>
      </Flex>
      <AdminTabs />
    </>
  );
};

export default AdminDashboard;

import { Avatar, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link as NavLink } from "react-router-dom";
import AdminTabs from "./AdminTabs";
import Logo from "./Image/logo.png";

const AdminDashboard = () => {
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
        <Button
          backgroundColor="white"
          size="lg"
          color={"black"}
          fontSize="lg"
          fontWeight="bold"
        >
          Logout
        </Button>
      </Flex>
      <AdminTabs />
    </>
  );
};

export default AdminDashboard;

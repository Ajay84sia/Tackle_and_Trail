import { Button, Flex, Heading, Image} from "@chakra-ui/react";
import React from "react";
import AdminTabs from "./AdminTabs";
import Logo from './Image/logo.png'

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
          zIndex: "100"
        }}
      >
        <Image src={Logo} alt="logo" width={"120px"} cursor="pointer" borderRadius={"10px"}/>
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
      <AdminTabs/>

    </>
  );
};

export default AdminDashboard;

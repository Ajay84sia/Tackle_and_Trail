import { Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import React from "react";
import AdminAddProducts from "./AdminAddProducts";
import AdminDeleteProducts from "./AdminDeleteProducts";
import AdminEditProducts from "./AdminEditProducts";
import AdminViewProducts from "./AdminViewProducts";

const AdminTabs = () => {
  return (
    <>
      <Tabs variant="unstyled" orientation="vertical" paddingTop="80px">
        <TabPanels>
          <TabPanel>
            <p>Summary</p>
          </TabPanel>
          <TabPanel>
            <AdminViewProducts />
          </TabPanel>
          <TabPanel>
            <AdminAddProducts />
          </TabPanel>
          <TabPanel>
            <AdminEditProducts />
          </TabPanel>
          <TabPanel>
            <AdminDeleteProducts />
          </TabPanel>
        </TabPanels>
        <TabList width={"16vw"} borderLeft="2px solid black">
          <Tab
            _selected={{ color: "white", bg: "blue.500" }}
            style={{ fontSize: "large", fontWeight: "bold", height: "7vh" }}
          >
            Summary
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "orange.400" }}
            style={{ fontSize: "large", fontWeight: "bold", height: "7vh" }}
          >
            View Products
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "green.400" }}
            style={{ fontSize: "large", fontWeight: "bold", height: "7vh" }}
          >
            Add Products
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "yellow.400" }}
            style={{ fontSize: "large", fontWeight: "bold", height: "7vh" }}
          >
            Edit Products
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "red.400" }}
            style={{ fontSize: "large", fontWeight: "bold", height: "7vh" }}
          >
            Delete Products
          </Tab>
        </TabList>
      </Tabs>
    </>
  );
};

export default AdminTabs;

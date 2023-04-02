import {
  Box,
  Button,
  Center,
  Image,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminGetReq, adminOrdersReq } from "../Redux/AdminReducer/action";
import axios from "axios";

// const getLocalCardData = ()=>{
//   let newCartData = JSON.parse(localStorage.getItem("dataKey"));
//   return newCartData;
// }

const initialData = {
  // cart:getLocalCardData()
};
const AdminViewProducts = () => {
  // const {orders} = useSelector((state) => state.orderReducer)
  const toast = useToast();
  const [data, setData] = useState(initialData);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [endpoint, setEndPoint] = useState("boating");
  const { orders } = useSelector((store) => store.adminReducer);
  const { isLoading } = useSelector((store) => store.adminReducer);
  const { isError } = useSelector((store) => store.adminReducer);

  const handlePageChange = (val) => {
    setPage((prev) => prev + val);
  };

  useEffect(() => {
    const paramObj = {
      params: {
        _page: page,
        _limit: 7,
      },
    };
    dispatch(adminOrdersReq(paramObj));
  }, [endpoint, page]);

  const handleAccept = (id) => {
    let obj = {
      status: "Accepted",
    };
    const paramObj = {
      params: {
        _page: page,
        _limit: 7,
      },
    };
    axios
      .patch(`https://tackle-and-trail.onrender.com/orders/${id}`, obj)
      .then((res) => {
        dispatch(adminOrdersReq(paramObj));
      }).then(()=>{
        toast({
          title: `Order Accepted`,
          status: "success",
          duration: 1000,
          isClosable: true,
        });
      })
  };
  const handleReject = (id) => {
    let obj = {
      status: "Rejected",
    };
    const paramObj = {
      params: {
        _page: page,
        _limit: 7,
      },
    };
    axios
      .patch(`https://tackle-and-trail.onrender.com/orders/${id}`, obj)
      .then((res) => {
        dispatch(adminOrdersReq(paramObj));
      }).then(()=>{
        toast({
          title: `Order Rejected`,
          status: "error",
          duration: 1000,
          isClosable: true,
        });

      })
  };
  if (isLoading === true) {
    return (
      <>
        <Image
          src="https://i.stack.imgur.com/hzk6C.gif"
          alt="loading"
          margin="auto"
          paddingTop="90px"
          marginBottom="360px"
        />
      </>
    );
  }
  if (isError === true) {
    return (
      <>
        <Image
          src="https://cdn.dribbble.com/users/774806/screenshots/3823110/something-went-wrong.gif"
          alt="error"
          margin="auto"
          paddingTop="30px"
        />
      </>
    );
  }

  return (
    <div style={{ height: "84vh", width: "85vw" }}>
      {/* <Heading textAlign='center'>All Products Data</Heading> */}
      {/* <br/> */}
      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>S.No.</Th>
              <Th>Order ID</Th>
              <Th>Total Items</Th>
              <Th>Order Total</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders &&
              orders.map((el, i) => (
                <Tr key={i}>
                  <Td>{`${i + 1}.`}</Td>
                  <Td>{`T&T-4567842${el.id}`}</Td>
                  <Td>{el.totalItems}</Td>
                  <Td>$ {el.cartTotal}</Td>
                  <Td>
                    {el.status == "Rejected" ? (
                      <p style={{ color: "red" }}>{el.status}</p>
                    ) : el.status == "Accepted" ? (
                      <p style={{ color: "green" }}>{el.status}</p>
                    ) : (
                      <p style={{ color: "orange" }}>{el.status}</p>
                    )}
                  </Td>
                  <Td>
                    {el.status == "Pending" ? (
                      <>
                        <button
                          onClick={() => handleAccept(el.id)}
                          style={{ color: "green", marginRight: "10px" }}
                          variant={"solid"}
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleReject(el.id)}
                          style={{ color: "red" }}
                        >
                          Reject
                        </button>{" "}
                      </>
                    ) : (
                      <input type="checkbox" checked={true} />
                    )}
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Box align="center" marginBottom="20px">
        <Button
          mt={8}
          size={"sm"}
          py={"4"}
          textTransform={"uppercase"}
          onClick={() => handlePageChange(-1)}
          isDisabled={page === 1}
          _hover={{
            transform: "translateY(2px)",
            boxShadow: "lg",
          }}
        >
          PREV
        </Button>
        <Button
          mt={8}
          size={"sm"}
          py={"5"}
          textTransform={"uppercase"}
          isDisabled
          _hover={{
            boxShadow: "lg",
          }}
        >
          {page}
        </Button>
        <Button
          mt={8}
          size={"sm"}
          py={"4"}
          textTransform={"uppercase"}
          onClick={() => handlePageChange(1)}
          isDisabled={page === 7}
          _hover={{
            transform: "translateY(2px)",
            boxShadow: "lg",
          }}
        >
          NEXT
        </Button>
      </Box>
    </div>
  );
};

export default AdminViewProducts;

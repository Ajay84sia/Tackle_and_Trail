import {
    border,
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
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  
  
  // const getLocalCardData = ()=>{
  //   let newCartData = JSON.parse(localStorage.getItem("dataKey"));
  //   return newCartData;
  // }

  const initialData = {
    // cart:getLocalCardData()


  }
  const AdminViewProducts = () => {
  const {orders} = useSelector((state) => state.orderReducer)
    const[data,setData] = useState(initialData);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [endpoint, setEndPoint] = useState("boating");
    const { products } = useSelector((store) => store.adminReducer);
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
    //   dispatch(adminGetReq(endpoint, paramObj));
    }, [endpoint, page]);

    useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(data.cart));
    }, [data.cart]);


  
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
        <Center>
          <Select
            placeholder="Select Category"
            onChange={(e) => {
              setEndPoint(e.target.value);
              setPage(1);
            }}
          >
            <option value="fishing">Fishing</option>
            <option value="boating">Boating</option>
            <option value="hunting">Hunting</option>
            <option value="shooting">Shooting</option>
            <option value="camping">Camping</option>
            <option value="outdoor">Outdoor</option>
          </Select>
        </Center>
        <TableContainer>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>Order ID</Th>
                <Th>Order Date</Th>
                <Th>Product Image</Th>
                <Th>Product Name</Th>
                <Th>Product Price</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders && orders.map((el, i) => (
                <Tr key={i}>
                  <Td>{el.id}.</Td>
                  <Td>30/3/2023</Td>
                  <Td>
                    {" "}
                    <Image
                      src={el.image}
                      alt={el.title}
                      width="50px"
                      height={"50px"}
                    />
                  </Td>
                  <Td>{el.title}</Td>
                  <Td>$ {el.price}</Td>
                  <button style={{color:"red"}}>Pending</button>
                  <br />
                  <span style={{color:"green",marginRight:"10px"}}>Accept</span><span style={{color:"red"}}>Cancel</span>
                 
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
  
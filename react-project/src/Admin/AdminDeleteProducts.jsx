import { Button } from "@chakra-ui/button";
import { DeleteIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Center, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import { useToast } from "@chakra-ui/toast";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminDelReq, adminGetReq } from "../Redux/AdminReducer/action";

const AdminDeleteProducts = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { products } = useSelector((store) => store.adminReducer);
  const { isLoading } = useSelector((store) => store.adminReducer);
  const { isError } = useSelector((store) => store.adminReducer);
  const [endpoint, setEndPoint] = useState("boating");

  const handlePageChange = (val) => {
    setPage((prev) => prev + val);
  };

  const paramObj = {
    params: {
      _page: page,
      _limit: 7,
    },
  };

  useEffect(() => {
    dispatch(adminGetReq(endpoint, paramObj));
  }, [endpoint, page]);

  const handleDelete = (endpoint, id) => {
    dispatch(adminDelReq(endpoint, id))
      .then(() => {
        dispatch(adminGetReq(endpoint, paramObj));
      })
      .then(() => {
        toast({
          title: `Product removed from the Data`,
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      });
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
    <div>
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
              <Th>S.No.</Th>
              <Th>Product ID</Th>
              <Th>Product Image</Th>
              <Th>Product Title</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products?.map((el, i) => (
              <Tr key={i + 1}>
                <Td>
                  {page === 1
                    ? i + 1
                    : page === 2
                    ? i + 8
                    : page === 3
                    ? i + 15
                    : page === 4
                    ? i + 22
                    : page === 5
                    ? i + 29
                    : page === 6
                    ? i + 36
                    : page === 7
                    ? i + 43
                    : i}
                  .
                </Td>

                <Td>{`T&T-${Math.round(Math.random() * 1000)}`}</Td>

                <Td>
                  {" "}
                  <Image src={el.image} alt={el.title} width="50px" />
                </Td>
                <Td>
                  <Text>Title : {el.title}</Text>
                </Td>

                <Td>
                  <Center>
                    <Button
                      colorScheme="red"
                      onClick={() => handleDelete(endpoint, el.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Center>
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
          py={"1"}
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
          py={"1"}
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
          py={"1"}
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

export default AdminDeleteProducts;

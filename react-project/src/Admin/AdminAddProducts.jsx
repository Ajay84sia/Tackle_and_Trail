import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const AdminAddProducts = () => {
  return (
    <Box >
      <Box
        rounded={"lg"}
        bg={"white"}
        boxShadow={"lg"}
        py={5}
        px={8}
      >
        <Stack spacing={2}>
          <FormControl>
            <FormLabel>Product Title</FormLabel>
            <Input
              type="text"
              name="title"
              placeholder="Enter Product Title here"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Image URL</FormLabel>
            <Input
              type="text"
              name="image"
              placeholder="Enter Image URL here"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Select Product Category</FormLabel>
            <Select placeholder="Select Product Category" name="endpoint">
              <option value="fishing">Fishing</option>
              <option value="boating">Boating</option>
              <option value="hunting">Hunting</option>
              <option value="shooting">Shooting</option>
              <option value="camping">Camping</option>
              <option value="outdoor">Outdoor</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Sub-Category</FormLabel>
            <Input
              type="text"
              name="image"
              placeholder="Enter Sub-Category here"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Product Price</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.900"
                fontSize="1.2em"
                children="$"
              />
              <Input
                type="number"
                name="price"
                placeholder="Enter Product Price here"
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Product Description</FormLabel>
            <Textarea name="description" placeholder='Enter Product Description here' />
          </FormControl>
          <Stack spacing={10}>
            <Button
              bg={"blue.400"}
              color={"white"}
              margin="auto"
              width="250px"
              _hover={{
                bg: "blue.500",
              }}
            >
              Add Product
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default AdminAddProducts;

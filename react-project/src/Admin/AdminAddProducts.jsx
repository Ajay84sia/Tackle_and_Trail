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
import React ,{useState}from "react";
import { useDispatch } from "react-redux";
import { adminPostReq } from "../Redux/AdminReducer/action";
const initalData = {
  title:'',
  image:"",
  endpoint:"",
  category:"",
  price:"",
  description:"",

}
const AdminAddProducts = () => {
  const[formstate,setFormState] = useState(initalData);
  const dispatch = useDispatch();
  // const{title,image,endpoint,category,price,description} = formstate;

  const handleChange= (e)=>{
    const{name,value} = e.target;
    // const val = type==="number" ? Number(value) : value; 
    setFormState((prev)=>{
      return {...prev,[name]:value}
    })
  }
  const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(...formstate);
        const data = {...formstate,["price"]:Number(formstate.price)}
        dispatch(adminPostReq(formstate.endpoint,data));
    }
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
          <FormControl >
            <FormLabel>Product Title</FormLabel>
            <Input
              type="text"
              value={formstate.title}
              onChange={handleChange}
              name="title"
              placeholder="Enter Product Title here"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Image URL</FormLabel>
            <Input
              type="text"
              value={formstate.image}
              onChange={handleChange}
              name="image"
              placeholder="Enter Image URL here"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Select Product Category</FormLabel>
            <Select placeholder="Select Product Category" name="endpoint"
            value={formstate.endpoint}
            onChange={handleChange}>
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
              name="category"
              value={formstate.category}
              onChange={handleChange}
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
                value={formstate.price}
                onChange={handleChange}
                placeholder="Enter Product Price here"
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Product Description</FormLabel>
            <Textarea name="description" placeholder='Enter Product Description here' value={formstate.description}
              onChange={handleChange}
            />
          </FormControl>
          <Stack spacing={10}>
            <Button
            // type="submit"
            onClick={handleSubmit}
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

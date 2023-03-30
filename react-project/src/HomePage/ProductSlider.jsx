import { Box, Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import MyCard from './MyCard'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/SliderReducer/action';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export const ProductSlider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const dispatch = useDispatch()
    const {products} = useSelector(store=>{
        console.log(store)
        return {
            products: store.sliderReducer.products,
        }
    })

    useEffect(()=>{
        dispatch(getProducts)
    },[])
    console.log(products)
    
  return (
    <Box pos={"relative"} overflow="hidden">

            <Carousel responsive={responsive}>
                {
                    products.map((el)=>(
                            <MyCard key={el.id} {...el} />
                    ))
                }
            </Carousel>;
    </Box>
  )
}

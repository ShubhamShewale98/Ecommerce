import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../Redux/Cart/ActionTypes";
import { getDataSingle } from "../Redux/Products/Action";
import { Products } from "./Products";

const SingleEntityPage = () => {
  const { id } = useParams();
  const Product = useSelector((state) => state.product.single);
  const CartProduct = useSelector((state) => state.cart.cart);

  const singleLoading = useSelector((state) => state.product.singleLoading);
  const singleError = useSelector((state) => state.product.singleError);
  const dispatch = useDispatch();
  const [size,setSize] = useState()

  useEffect(() => {
    if (id) {
      dispatch(getDataSingle(id));
    }
  }, [dispatch, id]);
  if (singleLoading) {
    return <h1>Loading ...</h1>;
  }
  if (singleError) {
    return <h1>Something went wrong ...</h1>;
  }
  if (Object.keys(Product).length == 0) {
    return <h1>Product {id} Not found ...</h1>;
  }
  const handlerAddToCart = () =>{
  let payload = {
    ...Product,
    size
  }
  dispatch(addToCart(payload))
  }
  console.log(CartProduct)
  return (
    <>
      {" "}
      <Flex justify="center" align={"center"}>
        <Products elem={Product} />
        <Box>
          <Text as="em">Choose A Size</Text>
          <HStack p={4}>
            {Product?.sizes.map((size) => {
              return <Button key={size} onClick={()=>{setSize(size)}}>{size}</Button>;
            })}
          </HStack>
          <Button bg='yellow' onClick={()=>{handlerAddToCart()}} m={4} p = {4} disabled={!size}>  {!size ? "please Select Size" :"ADD TO CART"}    </Button>
        </Box>
      </Flex>
    </>
  );
};

export { SingleEntityPage };

import React from "react";
import {
  Flex,
  Spacer,
  Image,
  Text,
  Icon,
  GridItem,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsSearch, BsBasket3 } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button,
} from "@chakra-ui/react";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../Redux/Cart/ActionTypes";
const Navbar = () => {
  const CartProduct = useSelector((state) => state.cart.cart);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const btnRef = React.useRef();
  const decreaseQnty = (id, size, qty) => {
    if (qty > 1) {
      dispatch(decreaseQty({ id, size }));
    } else {
      dispatch(removeFromCart({ id, size }));
    }
  };
  const increaseQnty = (id, size) => {
    dispatch(increaseQty({ id, size }));
  };
  const convertTonumber = (str) => {
    if (Number(str)) {
      return Number(str);
    }
    let arr = str.includes(",") ? str.split(",") : [];
    let final_arr = arr.reduce((a, c) => a + c, "");
    let result = Number(final_arr);
    return result;
  };
  let total_original_price = 0;
  let total_final_price = 0;
  CartProduct.forEach((prod) => {
    total_original_price += convertTonumber(prod.original_price) * prod.qty;
    total_final_price += convertTonumber(prod.final_price) * prod.qty;
  });
  return (
    <div>
      {" "}
      <Flex
        bg="white"
        p={2}
        borderBottom="0.5px solid #b1b3b5"
        justify={"center"}
      >
        <Spacer />
        <Link to="/">
          <Image
            src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_192x32.png?v=1647508945"
            alt="Flat Heads Logo"
            height="25px"
            m={3}
          />
        </Link>

        <Spacer />
        <Link to="/collection/all">
          {" "}
          <Text px={4} py={2}>
            SHOP
          </Text>
        </Link>
        <Link to="/collection/all">
          <Text px={4} py={2}>
            WOMEN
          </Text>
        </Link>
        <Link to="/collection/all">
          <Text px={4} py={2}>
            MEN
          </Text>
        </Link>
        <Link to="/collection/all">
          <Text px={4} py={2}>
            NEW
          </Text>
        </Link>
        <Link to="/collection/all">
          <Text px={4} py={2}>
            ARRIVALS
          </Text>
        </Link>
        <Link to="/collection/all">
          <Text px={4} py={2}>
            ABOUT
          </Text>
        </Link>
        <Link to="/collection/all">
          <Text px={4} py={2}>
            HELP
          </Text>
        </Link>

        <Spacer />
        <Icon boxSize="18px" mx={3} my={2} as={BsSearch} />
        <Icon boxSize="18px" mx={3} my={2} as={RiUserLine} />

        <Flex onClick={onOpen} ref={btnRef}>
          <Icon boxSize="18px" mx={3} my={2} as={BsBasket3} />

          <Text mx={0} my={1}>
            {CartProduct ? CartProduct.length : "0"}
          </Text>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="sm"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>YOUR CART ({CartProduct.length})</DrawerHeader>

              <DrawerBody>
                {CartProduct.length > 0 &&
                  CartProduct.map((elem) => {
                    return (
                      <div key={elem.id}>
                        <Flex align="center">
                          <Image
                            boxSize={"75px"}
                            src={elem.images[0]}
                            alt="shoe"
                          />
                          <Box>
                            <Text
                              casing={"lowercase"}
                            >{`${elem.name} | ${elem.color} | ${elem.gender} |`}</Text>

                            <Text as="sum">{elem.size}</Text>
                            <Flex align={"center"}>
                              <Button
                                disabled={elem.qty === 0}
                                onClick={() => {
                                  decreaseQnty(elem.id, elem.size, elem.qty);
                                }}
                              >
                                -
                              </Button>
                              <Text>{elem.qty}</Text>
                              <Button
                                onClick={() => {
                                  increaseQnty(elem.id, elem.size);
                                }}
                              >
                                +
                              </Button>
                            </Flex>
                            <Flex justify={"flex-end"}>
                              <Text as="s">
                                Rs{" "}
                                {`${
                                  convertTonumber(elem.original_price) *
                                  elem.qty
                                }`}
                              </Text>
                              <Text>
                                Rs{" "}
                                {`${
                                  convertTonumber(elem.final_price) * elem.qty
                                }`}{" "}
                              </Text>
                            </Flex>
                          </Box>
                        </Flex>
                      </div>
                    );
                  })}
              </DrawerBody>
              {/* <DrawerBody> <Text>SUBTOTAL</Text> </DrawerBody> */}
              <Flex justify={"space-between"} align="center" m={2}>
                {" "}
                <Text>SUBTOTAL</Text>
                <Flex p={2}>
                  <Text p={2} as={"s"}>
                    Rs.{total_original_price}
                  </Text>
                  <Text p={2}>Rs.{total_final_price}</Text>
                </Flex>
              </Flex>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="yellow">Proceed To Checkout</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>

        <Spacer />
      </Flex>
    </div>
  );
};

export default Navbar;

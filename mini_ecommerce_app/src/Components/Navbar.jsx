import React from "react";
import { Flex, Spacer, Image, Text, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsSearch, BsBasket3 } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const Navbar = () => {
  const CartProduct = useSelector((state) => state.cart.cart);

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
        <Icon boxSize="18px" mx={3} my={2} as={RiUserLine} />3
        <Icon boxSize="18px" mx={3} my={2} as={BsBasket3} />
        
        <Text mx={0} my={1}>
          { CartProduct ? CartProduct.length : "0"}
        </Text>
        <Spacer />
      </Flex>
    </div>
  );
};

export default Navbar;

import React ,{useState} from "react";
import { Box } from "@chakra-ui/react";
import { Image , Text , HStack } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const Products = ({ elem }) => {
  const { id, name, color, gender, original_price, final_price, images } = elem;

  const [img,setImg] = useState(images[0])
  const navigate =  useNavigate()
  const showOtherImage = () =>{
    setImg(images[1])
  }
  const showOriginalImage = () =>{
    setImg(images[0])
  }
  return (
    <Box onMouseEnter={()=>{showOtherImage()}} onMouseLeave={()=>{showOriginalImage()}} onClick={()=>{navigate(`/collection/all/${id}`)}} >
      <Image margin={'auto'} src={img} alt={name+"shoes"} />
      <Text>{name + " | " + color + " | " + gender}</Text>
      <HStack justify={'center'}>  <Text>{final_price}</Text>
      <Text color='gray'  as='s'>{original_price}</Text></HStack>
    

    </Box>
  );
};

export { Products };

import React, { useEffect } from "react";
import { getData } from "../Redux/Products/Action";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "@chakra-ui/react";
import { Filter } from "../Components/Filter";
import { Products } from "./Products";
import { Grid, GridItem } from "@chakra-ui/react";
const ShopPage = () => {
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  const product = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (product?.length === 0) {
      dispatch(getData());
    }
  }, [dispatch, product.length]);

  return (
    <div>
      <Text>Shop All</Text>
      <Filter />
      {/* {loading && <h1>Entties Loading</h1>} */}
      {loading ? (
        <h1>Entties Loading</h1>
      ) : error ? (
        <h1>Something went wrong </h1>
      ) : (
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {product?.length > 0 &&
            product.map((elem) => {
              return <Products key={elem.id} elem={elem} />;
            })}
        </Grid>
      )}
    </div>
  );
};
export { ShopPage };

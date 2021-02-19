import { products } from "../../data";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Header from "../../src/Header";

import Image from "next/image";

const brand = ({ productList }) => {
  return (
    <Container lg>
      <Header />
      {productList.map((product) => {
        return (
          <Grid container direction="row" key={product.id}>
            <Grid item>
              <Image
                src={product.imgUrl}
                layout="fixed"
                alt="dslr camera"
                width={500}
                height={500}
              />
            </Grid>

            <Grid item>
              <Typography variant="h4" component="h1" gutterBottom>
                {product.brand}
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </Container>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      productList: products,
    },
  };
};

export default brand;

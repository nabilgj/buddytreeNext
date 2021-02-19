import { products } from "../../data";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Image from "next/image";

import Link from "next/link";

import Header from "../../src/Header";

const brand = ({ productData }) => {
  return (
    <Container lg>
      <Header />
      <Grid container direction="row">
        <Grid item lg>
          <Image
            src={productData.imgUrl}
            layout="fixed"
            alt="dslr camera"
            width={500}
            height={500}
          />
        </Grid>

        <Grid
          item
          container
          direction="column"
          alignItems="flex-start"
          justifyContent="space-evenly"
          lg
        >
          <Grid item>
            <Typography variant="h3">Brand: {productData.brand}</Typography>
          </Grid>

          <Grid item>
            <Typography variant="h4">Company: {productData.company}</Typography>
          </Grid>

          <Grid item>
            <Typography variant="h4">Price: ${productData.price}</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Link href="/brand" style={{ textDecoration: "none", color: "black" }}>
        Go Back
      </Link>
    </Container>
  );
};

export const getStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const prodId = params.id;

  const productList = products.filter((prod) => prod.id.toString() === prodId);

  return {
    props: {
      productData: productList[0],
    },
  };
};

export default brand;

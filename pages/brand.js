import * as React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
// import ProTip from '../src/ProTip';
import Link from "../src/Link";
import Copyright from "../src/Copyright";

import Grid from "@material-ui/core/Grid";
import Image from "next/image";

import Header from "../src/Header";

// import handler from './api/hello';
// import products from './api/products/index';

export default function Shop() {
  // products.GET('localhost:3000/api/products').then((data) => {
  //   console.log('products', data);
  // });

  // fetch('localhost:3000/api/products').then((data) => {
  //   console.log('products', data);
  // });

  return (
    <Container maxWidth="lg">
      <Header />
      <Box sx={{ my: 2 }}>
        <Grid container direction="row" justify="space-evenly">
          <Grid item md>
            <Link href="/brand/1">
              <Image
                src={`${process.env.PUBLIC_URL}1.jpg`}
                // layout="responsive"
                alt="dslr camera"
                width={500}
                height={500}
              />
            </Link>
          </Grid>
          <Grid item md style={{ marginRight: "1rem", marginLeft: "1rem" }}>
            <Link href="/brand/2">
              <Image
                src={`${process.env.PUBLIC_URL}two.jpg`}
                // layout="responsive"
                alt="dslr camera"
                width={500}
                height={500}
              />
            </Link>
          </Grid>
          <Grid item md>
            <Link href="/brand/3">
              <Image
                src={`${process.env.PUBLIC_URL}three.jpg`}
                // layout="responsive"
                alt="dslr camera"
                width={500}
                height={500}
              />
            </Link>
          </Grid>
        </Grid>
        {/* <ProTip /> */}
        <Copyright />
      </Box>
    </Container>
  );
}

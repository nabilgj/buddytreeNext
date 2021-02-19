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

import Imgix from "react-imgix";

export default function Shop() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Box sx={{ my: 2 }}>
        <Grid container direction="row" justify="space-evenly">
          <Grid item md>
            <Link href="/brand/1">
              {/* <Image
                // src={`${process.env.PUBLIC_URL}1.jpg`}
                src="https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                // layout="responsive"
                alt="dslr camera"
                width={500}
                height={500}
              /> */}

              <Imgix
                src="https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                // sizes="100vw"
                width={400}
                height={400}
                passHref={true}
              />
            </Link>
          </Grid>
          <Grid item md>
            <Link href="/brand/2">
              {/* <Image
                // src={`${process.env.PUBLIC_URL}two.jpg`}
                src="https://images.pexels.com/photos/442573/pexels-photo-442573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                // layout="responsive"
                alt="dslr camera"
                width={500}
                height={500}
              /> */}

              <Imgix
                src="https://images.pexels.com/photos/442573/pexels-photo-442573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                // sizes="100vw"
                width={400}
                height={400}
                passHref={true}
              />
            </Link>
          </Grid>
          <Grid item md>
            <Link href="/brand/3">
              {/* <Image
                // src={`${process.env.PUBLIC_URL}three.jpg`}
                src="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="dslr camera"
                width={500}
                height={500}
              /> */}

              <Imgix
                src="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                // sizes="100vw"
                width={400}
                height={400}
                passHref={true}
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

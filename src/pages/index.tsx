import { Button } from "@chakra-ui/button";
import { Box, Link } from "@chakra-ui/layout";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <Box m="2rem">
      <Link
        href="/blocks/page-section/hero/callToActionWithAnnotation"
        mr="1rem"
      >
        hero
      </Link>
      <Button colorScheme="green">click</Button>
    </Box>
  );
}

import { Button, Image, Flex, Box, Spacer } from "@chakra-ui/react";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <Box boxShadow="md">
      <Flex>
        <Image height="8" src="" alt="brand logo" m="5"></Image>
        <Spacer />
      </Flex>
    </Box>
  );
};

export default Navbar;

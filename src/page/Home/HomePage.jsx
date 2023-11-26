import { Flex } from "@chakra-ui/react";
import { LeftPanel } from "../../components/left-panel";
import { RightPanel } from "../../components/right-panel";

const HomePage = () => {
  return (
    <Flex h="100vh">
      <LeftPanel />
      <RightPanel />
    </Flex>
  );
};
export default HomePage;

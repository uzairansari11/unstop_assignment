import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Text
} from "@chakra-ui/react";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import SegmentIcon from "@mui/icons-material/Segment";
import { useRef } from "react";

function MyDrawer({ isOpen, onOpen, onClose }) {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef();

  return (
    <>
      <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <SegmentIcon
          sx={{
            transform: "scaleX(-1)",
            fontSize: "40px",
            borderRadius: "50%",
            bgcolor: "#F2F8FE",
            padding: "5px",
          }}
        />
      </Box>
      <Drawer
        bgColor={"#F2F8FE"}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor={"#F2F8FE"}  >
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Grid
              gap="10px"
              p="10px 20px "
              fontSize={"13px"}
              fontWeight={"500"}
            >
              <Flex p="10px" gap="10px">
                <DashboardOutlinedIcon fontSize="small" />
                <Text>Dashboard</Text>
              </Flex>
              <Flex
                p="10px 0px"
                borderRadius={"10px"}
                bgColor="#E5F1FC"
                border="2px solid #4096EC"
                color={"#4096EC"}
                gap="10px"
              >
                <NoteAltOutlinedIcon fontSize="small" />
                <Text>Assessment</Text>
              </Flex>
              <Flex p="10px" gap="10px">
                <LibraryBooksOutlinedIcon fontSize="small" />
                <Text>My Library</Text>
              </Flex>

              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                borderTop={"1px dashed #E3E5E8"}
              >
                <Flex p="10px" gap="10px">
                  <AnalyticsOutlinedIcon fontSize="small" />
                  <Text>Round Status</Text>
                </Flex>
                <Box>
                  <Button
                    fontSize={"10px"}
                    w="46px"
                    h="18px"
                    textAlign={"center"}
                    alignItems={"center"}
                    borderRadius={"7px"}
                    border={"1px solid #DF623A"}
                    display={"block"}
                    fontWeight={"500"}
                    color="#DF623A"
                    p="0px 4px"
                    bgColor={"#FBEBEA"}
                    m={"auto"}
                  >
                    Admin
                  </Button>
                </Box>
              </Flex>
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MyDrawer;

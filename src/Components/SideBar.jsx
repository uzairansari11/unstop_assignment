import { Box, Button, Grid, Text } from "@chakra-ui/react";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import React from "react";
export const SideBar = () => {
	return (
		<Box
			position="fixed"
			zIndex="10"
			top="0"
			bgColor="white"
			w={{ base: "15%", md: "15%", lg: "10%" }}
			h="100vh"
			display={{ base: "none", md: "block", lg: "block" }}
		>
			<Grid gap="10px" p="10px 20px " fontSize={"13px"} fontWeight={"500"}>
				<Box p="10px">
					<DashboardOutlinedIcon fontSize="small" />
					<Text>Dashboard</Text>
				</Box>
				<Box
					p="15px 0px"
					borderRadius={"10px"}
					bgColor="#E5F1FC"
					border="2px solid #4096EC"
          color={"#4096EC"}
				>
					<NoteAltOutlinedIcon fontSize="small" />
					<Text>Assessment</Text>
				</Box>
				<Box p="10px">
					<LibraryBooksOutlinedIcon fontSize="small" />
					<Text>My Library</Text>
				</Box>
				<Box p="15px" borderTop={"1px dotted #E3E5E8"} mt="10px">
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
				<Box p="10px">
					<AnalyticsOutlinedIcon fontSize="small" />
					<Text>Round </Text>
					<Text>Status</Text>
				</Box>
			</Grid>
		</Box>
	);
};

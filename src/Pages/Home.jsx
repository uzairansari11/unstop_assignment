import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Assessments from "../Components/Assessments";
import MobNav from "../Components/MobNav";
import Navbar from "../Components/Navbar";
import Overview from "../Components/Overview";
import { SideBar } from "../Components/SideBar";

const Home = () => {
	return (
		<Flex justifyContent={"space-between"} pr="20px" h="200vh">
			<SideBar />
			<Box
				w={{ base: "100%", md: "83%", lg: "88%" }}
				position="absolute"
				left={{ base: "0", md: "16%", lg: "11%" }}
			>
				<MobNav />
				<Navbar />
				<Overview />
				<Assessments />
			</Box>
		</Flex>
	);
};

export default Home;

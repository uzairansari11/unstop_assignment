import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Assessments from "../Components/Assessments";
import MobNav from "../Components/MobNav";
import Navbar from "../Components/Navbar";
import Overview from "../Components/Overview";
import { SideBar } from "../Components/SideBar";

const Home = () => {
	const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");
	console.log(isLargerThanMd)
	const [showOverView, setShowOverView] = useState(isLargerThanMd );

	const handleVisibility = () => {
		setShowOverView(!showOverView);
	};

	return (
		<Flex justifyContent={"space-between"} pr="20px" h="100vh">
			<SideBar />
			<Box
				w={{ base: "100%", md: "83%", lg: "88%" }}
				position="absolute"
				left={{ base: "0", md: "16%", lg: "11%" }}
			>
				<MobNav />
				<Navbar />
				{showOverView && <Overview />}
				<Assessments handleVisibility={handleVisibility} />
			</Box>
		</Flex>
	);
};

export default Home;

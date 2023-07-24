import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import React from "react";
import earth from "../Assests/earth.svg";

const Overview = () => {
	return (
		<Box bgColor="white" p="20px">
			<Text fontSize={"18px"} fontWeight={"500"} textAlign={"left"}>
				Assessments Overview
			</Text>

			<Grid
				mt="15px"
				w="100%"
				borderRadius={"15px"}
				border="1px solid #E3E5E8"
				fontWeight={"500"}
				gridTemplateColumns={{
					base: "repeat(4,auto)",
					md: "repeat(2,auto)",
					lg: "repeat(4,auto)",
				}}
			>
				<Box h="100%" p="15px 20px">
					<Text fontSize={"14px"} fontWeight={"bold"} textAlign={"left"}>
						Total Assessment
					</Text>
					<Flex mt="20px" gap="10px" alignItems={"center"}>
						<ViewAgendaOutlinedIcon
							sx={{
								color: "#8670F2",
								backgroundColor: "#EBE8FD",
								padding: "8px",
								width: "35px",
								height: "35px",
								borderRadius: "6px",
							}}
						/>
						<Text fontSize={"20px"} fontWeight={"bold"}>
							34
						</Text>
					</Flex>
				</Box>

				<Box
					borderRight={{ base: "none", md: "none", lg: "1px solid #E3E5E8" }}
					borderLeft={"1px solid #E3E5E8"}
					p="15px 20px"
				>
					<Text fontSize={"14px"} fontWeight={"bold"} textAlign={"left"}>
						Candidates
					</Text>
					<Flex mt="15px" gap="10px" alignItems={"center"}>
						<PeopleAltOutlinedIcon
							sx={{
								color: "#8670F2",
								backgroundColor: "#EBE8FD",
								padding: "8px",
								width: "35px",
								height: "35px",
								borderRadius: "6px",
							}}
						/>
						<Flex>
							<Box
								alignItems={"center"}
								p="0px 10px"
								borderRight={"1px solid #E3E5E8"}
							>
								<Text
									alignItems={"center"}
									fontSize={"20px"}
									fontWeight={"bold"}
								>
									11,145{" "}
									<span
										style={{
											color: "#05C165",
											fontSize: "14px",
											fontWeight: "500",
										}}
									>
										+89
									</span>{" "}
								</Text>
								<Text fontSize={"12px"}>Total Candidate</Text>
							</Box>
							<Box alignItems={"center"} p="0px 10px">
								<Text
									alignItems={"center"}
									fontSize={"20px"}
									fontWeight={"bold"}
								>
									1,14{" "}
									<span
										style={{
											color: "#05C165",
											fontSize: "14px",
											fontWeight: "500",
										}}
									>
										+89
									</span>{" "}
								</Text>
								<Text fontSize={"12px"}>Who Attamped</Text>
							</Box>
						</Flex>
					</Flex>
				</Box>
				<Box
					borderRight={"1px solid #E3E5E8"}
					borderTop={{
						base: "1px solid #E3E5E8",
						md: "1px solid #E3E5E8",
						lg: "none",
					}}
					p="15px 20px"
					gridColumnStart={{ base: "3", md: "1", lg: "3" }}
				>
					<Text fontSize={"14px"} fontWeight={"bold"} textAlign={"left"}>
						Candidates Source
					</Text>
					<Flex mt="15px" gap="10px" alignItems={"center"}>
						<Image src={earth} atl="earth" />
						<Flex>
							<Box
								alignItems={"center"}
								p="0px 10px"
								borderRight={"1px solid #E3E5E8"}
							>
								<Text
									alignItems={"center"}
									fontSize={"20px"}
									fontWeight={"bold"}
								>
									11,000{" "}
									<span
										style={{
											color: "#05C165",
											fontSize: "14px",
											fontWeight: "500",
										}}
									>
										+89
									</span>{" "}
								</Text>
								<Text fontSize={"12px"} textAlign={"left"}>
									Email
								</Text>
							</Box>
							<Box
								alignItems={"center"}
								p="0px 10px"
								borderRight={"1px solid #E3E5E8"}
							>
								<Text
									alignItems={"center"}
									fontSize={"20px"}
									fontWeight={"bold"}
								>
									145{" "}
									<span
										style={{
											color: "#05C165",
											fontSize: "14px",
											fontWeight: "500",
										}}
									>
										+89
									</span>{" "}
								</Text>
								<Text fontSize={"12px"}>Social Share</Text>
							</Box>
							<Box alignItems={"center"} p="0px 10px">
								<Text
									alignItems={"center"}
									fontSize={"20px"}
									fontWeight={"bold"}
								>
									145
									<span
										style={{
											color: "#05C165",
											fontSize: "14px",
											fontWeight: "500",
										}}
									>
										+89
									</span>{" "}
								</Text>
								<Text fontSize={"12px"}>Unique Link</Text>
							</Box>
						</Flex>
					</Flex>
				</Box>
				<Box
					h="100%"
					p="15px 20px"
					borderTop={{
						base: "1px solid #E3E5E8",
						md: "1px solid #E3E5E8",
						lg: "none",
					}}
				>
					<Text fontSize={"14px"} fontWeight={"bold"} textAlign={"left"}>
						Total Purpose
					</Text>
					<Flex mt="20px" gap="10px" alignItems={"center"}>
						<InsertLinkOutlinedIcon
							sx={{
								color: "#0073E6",
								backgroundColor: "#E5F1FC",
								padding: "8px",
								width: "35px",
								height: "35px",
								borderRadius: "6px",
							}}
						/>
						<Text fontSize={"20px"} fontWeight={"bold"}>
							11
						</Text>
					</Flex>
				</Box>
			</Grid>
		</Box>
	);
};

export default Overview;

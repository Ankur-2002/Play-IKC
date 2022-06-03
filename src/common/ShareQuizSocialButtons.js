// import { Box, Stack } from "@mui/material";
// import React, { useState } from "react";
// import { FaCheck, FaLink } from "react-icons/fa";
// import { ImFacebook, ImTelegram, ImWhatsapp } from "react-icons/im";
// import { ColorButton } from "./ColorButton";

// const ShareQuizSocialButtons = () => {
// 	const [showCheckMark, setShowCheckMark] = useState(false);

// 	const handleCopyLinkToClipboard = () => {
// 		navigator.clipboard.writeText(window.location.href);
// 		setShowCheckMark(true);
// 	};

// 	return (
// 		<Box display={"flex"} justifyContent={"center"} p={1}>
// 			<Stack direction='row' spacing={1}>
// 				{/* fb button */}
// 				<a
// 					href={`http://www.facebookIcon.com/share.php?u=${window.location.href}`}
// 					target='_blank'
// 					rel='noreferrer'>
// 					<ColorButton variant='contained' bg='#4267B2'>
// 						<ImFacebook size={"2rem"} />
// 					</ColorButton>
// 				</a>
// 				{/* telegram button */}
// 				<a
// 					href={`https://telegram.me/share/url?url=${window.location.href}&text=Play quiz and earn money`}
// 					target='_blank'
// 					rel='noreferrer'>
// 					<ColorButton variant='contained' bg='#0088cc'>
// 						<ImTelegram size={"2rem"} />
// 					</ColorButton>
// 				</a>

// 				{/* whatsapp button */}
// 				<a
// 					href={`https://api.whatsapp.com/send/?phone&text=${window.location.href}&app_absent=0`}
// 					target='_blank'
// 					rel='noreferrer'>
// 					<ColorButton variant='contained' bg='#25D366'>
// 						<ImWhatsapp size={"2rem"} />
// 					</ColorButton>
// 				</a>

// 				{/* copylink button */}
// 				<ColorButton
// 					variant='contained'
// 					onClick={handleCopyLinkToClipboard}
// 					bg='#607D8B'>
// 					{showCheckMark ? <FaCheck size={"2rem"} /> : <FaLink size={"2rem"} />}
// 				</ColorButton>
// 			</Stack>
// 		</Box>
// 	);
// };

// export default ShareQuizSocialButtons;

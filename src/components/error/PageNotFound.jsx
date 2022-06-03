import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
	const history = useHistory();
	return (
		<Box display='flex' justifyContent='center' p={10} m={10}>
			<Typography variant='h4' component='p'>
				You seem lost!&nbsp;
			</Typography>

			<Button
				variant='outlined'
				color='error'
				onClick={() => history.push("/")}>
				Go back
			</Button>
		</Box>
	);
};

export default PageNotFound;

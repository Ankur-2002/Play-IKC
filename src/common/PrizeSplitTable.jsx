// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
// 	[`&.${tableCellClasses.head}`]: {
// 		backgroundColor: "#fbb03b",
// 		color: theme.palette.common.white,
// 		fontSize: "1.5rem",
// 		fontWeight: 600,
// 		borderRight: "1px solid #fff",
// 		" &:last-child ": {
// 			border: 0,
// 		},
// 	},
// 	[`&.${tableCellClasses.body}`]: {
// 		fontSize: 14,
// 	},
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
// 	"&:nth-of-type(even)": {
// 		backgroundColor: "#eee",
// 	},
// 	// remove default bottom border and add border to the right
// 	td: {
// 		padding: "1.2rem",
// 		borderRight: "1px solid rgba(224, 224, 224, 1)",
// 		borderBottom: "none",
// 		"&:last-child ": {
// 			border: 0,
// 		},
// 	},
// 	// },
// }));

// const PrizeSplitTable = () => {
// 	const currentWinningAmountAndPercentage = {
// 		winningPercentage: "10%",
// 		currentWinningAmount: "2.5",
// 	};

// 	//  this row data is dummy and it should ideally come from backend
// 	const rows = [
// 		{
// 			position: 1,
// 			...currentWinningAmountAndPercentage,
// 		},
// 		{
// 			position: 2,
// 			...currentWinningAmountAndPercentage,
// 		},
// 		{
// 			position: 3,
// 			...currentWinningAmountAndPercentage,
// 		},
// 		{
// 			position: 4,
// 			...currentWinningAmountAndPercentage,
// 		},
// 		{
// 			position: 5,
// 			...currentWinningAmountAndPercentage,
// 		},
// 		{
// 			position: 6,
// 			...currentWinningAmountAndPercentage,
// 		},
// 		{
// 			position: 7,
// 			...currentWinningAmountAndPercentage,
// 		},
// 		{
// 			position: 8,
// 			...currentWinningAmountAndPercentage,
// 		},
// 		{
// 			position: 9,
// 			...currentWinningAmountAndPercentage,
// 		},
// 		{
// 			position: 10,
// 			...currentWinningAmountAndPercentage,
// 		},
// 	];

// 	//  this column data is dummy and it should ideally come from backend
// 	const columns = ["Position", "Winning %", "Current Winning Amount (€)"];

// 	return (
// 		<Table sx={{ minWidth: 300 }}>
// 			<TableHead>
// 				<TableRow>
// 					{columns?.map((columnName) => (
// 						<StyledTableCell align='center'>{columnName} </StyledTableCell>
// 					))}
// 				</TableRow>
// 			</TableHead>
// 			<TableBody>
// 				{rows?.map((row) => (
// 					<StyledTableRow key={row?.position}>
// 						<StyledTableCell align='center'>{row?.position}</StyledTableCell>
// 						<StyledTableCell align='center'>
// 							{row?.winningPercentage}
// 						</StyledTableCell>
// 						<StyledTableCell align='center'>
// 							{row?.currentWinningAmount}
// 						</StyledTableCell>
// 					</StyledTableRow>
// 				))}
// 			</TableBody>
// 		</Table>
// 	);
// };
// export default PrizeSplitTable;

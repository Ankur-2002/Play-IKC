// import React from "react";
// import { ListGroup } from "react-bootstrap";

// const TransactionItem = ({ t }) => {
// 	var d = new Date(`${t.transaction.createdAt}`);
// 	console.log(d.toLocaleString());
// 	return (
// 		<ListGroup.Item>
// 			<div style={{ fontSize: "medium" }}>
// 				{t.transaction.metadata.description}
// 				{t.transaction.type === "Credit" ? (
// 					<span style={{ float: "right", fontWeight: "bold", color: "green" }}>
// 						<i className='fas fa-plus-circle'></i> {t.transaction.amount}
// 					</span>
// 				) : (
// 					<span style={{ float: "right", fontWeight: "bold", color: "red" }}>
// 						<i className='fas fa-minus-circle'></i> {t.transaction.amount}
// 					</span>
// 				)}
// 				<div
// 					style={{
// 						fontSize: "small",
// 						fontFamily: "monospace",
// 						fontWeight: "bold",
// 					}}>
// 					<p style={{ marginBottom: "0rem" }}>ref. Id : {t._id}</p>
// 				</div>
// 				<div
// 					style={{
// 						fontSize: "small",
// 						fontFamily: "monospace",
// 						color: "#ff3f5f",
// 						fontWeight: "bold",
// 					}}>
// 					{d.toLocaleString()}
// 				</div>
// 			</div>
// 		</ListGroup.Item>
// 	);
// };

// export default TransactionItem;

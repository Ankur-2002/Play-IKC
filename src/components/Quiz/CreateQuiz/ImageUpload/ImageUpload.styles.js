import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    height: "600px",
    width: "100%",
    background: "rgba(240, 240, 240, 0.6)",
    border: "2px solid #1F85DE",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    overflow: "hidden",
  },

  fileInput: {
    display: "none",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  errorMessage: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "red",
    marginTop: 20,
  },
});

export default useStyles;

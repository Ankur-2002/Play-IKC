import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: 50,
    marginBottom: 50,
    background: "rgba(240, 240, 240, 0.6)",
    border: "10px dashed #FF6F91",
    boxSizing: "border-box",
    paddingTop: "40px",
    paddingBottom: "40px",
  },

  title: {
    marginBottom: 40,
  },

  form: {
    maxWidth: 920,
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  },
  verticalCenter: {
    display: "flex",
    alignItems: "center",
  },
  label: {
    fontWeight: "600",
    fontSize: 28,
    letterSpacing: "-0.02em",
    color: "#FF3F5F",
  },

  input: {
    width: "100%",
    padding: "10px 20px",
    border: "2px solid #1F85DE",
    borderRadius: "20px",
    outline: "none",
    fontSize: "16px",
    background: "transparent",
  },

  inputBB: {
    width: "100%",
    padding: "5px 20px",
    border: "none",
    borderBottom: "2px solid #1F85DE",
    outline: "none",
    fontSize: "16px",
    background: "transparent",
  },

  button: {
    background: "#845EC2",
    borderRadius: "5px",
    fontSize: "16px",
    alignSelf: "center",
    marginTop: 30,
  },

  labelRadio: {
    fontWeight: "600",
    fontSize: "28px",
    color: "#1F85DE",
    margin: "0 20px",
  },
});

export default useStyles;

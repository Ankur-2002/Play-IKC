import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
  },

  buttonContainer: {
    display: "flex",
    gap: "3rem",
  },

  resize: {
    fontSize: "1.5rem",
  },

  button: {
    marginTop: "3rem",
    fontSize: "1.5rem",
    flex: 1,
  },
});

export default useStyles;

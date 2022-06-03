import { Upload } from "assets";
import useStyles from "./ImageUpload.styles";

const ImageUpload = ({ fileUrl, errorMessage, handleFileChange }) => {
  const classes = useStyles();

  return (
    <label className={classes.root} htmlFor="file">
      {fileUrl ? (
        <img className={classes.image} src={fileUrl} alt="upload" />
      ) : (
        <Upload />
      )}
      <input
        id="file"
        className={classes.fileInput}
        type="file"
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/jpg"
      />
      {errorMessage && (
        <span className={classes.errorMessage}>{errorMessage}</span>
      )}
    </label>
  );
};

export default ImageUpload;

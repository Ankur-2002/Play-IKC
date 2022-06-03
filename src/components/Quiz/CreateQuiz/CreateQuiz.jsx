import { Container, Grid, Typography, Button } from "@mui/material";
import { toast } from "react-toastify";
import { useState } from "react";
import { connect } from "react-redux";

import { createQuiz, uploadFileQuiz } from "api/quiz";

import useStyles from "./CreateQuiz.styles";
import SelectCategory from "./SelectCategory";
import ImageUpload from "./ImageUpload";

const INITIAL_STATE = {
  title: "",
  description: "",
  maxPlayers: "",
  minPlayers: "",
  questionsCount: "",
  visibility: "public",
  ikcToken: "free",
  pollAmount: "",
  categoryId: "",
  lastDateToRegister: "",
  startDate: "",
  endDate: "",
  numberOfTimes: 1,
  selectedFile: null,
  fileUrl: null,
  errorMessage: null,
};

const CreateQuiz = ({ createQuiz, uploadFileQuiz }) => {
  const classes = useStyles();
  const [fields, setFields] = useState(INITIAL_STATE);

  const {
    title,
    description,
    maxPlayers,
    minPlayers,
    questionsCount,
    visibility,
    ikcToken,
    pollAmount,
    categoryId,
    lastDateToRegister,
    startDate,
    endDate,
    numberOfTimes,
    selectedFile,
    fileUrl,
    errorMessage,
  } = fields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  // handle file change with validations
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // If file is not selected or removed
    // getting to init state
    if (!file) {
      return setFields({
        ...fields,
        selectedFile: null,
        fileUrl: null,
        errorMessage: null,
      });
    }

    // Getting the file size (in bytes)
    let fileSize = file.size;
    fileSize = Math.round(file.size / 1024);
    const FOUR_MB = 4 * 1024;

    if (fileSize > FOUR_MB) {
      return setFields({
        ...fields,
        selectedFile: null,
        fileUrl: null,
        errorMessage: "File size must not exceed 4 Mbs",
      });
    }

    // converting the file to URL
    // for preview
    const url = URL.createObjectURL(file);
    setFields({
      ...fields,
      selectedFile: file,
      fileUrl: url,
      errorMessage: null,
    });
  };

  const uploadFile = async (quizID) => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);
    console.log(formData);

    try {
      await uploadFileQuiz(quizID, formData);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (event) => {
    if (!selectedFile) return;

    event.preventDefault();
    const dataToSubmit = {
      title,
      description,
      timeAlloted: "20", // to be checked
      questions: [{ category: categoryId, questionsCount }],
      metadata: {
        maxScore: 625,
        maxQuestions: Number(questionsCount),
        maxPlayers: Number(maxPlayers),
        minPlayers: Number(minPlayers),
        maxAttempts: Number(numberOfTimes),
      },
      categoryId,
      visibility,
      hidden: false,
      lastDateToRegister,
      startDate,
      endDate,
      isFreebie: ikcToken === "free",
      poolAmount: ikcToken === "paid" ? Number(pollAmount) : 0,
      liveQuiz: false, // to be checked
      numberOfTimes: Number(numberOfTimes),
    };

    try {
      const data = await createQuiz(dataToSubmit);
      await uploadFile(data.payload._id);

      // toast a notification for success
      toast.success(data.message);

      // clear the form
      setFields(INITIAL_STATE);
    } catch (error) {
      console.log("Error while creating the quiz ", error);
      // toast a notification for error
      toast.error("Failed to create the quiz, Try again");
    }
  };

  return (
    <Container className={classes.root} maxWidth="lg">
      <Typography
        className={classes.title}
        variant="h3"
        color="black"
        textAlign="center"
      >
        Create Quiz
      </Typography>
      <form className={classes.form} onSubmit={onSubmit}>
        <Grid container spacing={2}>
          {/* Quiz Title */}
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <label className={classes.label} htmlFor="quiz-title">
              Quiz Title:
            </label>
          </Grid>
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <input
              required
              className={classes.input}
              id="quiz-title"
              name="title"
              type="text"
              value={title}
              onChange={handleChange}
            />
          </Grid>

          {/* Quiz Category */}
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <label className={classes.label} htmlFor="quiz-category">
              Category of Quiz:
            </label>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <SelectCategory value={categoryId} onChange={handleChange} />
          </Grid>

          {/* Quiz Description  */}
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <label className={classes.label} htmlFor="quiz-description">
              Quiz Description:
            </label>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <textarea
              required
              className={classes.input}
              rows="10"
              id="quiz-description"
              name="description"
              type="text"
              value={description}
              onChange={handleChange}
            />
          </Grid>

          {/* Min Players */}
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <label className={classes.label} htmlFor="min-players">
              Min no. of players to start the quiz:
            </label>
          </Grid>
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <input
              required
              className={classes.inputBB}
              id="min-players"
              name="minPlayers"
              type="number"
              value={minPlayers}
              onChange={handleChange}
              min={1}
            />
          </Grid>

          {/* Max Players */}
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <label className={classes.label} htmlFor="max-players">
              Max no. of players to start the quiz:
            </label>
          </Grid>
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <input
              required
              className={classes.inputBB}
              id="max-players"
              name="maxPlayers"
              type="number"
              value={maxPlayers}
              onChange={handleChange}
              min={1}
            />
          </Grid>

          {/* Total no of Questions */}
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <label className={classes.label} htmlFor="total-questions">
              Total no. of questions:
            </label>
          </Grid>
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <input
              required
              className={classes.inputBB}
              id="total-questions"
              name="questionsCount"
              type="number"
              value={questionsCount}
              onChange={handleChange}
              min={1}
            />
          </Grid>

          {/*Number of times */}
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <label className={classes.label} htmlFor="number-times">
              Max Plays per person:
            </label>
          </Grid>
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <input
              required
              className={classes.inputBB}
              id="number-times"
              name="numberOfTimes"
              type="number"
              value={numberOfTimes}
              onChange={handleChange}
              min={1}
            />
          </Grid>

          {/*Quiz Visibility */}
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <label className={classes.label}>Quiz Visibility:</label>
          </Grid>
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <input
              required
              id="visibility-public"
              name="visibility"
              type="radio"
              value="public"
              checked={visibility === "public"}
              onChange={handleChange}
            />
            <label className={classes.labelRadio} htmlFor="visibility-public">
              Public
            </label>
            <input
              required
              id="visibility-private"
              name="visibility"
              type="radio"
              value="private"
              checked={visibility === "private"}
              onChange={handleChange}
            />
            <label className={classes.labelRadio} htmlFor="visibility-private">
              Private
            </label>
          </Grid>

          {/* IKC Token */}
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <label className={classes.label}>IKC Token to enter:</label>
          </Grid>
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <input
              required
              id="token-free"
              name="ikcToken"
              type="radio"
              value="free"
              checked={ikcToken === "free"}
              onChange={handleChange}
            />
            <label className={classes.labelRadio} htmlFor="token-free">
              Free
            </label>
            <input
              required
              id="token-paid"
              name="ikcToken"
              type="radio"
              value="paid"
              checked={ikcToken === "paid"}
              onChange={handleChange}
            />
            <label className={classes.labelRadio} htmlFor="token-paid">
              Paid
            </label>
            {ikcToken === "paid" && (
              <input
                required
                className={classes.inputBB}
                id="token"
                name="pollAmount"
                type="number"
                value={pollAmount}
                onChange={handleChange}
              />
            )}
          </Grid>

          {/* Last Date to Register */}
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <label className={classes.label} htmlFor="last-date">
              Last Date to Register:
            </label>
          </Grid>
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <input
              required
              className={classes.input}
              id="last-date"
              name="lastDateToRegister"
              type="date"
              value={lastDateToRegister}
              onChange={handleChange}
            />
          </Grid>

          {/* Start Date  */}
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <label className={classes.label} htmlFor="start-date">
              Start Date:
            </label>
          </Grid>
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <input
              required
              className={classes.input}
              id="start-date"
              name="startDate"
              type="date"
              value={startDate}
              onChange={handleChange}
            />
          </Grid>

          {/* end Date  */}
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <label className={classes.label} htmlFor="end-date">
              End Date:
            </label>
          </Grid>
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <input
              required
              className={classes.input}
              id="end-date"
              name="endDate"
              type="date"
              value={endDate}
              onChange={handleChange}
            />
          </Grid>

          {/* Upload Image */}
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <label htmlFor="file" className={classes.label}>
              Upload Cover photo:
            </label>
          </Grid>
          <Grid className={classes.verticalCenter} item xs={12} sm={12} md={6}>
            <ImageUpload
              fileUrl={fileUrl}
              errorMessage={errorMessage}
              handleFileChange={handleFileChange}
            />
          </Grid>

          {/*  */}
        </Grid>
        <Button className={classes.button} variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

const mapDispatchToProps = {
  createQuiz,
  uploadFileQuiz,
};

export default connect(null, mapDispatchToProps)(CreateQuiz);

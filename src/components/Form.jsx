import { useRef, useState } from 'react';

const Form = (props) => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const makeRef = useRef('');
  const modelRef = useRef('');
  const yearRef = useRef('');
  const fuelRef = useRef('');
  const photoRef = useRef('');
  const descriptionRef = useRef('');

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredMake, setEnteredMake] = useState('');
  const [enteredMakeTouched, setEnteredMakeTouched] = useState(false);

  const [enteredModel, setEnteredModel] = useState('');
  const [enteredModelTouched, setEnteredModelTouched] = useState(false);

  const [enteredYear, setEnteredYear] = useState('');
  const [enteredYearTouched, setEnteredYearTouched] = useState(false);

  const [enteredOption, setEnteredOption] = useState('');
  const [enteredOptionTouched, setEnteredOptionTouched] = useState(false);

  const [chosenFile, setChosenFile] = useState('');
  const [chosenFileTouched, setChosenFileTouched] = useState(false);

  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredDescriptionTouched, setEnteredDescriptionTouched] =
    useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail
    .trim()
    .match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredMakeIsValid = enteredMake.trim() !== '';
  const makeInputIsInvalid = !enteredMakeIsValid && enteredMakeTouched;

  const enteredModelIsValid = enteredModel.trim() !== '';
  const modelInputIsInvalid = !enteredModelIsValid && enteredModelTouched;

  const enteredYearIsValid = enteredYear !== '';
  const yearInputIsInvalid = !enteredYearIsValid && enteredYearTouched;

  const enteredOptionIsValid = enteredOption !== '';
  const optionInputIsInvalid = !enteredOptionIsValid && enteredOptionTouched;

  const chosenFileIsValid = chosenFile !== '';
  const fileInputIsInvalid = !chosenFileIsValid && chosenFileTouched;

  const enteredDescriptionIsValid = enteredDescription.trim() !== '';
  const descriptionTextareaIsInvalid =
    !enteredDescriptionIsValid && enteredDescriptionTouched;

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const nameBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const makeChangeHandler = (event) => {
    setEnteredMake(event.target.value);
  };
  const makeBlurHandler = (event) => {
    setEnteredMakeTouched(true);
  };

  const modelChangeHandler = (event) => {
    setEnteredModel(event.target.value);
  };
  const modelBlurHandler = (event) => {
    setEnteredModelTouched(true);
  };

  const yearChangeHandler = (event) => {
    setEnteredYear(event.target.value);
  };
  const yearBlurHandler = (event) => {
    setEnteredYearTouched(true);
  };

  const optionChangeHandler = (event) => {
    setEnteredOption(event.target.value);
  };
  const optionBlurHandler = (event) => {
    setEnteredOptionTouched(true);
  };

  const fileChangeHandler = (event) => {
    setChosenFile(event.target.value);
  };
  const fileBlurHandler = (event) => {
    setChosenFileTouched(true);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };
  const descriptionBlurHandler = (event) => {
    setEnteredDescriptionTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    setEnteredMakeTouched(true);
    setEnteredModelTouched(true);
    setEnteredYearTouched(true);
    setEnteredOptionTouched(true);
    setChosenFileTouched(true);
    setEnteredDescriptionTouched(true);

    if (
      !enteredNameIsValid ||
      !enteredEmailIsValid ||
      !enteredMakeIsValid ||
      !enteredModelIsValid ||
      !enteredYearIsValid ||
      !enteredOptionIsValid ||
      !chosenFileIsValid ||
      !enteredDescriptionIsValid
    ) {
      return;
    }

    const information = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      make: makeRef.current.value,
      model: modelRef.current.value,
      year: yearRef.current.value,
      fuel: fuelRef.current.value,
      photo: photoRef.current.value,
      description: descriptionRef.current.value,
    };

    props.onAddInformation(information);

    setEnteredName('');
    setEnteredEmail('');
    setEnteredMake('');
    setEnteredModel('');
    setEnteredYear('');
    setEnteredOption('');
    setChosenFile('');
    setEnteredDescription('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
    setEnteredMakeTouched(false);
    setEnteredModelTouched(false);
    setEnteredYearTouched(false);
    setEnteredOptionTouched(false);
    setChosenFileTouched(false);
    setEnteredDescriptionTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const makeInputClasses = makeInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const modelInputClasses = modelInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const yearInputClasses = yearInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const optionInputClasses = optionInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const fileInputClasses = fileInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const descriptionTextareaClasses = descriptionTextareaIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <h1 className="heading">Sell Your Car</h1>
      <p className="text">
        Please fill out this form carefully. Our representatives will contact
        you shortly.
      </p>

      <fieldset className="fieldset-group">
        <legend className="fieldset-heading">Personal information</legend>
        <div className={nameInputClasses}>
          <label htmlFor="fname">Your Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="John Doe"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
            ref={nameRef}
          />
          {nameInputIsInvalid && (
            <p className="error-text">Please enter your name.</p>
          )}
        </div>

        <div className={emailInputClasses}>
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@gmail.com"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
            ref={emailRef}
          />
          {emailInputIsInvalid && (
            <p className="error-text">Please enter a valid email.</p>
          )}
        </div>
      </fieldset>

      <fieldset className="fieldset-group">
        <legend className="fieldset-heading">Car Details</legend>
        <div className={makeInputClasses}>
          <label htmlFor="make">Make:</label>
          <input
            type="text"
            id="make"
            name="make"
            placeholder="BMW"
            onChange={makeChangeHandler}
            onBlur={makeBlurHandler}
            value={enteredMake}
            ref={makeRef}
          />
          {makeInputIsInvalid && (
            <p className="error-text">Make must not be empty.</p>
          )}
        </div>

        <div className={modelInputClasses}>
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            placeholder="G30 540i"
            onChange={modelChangeHandler}
            onBlur={modelBlurHandler}
            value={enteredModel}
            ref={modelRef}
          />
          {modelInputIsInvalid && (
            <p className="error-text">Model must not be empty.</p>
          )}
        </div>

        <div className={yearInputClasses}>
          <label htmlFor="year">Production year:</label>
          <input
            type="number"
            id="year"
            name="year"
            placeholder="2018"
            min="1990"
            max="2022"
            step="1"
            onChange={yearChangeHandler}
            onBlur={yearBlurHandler}
            ref={yearRef}
            value={enteredYear}
          />
          {yearInputIsInvalid && (
            <p className="error-text">Please enter a valid production year.</p>
          )}
        </div>

        <div className={optionInputClasses}>
          <label htmlFor="fuel">Fuel type</label>
          <select
            id="fuel"
            name="fuel"
            ref={fuelRef}
            onChange={optionChangeHandler}
            onBlur={optionBlurHandler}
            value={enteredOption}
          >
            <option value="blank"></option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="hybrid">Hybrid</option>
            <option value="electric">Electric</option>
          </select>
          {optionInputIsInvalid && (
            <p className="error-text">Please select a fuel type.</p>
          )}
        </div>

        <div className={fileInputClasses}>
          <label htmlFor="file">Car photo</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={fileChangeHandler}
            onBlur={fileBlurHandler}
            value={chosenFile}
            ref={photoRef}
          />
          {fileInputIsInvalid && (
            <p className="error-text">Please select a file.</p>
          )}
        </div>

        <div className={descriptionTextareaClasses}>
          <label htmlFor="description">Car Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Perfect condition, purchased from a BMW dealership, full service history to date, serviced exclusively at BMW."
            rows="5"
            ref={descriptionRef}
            onChange={descriptionChangeHandler}
            onBlur={descriptionBlurHandler}
            value={enteredDescription}
          />
          {descriptionTextareaIsInvalid && (
            <p className="error-text">Please enter a description.</p>
          )}
        </div>
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;

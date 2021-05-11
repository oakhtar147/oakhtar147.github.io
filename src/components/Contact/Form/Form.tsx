import { useState } from 'react';
import { useFormik } from 'formik';
import { TextField, Snackbar, CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import Zoom from 'react-reveal/Zoom';

import { FormContainer, MessageContainer, Button } from './Form.styles';

interface FormValues { 
  name: string;
  email: string;
  message: string 
}


const useStyles = makeStyles({
  root: {
    background: '#1f1f1f',
    textOverflow: "ellipsis",
    border: 0,
    borderRadius: 3,
    margin: "0 1%",
  },
  input: {
    WebkitBoxShadow: '0 0 0 1000px #1f1f1f inset',
    color: 'white',
  },
  label: {
    color: 'white',
  },
});
  

const ContactForm = () => {
  const [showProgress, setShowProgress] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [emailError, setEmailError] = useState("");

  const initialValues: FormValues = { name: '', email: '', message: '' }
  const classes = useStyles();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
  })
  
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setShowProgress(true);
      emailjs.send('service_wpq7mt5',
       'template_hhdh4q9',
        values,
        'user_3N0rwtspIe7f09IcgItQI'
      )
      .then((response) => {
        setShowSnackbar(true);
        setShowProgress(false);
        formik.resetForm();
      }, (error) => {
        setShowSnackbar(true);
        setShowProgress(false);
        setEmailError("We failed to notify Osama about your message. Sorry!")
      });
    },
  });

  return (
    <div>
      <FormContainer onSubmit={formik.handleSubmit}>
        <TextField
          className={classes.root}
          inputProps={{autoComplete: "new-password", className: classes.input}}
          InputLabelProps={{className: classes.label}}
          variant="outlined"
          id="name"
          name="name"
          label="Name"
          autoComplete="new-password"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          className={classes.root}
          inputProps={{autoComplete: "new-password", className: classes.input}}
          InputLabelProps={{className: classes.label}}
          variant="outlined"
          id="email"
          name="email"
          label="Email"
          autoComplete="new-password"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <MessageContainer>
          <TextField
            className={classes.root}
            inputProps={{className: classes.input}}
            InputLabelProps={{className: classes.label}}
            variant="outlined"
            multiline
            id="text"
            name="message"
            label="Message"
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
          <Button type="submit">
            Submit  
          </Button>
          {showProgress && <Zoom><CircularProgress style={{ color: "#a36018" }} /></Zoom>}
          <Snackbar 
            open={showSnackbar}
            style={{marginBottom: "50px"}} 
            autoHideDuration={5000} 
            anchorOrigin={{vertical: "bottom", horizontal: "right" }} 
            onClose={() => setShowSnackbar(false)}
          >
            <Alert severity={emailError !== "" ? "error" : "success"}>
              {emailError !== "" ? emailError : "Osama has been notified about your message"}
            </Alert>
          </Snackbar>
        </MessageContainer>  
      </FormContainer>
    </div>
  )
}


export default ContactForm;

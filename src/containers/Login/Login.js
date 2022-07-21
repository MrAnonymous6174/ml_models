import React, { useState, useRef, useEffect } from "react";
import lottie from "lottie-web";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// material ui
// import { Button, TextField, FormControl, InputLabel } from "@material-ui/core";
// import Snackbar from "@material-ui/core/Snackbar";
// import Alert from "@material-ui/lab/Alert";

// import { LogIn } from "../../reducers/mainReducer/mainSliceActions";

import "./Login.css";
import { Button, FormControl, InputLabel, TextField } from "@mui/material";

export const Login = () => {
  const navigate = useNavigate();
  //   const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorname, seterrorname] = useState(false);
  const [erroremail, seterroremail] = useState(false);
  //   const [openSnackbar, setOpenSnackbar] = useState(false);
  // Regex
  const validateEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // lottie
  const loginWallpaper = useRef(null);
  const loginProfile = useRef(null);
  useEffect(() => {
    const lottie1 = lottie.loadAnimation({
      container: loginWallpaper.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../common/animation/loginWallpaper.json"),
    });
    const lottie2 = lottie.loadAnimation({
      container: loginProfile.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../common/animation/loginProfile.json"),
    });
    return () => [lottie1, lottie2].map((lottie) => lottie.destroy());
  }, []);
  //validations and handle change ========>>>
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === "password") {
      setPassword(value);
      value !== "" && seterrorname(false);
    }
    if (name === "email") {
      setEmail(value);
      value !== "" && seterroremail(false);
    }
  };
  const handleValidation = () => {
    if (password === "") {
      seterrorname(true);
    }
    if (email === "") {
      seterroremail(true);
    }
    loginSuccess();
  };

  const loginSuccess = () => {
    if (email === "avnish" && password === "shashi") {
      console.log("point1", email, password);
      navigate("/home");
    }
  };

  //   const loginApi = () => {
  //     if (password !== "" && email !== "") {
  //       dispatch(LogIn(email, password)).then((response) => {
  //         response?.status === 200
  //           ? setOpenSnackbar(true)
  //           : setOpenSnackbar(false);
  //       });
  //     }
  //   };
  return (
    <div className="u-h-100vh u-flex-center">
      <img
        src="https://images.unsplash.com/photo-1530533718754-001d2668365a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMGJsdWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        alt=""
        className="u-w-100p u-h-100vh u-absolute"
      />
      <div className="main-container u-flex u-w-65p u-br-20 u-of-hidden u-bg-w u-zi-1">
        <div
          className="u-flex-center pure-u-1-2 u-bg-bunker u-br-16 "
          ref={loginWallpaper}
        ></div>
        <div className="login-container pure-u-1-2 u-bg-w">
          <div className="u-w-65p">
            <div className="login-profile-animation" ref={loginProfile}></div>
            <FormControl
              className="product-select"
              error={erroremail}
              style={{ width: "100%", background: "red" }}
            >
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
                className="required"
              >
                Email
              </InputLabel>

              <TextField
                fullWidth
                error={erroremail}
                id="standard-error"
                placeholder="Enter email"
                value={email}
                name="email"
                onChange={handleChange}
                variant="outlined"
                helperText={
                  erroremail ? (
                    <span
                      className="error"
                      style={{
                        color: "orange",
                        paddingTop: "10px",
                        display: "inline-block",
                        fontWeight: "bold",
                      }}
                    >
                      {email === "" ? "Please enter email" : "Invalid email"}
                    </span>
                  ) : null
                }
                style={{ width: "100%", background: "red" }}
              />
            </FormControl>
            <FormControl className="product-select" error={errorname}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
                className="required"
              >
                Password
              </InputLabel>
              <TextField
                error={errorname}
                id="standard-error"
                placeholder="Enter Password"
                value={password}
                name="password"
                onChange={handleChange}
                variant="outlined"
                helperText={
                  errorname ? (
                    <span
                      className="error"
                      style={{
                        color: "orange",
                        paddingTop: "10px",
                        display: "inline-block",
                        fontWeight: "bold",
                      }}
                    >
                      {password === ""
                        ? "Please Fill Password"
                        : "Alphabets Only"}
                    </span>
                  ) : null
                }
              />
            </FormControl>
            <Button
              className="login-submit"
              style={{ marginTop: "20px", width: "25%" }}
              variant="contained"
              color="primary"
              disableElevation
              onClick={() => {
                handleValidation();
              }}
            >
              Submit
            </Button>
            <div className="bottom-img-urls u-flex-center u-mt-12">
              <img
                src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
                alt=""
                width="32"
                height="32"
              />
              <img
                src="https://play-lh.googleusercontent.com/5pZMqQYClc5McEjaISPkvhF8pDmlbLqraTMwk1eeqTlnUSjVxPCq-MItIrJPJGe7xW4"
                alt=""
                width="32"
                height="32"
              />
              <img
                src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
                alt=""
                width="32"
                height="32"
              />
            </div>
          </div>

          {/* <Snackbar
            open={openSnackbar}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            autoHideDuration={2000}
            onClose={() => setOpenSnackbar(false)}
          >
            <Alert
              variant="filled"
              onClose={() => setOpenSnackbar(false)}
              severity="success"
            >
              login Successful
            </Alert>
          </Snackbar> */}
        </div>
      </div>
    </div>
  );
};
export default Login;

// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
// const Login = () => {
//   const slideImages = [
//     {
//       url:
//         "https://t3.ftcdn.net/jpg/03/87/81/02/360_F_387810276_Th7ewqNsw0Alnf5iEuOUCHA8c0dtOhAh.jpg",
//       caption: "Slide 1",
//     },
//     {
//       url:
//         "https://t3.ftcdn.net/jpg/03/87/81/02/360_F_387810276_Th7ewqNsw0Alnf5iEuOUCHA8c0dtOhAh.jpg",
//       caption: "Slide 2",
//     },
//     {
//       url:
//         "https://t3.ftcdn.net/jpg/03/87/81/02/360_F_387810276_Th7ewqNsw0Alnf5iEuOUCHA8c0dtOhAh.jpg",
//       caption: "Slide 3",
//     },
//   ];

//   return (
//     <div className="">
//       <div className="slide-container">
//         <Slide>
//           {slideImages.map((slideImage, index) => (
//             <div className="each-slide" key={index}>
//               <div style={{ backgroundImage: `url(${slideImage.url})` }}>
//                 <span>{slideImage.caption}</span>
//               </div>
//             </div>
//           ))}
//         </Slide>
//       </div>{" "}
//     </div>
//   );
// };

// export default Login;

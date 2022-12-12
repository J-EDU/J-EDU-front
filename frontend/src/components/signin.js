import React, { useState } from 'react';
import cookies from "react-cookies";
import axios from 'axios';
import base64 from "base-64";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Checkbox,
	Stack,
	Link,
	Button,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';

const initialStateData = {
	email: "",
	password: "",

}

function Signin() {
    const [showPassword, setShowPassword] = useState(false);
	const [data, setData] = useState(initialStateData)

	const handleChange = (e) => {
		setData((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	}

	async function Login(e) {
		e.preventDefault();
		const user = {
			email: data.email,
			password: data.password,

		};

		const encoded = base64.encode(`${user.email}:${user.password}`)
		const res = await axios.post(`${process.env.REACT_APP_SERVER}/root/user/login`,
			{}, {
			headers: {
				Authorization: `Basic ${encoded}`,
			},
		}
		).then((response) => {
      cookies.save("token", response.data.user.token)
    })
		// cookies.save('token', res.data.token)
	}
	return (
		<div id="wrapper">
        <div id="left">
          <div id="signin">
            <div className="logo">
              <img src="https://image.ibb.co/hW1YHq/login-logo.png" alt="Sluralpright" />
            </div>
            <form>
              <div>
                <label>Email or username</label>
                <input type="text" className="text-input" onChange={(e) => handleChange(e)} />
              </div>
              <div>
                <label>Password</label>
					
                <input type="password" className="text-input" onChange={(e) => handleChange(e)}  />
				
              </div>
              <button type="submit" className="primary-btn" onClick={Login}>Sign In</button>
            </form>
            <div className="links">
            </div>
            <div className="or">
              <hr className="bar" />
              <span>OR</span>
              <hr className="bar" />
            </div>
            <a href="#" className="secondary-btn">Create an account</a>
          </div>
          <footer id="main-footer">
            <p>Copyright © 2022, Sluralpright All Rights Reserved J-EDU</p>
            <div>
            </div>
          </footer>
        </div>
        <div id="right">
          <div id="showcase">
            <div className="showcase-content">
              
            </div>
          </div>
        </div>
      </div>
	);
}
export default Signin;

import React from 'react'
import { Link } from 'react-router-dom'
import CanvasBackground from './CanvasBackground'
const Login = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
    <CanvasBackground/>
      <div class="card h-full w-full bg-white/40 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100  ">
      <input
        value=""
        class="blind-check"
        type="checkbox"
        id="blind-input"
        name="blindcheck"
        hidden="true"
      />

      <label for="blind-input" class="blind_input ">
        <span class="hide">Hide</span>
        <span class="show">Show</span>
      </label>

      <form class="form ">
        <div class="title">Sign In</div>

        <label class="label_input" for="email-input">Email</label>
        <input
          spellcheck="false"
          class="input"
          type="email"
          name="email"
          id="email-input"
        />

        <div class="frg_pss">
          <label class="label_input" for="password-input">Password</label>
          <a href="">Forgot password?</a>
        </div>
        <input
          spellcheck="false"
          class="input"
          type="text"
          name="password"
          id="password-input"
        />
        <div className='flex justify-between w-full items-center'>

        <button  className='submit px-2' type="button">Submit</button>
        <Link to='/signup' class="signup p-2 border rounded-lg bg-black text-white">Register</Link>

        </div>
      </form>

      {/* <label for="blind-input" class="avatar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 64 64"
          id="monkey"
        >
          <ellipse cx="53.7" cy="33" rx="8.3" ry="8.2" fill="#89664c"></ellipse>
          <ellipse cx="53.7" cy="33" rx="5.4" ry="5.4" fill="#ffc5d3"></ellipse>
          <ellipse cx="10.2" cy="33" rx="8.2" ry="8.2" fill="#89664c"></ellipse>
          <ellipse cx="10.2" cy="33" rx="5.4" ry="5.4" fill="#ffc5d3"></ellipse>
          <g fill="#89664c">
            <path
              d="m43.4 10.8c1.1-.6 1.9-.9 1.9-.9-3.2-1.1-6-1.8-8.5-2.1 1.3-1 2.1-1.3 2.1-1.3-20.4-2.9-30.1 9-30.1 19.5h46.4c-.7-7.4-4.8-12.4-11.8-15.2"
            ></path>
            <path
              d="m55.3 27.6c0-9.7-10.4-17.6-23.3-17.6s-23.3 7.9-23.3 17.6c0 2.3.6 4.4 1.6 6.4-1 2-1.6 4.2-1.6 6.4 0 9.7 10.4 17.6 23.3 17.6s23.3-7.9 23.3-17.6c0-2.3-.6-4.4-1.6-6.4 1-2 1.6-4.2 1.6-6.4"
            ></path>
          </g>
          <path
            d="m52 28.2c0-16.9-20-6.1-20-6.1s-20-10.8-20 6.1c0 4.7 2.9 9 7.5 11.7-1.3 1.7-2.1 3.6-2.1 5.7 0 6.1 6.6 11 14.7 11s14.7-4.9 14.7-11c0-2.1-.8-4-2.1-5.7 4.4-2.7 7.3-7 7.3-11.7"
            fill="#e0ac7e"
          ></path>
          <g fill="#3b302a" class="monkey-eye-nose">
            <path
              d="m35.1 38.7c0 1.1-.4 2.1-1 2.1-.6 0-1-.9-1-2.1 0-1.1.4-2.1 1-2.1.6.1 1 1 1 2.1"
            ></path>
            <path
              d="m30.9 38.7c0 1.1-.4 2.1-1 2.1-.6 0-1-.9-1-2.1 0-1.1.4-2.1 1-2.1.5.1 1 1 1 2.1"
            ></path>
            <ellipse
              cx="40.7"
              cy="31.7"
              rx="3.5"
              ry="4.5"
              class="monkey-eye-r"
            ></ellipse>
            <ellipse
              cx="23.3"
              cy="31.7"
              rx="3.5"
              ry="4.5"
              class="monkey-eye-l"
            ></ellipse>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 64 64"
          id="monkey-hands"
        >
          <path
            fill="#89664C"
            d="M9.4,32.5L2.1,61.9H14c-1.6-7.7,4-21,4-21L9.4,32.5z"
          ></path>
          <path
            fill="#FFD6BB"
            d="M15.8,24.8c0,0,4.9-4.5,9.5-3.9c2.3,0.3-7.1,7.6-7.1,7.6s9.7-8.2,11.7-5.6c1.8,2.3-8.9,9.8-8.9,9.8
	s10-8.1,9.6-4.6c-0.3,3.8-7.9,12.8-12.5,13.8C11.5,43.2,6.3,39,9.8,24.4C11.6,17,13.3,25.2,15.8,24.8"
          ></path>
          <path
            fill="#89664C"
            d="M54.8,32.5l7.3,29.4H50.2c1.6-7.7-4-21-4-21L54.8,32.5z"
          ></path>
          <path
            fill="#FFD6BB"
            d="M48.4,24.8c0,0-4.9-4.5-9.5-3.9c-2.3,0.3,7.1,7.6,7.1,7.6s-9.7-8.2-11.7-5.6c-1.8,2.3,8.9,9.8,8.9,9.8
	s-10-8.1-9.7-4.6c0.4,3.8,8,12.8,12.6,13.8c6.6,1.3,11.8-2.9,8.3-17.5C52.6,17,50.9,25.2,48.4,24.8"
          ></path>
        </svg>
      </label> */}

        <label for="blind-input" class="avatar">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 64 64" id="monkey">
            
            <circle cx="32" cy="32" r="16" fill="#e0ac7e" />
            
            <circle class="monkey-eye-l" cx="27" cy="30" r="2" fill="#3b302a" />
            <circle class="monkey-eye-r" cx="37" cy="30" r="2" fill="#3b302a" />
            
            <rect x="19" y="36" width="26" height="12" rx="3" fill="#d1e0e0" />
            <line x1="22" y1="42" x2="12" y2="34" stroke="#d1e0e0" stroke-width="2" />
            <line x1="42" y1="42" x2="52" y2="34" stroke="#d1e0e0" stroke-width="2" />

            <rect x="20" y="16" width="24" height="10" rx="3" fill="#69a3ff" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 64 64"
            id="monkey-hands"
          >
            <path
              fill="#69a3ff"
              d="M9.4,32.5L2.1,61.9H14c-1.6-7.7,4-21,4-21L9.4,32.5z"
            ></path>
            <path
              fill="#FFD6BB"
              d="M15.8,24.8c0,0,4.9-4.5,9.5-3.9c2.3,0.3-7.1,7.6-7.1,7.6s9.7-8.2,11.7-5.6c1.8,2.3-8.9,9.8-8.9,9.8
	              s10-8.1,9.6-4.6c-0.3,3.8-7.9,12.8-12.5,13.8C11.5,43.2,6.3,39,9.8,24.4C11.6,17,13.3,25.2,15.8,24.8"
            ></path>
            <path
              fill="#69a3ff"
              d="M54.8,32.5l7.3,29.4H50.2c1.6-7.7-4-21-4-21L54.8,32.5z"
            ></path>
            <path
              fill="#FFD6BB"
              d="M48.4,24.8c0,0-4.9-4.5-9.5-3.9c-2.3,0.3,7.1,7.6,7.1,7.6s-9.7-8.2-11.7-5.6c-1.8,2.3,8.9,9.8,8.9,9.8
  	            s-10-8.1-9.7-4.6c0.4,3.8,8,12.8,12.6,13.8c6.6,1.3,11.8-2.9,8.3-17.5C52.6,17,50.9,25.2,48.4,24.8"
            ></path>
          </svg>


        </label>
      

        

    </div>
    </div>
  )
}

export default Login

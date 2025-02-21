import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Link } from 'react-router-dom'
import CanvasBackground from './CanvasBackground'
const SignUp = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <CanvasBackground />
      <div class="card h-full w-full bg-white/40 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100  ">
        <input
          value=""
          class="blind-check"
          type="checkbox"
          id="blind-input"
          name="blindcheck"
          hidden="true"
        />

        <label for="blind-input" class="blind_input">
          <span class="hide">Hide</span>
          <span class="show">Show</span>
        </label>
        <input
          value=""
          class="blind-check2"
          type="checkbox"
          id="blind-input2"
          name="blindcheck2"
          hidden="true"
        />

        <label for="blind-input2" class="blind_input2">
          <span class="hide">Hide</span>
          <span class="show">Show</span>
        </label>
        

        <form class="form ">
          <div class="title">Sign Up</div>

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
          <div class="frg_pss">
            <label class="label_input" for="password-input">Confirm Password</label>
          </div>
          <input
            spellcheck="false"
            class="input"
            type="text"
            name="confirmpassword"
            id="confirm-password-input"
          />
          <div className='flex justify-between w-full items-center'>

            <button className='submit px-2  '  type="button">Submit</button>
            <Link to='/' class="signup p-2 border rounded-lg bg-black text-white">Login</Link>

          </div>
        </form>
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

export default SignUp

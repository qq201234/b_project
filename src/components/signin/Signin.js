import React from 'react';
import Signin_form from './signin_form';
import Signin_wrapper from './signin_wrapper';
import './signin.scss';

function signin() {
  return (
    <>
      <div className="signin">
        {/* 標題 */}
        <div className="signin_title">
          <h2>
            <span>會</span>員登入
          </h2>
        </div>

        <div className="signin_container">
          <Signin_form />

          {/*  */}
          <Signin_wrapper />
        </div>
      </div>
    </>
  )
}
export default signin;
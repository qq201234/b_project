import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineGoogle } from 'react-icons/ai';

export default function signin_wrapper() {
  return (
    <>
      <div className="signin_wrapper">
        <button className="btnSignin">登入</button><br />
        <button className="btnFacebook">
          <AiFillFacebook />使用Facebook登入
        </button><br />
        <button className="btnGoogle">
          <AiOutlineGoogle />使用Google登入
        </button>
        <div className="signin_wrap">
          <a href="#" >免費註冊會員</a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="#" >忘記密碼</a>
        </div>
      </div>
    </>
  )
}
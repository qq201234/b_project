import React from 'react';
import Form from 'react-bootstrap/Form';

export default function signin_form() {
  return (
    <>
      <Form>
        <Form.Group className="" controlId="">
          <Form.Label>帳號</Form.Label>
          <Form.Control type="text" placeholder="請輸入帳號" />
        </Form.Group>
        <Form.Group className="" controlId="">
          <Form.Label>密碼</Form.Label>
          <Form.Control type="password" placeholder="請輸入密碼" />
        </Form.Group>
        <Form.Check label="記住我" />
      </Form>
    </>
  )
}
import React from 'react';
import { InputGroup } from 'react-bootstrap';

export default function right_filter() {
  return (
    <>
      <div className='right_filter'>
        <button className='btn1'>已出貨</button>
        <button className='btn2'>未出貨</button>
        {/* 右側搜尋 */}
        <div className='right_search'>
          <InputGroup>
            <input type="text" placeholder="搜尋訂單..."></input>
            <button className='btn3'>搜尋</button>
          </InputGroup>
        </div>
      </div>
    </>
  );
}

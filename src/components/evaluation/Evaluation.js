import React from 'react';
import Status from './status';
import Filter from './filter';
import Table from './table';
import Page from './page';
import "./evaluation.scss";
import { AiFillHome } from 'react-icons/ai';

function evaluation() {
    return (
        <>
            <div className='evaluation'>
                {/* 標題 */}
                <div className="evaluation_title">
                    <h2>
                        <span>評</span>價總覽
                    </h2>
                </div>

                <div className='evaluation_container'>
                    {/* 左側 */}
                    <div className='evaluation_left'>
                        {/* 左側標題 */}
                        <div>
                            <h5>
                                <AiFillHome />首頁 / <span>評價總覽</span>
                            </h5>
                        </div>
                        <Status />
                    </div>

                    {/* 右側 */}
                    <div className='evaluation_right'>
                        {/* 右側篩選 */}
                        <Filter />
                        {/* 右側內容 */}
                        <Table />
                        {/* 分頁 */}
                        <div className='right_pages'>
                            <Page />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default evaluation
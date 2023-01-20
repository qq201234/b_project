import React from 'react';
import Status from './status';
import Card from './card';
import Page from './page';
import "./collect.scss";
import { AiFillHome } from 'react-icons/ai';

function collect() {
    return (
        <>
            <div className='collect'>
                {/* 標題 */}
                <div className="collect_title">
                    <h2>
                        <span>收</span>藏清單
                    </h2>
                </div>

                <div className='collect_container'>
                    {/* 左側 */}
                    <div className='collect_left'>
                        {/* 左側標題 */}
                        <div>
                            <h5>
                                <AiFillHome />首頁 / <span>收藏清單</span>
                            </h5>
                        </div>
                        <Status />
                    </div>

                    {/* 右側 */}
                    <div className='collect_right'>
                        {/* 右側內容 */}
                        <div className='right_cards'>
                            <Card />
                            <Card />
                            <Card />
                        </div>
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
export default collect
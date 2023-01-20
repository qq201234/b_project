import React from 'react';
import Star from './star';

export default function right_table() {
    return (
        <>
            <div className='right_table'>
                <table>
                    <thead>
                        <tr>
                            <th>訂單編號</th>
                            <th>日期</th>
                            <th>評分</th>
                            <th>評價內容</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span>2022121496</span>
                            </td>
                            <td>2022/12/14</td>
                            <td> <Star /> </td>
                            <td>阿水推薦, 品質保證!</td>
                            <td>
                                <button>查看詳細</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>2022121496</span>
                            </td>
                            <td>2022/12/14</td>
                            <td> <Star /> </td>
                            <td>阿水推薦, 品質保證!</td>
                            <td>
                                <button>查看詳細</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>2022121496</span>
                            </td>
                            <td>2022/12/14</td>
                            <td> <Star /> </td>
                            <td>阿水推薦, 品質保證!</td>
                            <td>
                                <button>查看詳細</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
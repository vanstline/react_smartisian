import React, { Component } from 'react';

class SubNavList extends Component {

    render() {

        return (
            <div className="nav-sub">
                <div className="nav-sub-wrapper">
                    <div className="container">
                        <ul className="nav-list">
                            <li><a href="">首页</a></li>
                            <li><a href="">手机</a></li>
                            <li><a href="">“足迹系列”手感膜</a></li>
                            <li className="active"><a href="">官方配件</a></li>
                            <li><a href="">周边产品</a></li>
                            <li><a href="">第三方配件</a></li>
                            <li><a href="">全部商品</a></li>
                            <li><a href="">服务</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubNavList;
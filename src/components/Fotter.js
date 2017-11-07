import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../css/Fotter_bar.css'
import '../static/font/iconfont.css'

const Icons = {
    icon1: 'iconfont icon-home',
    icon2: 'iconfont icon-shangpin',
    icon3: 'iconfont icon-dingdan',
    icon4: 'iconfont icon-wo',
}
const SelectIcons = {
    icon1: 'iconfont icon-home1',
    icon2: 'iconfont icon-product',
    icon3: 'iconfont icon-order',
    icon4: 'iconfont icon-woh2x',
}

class TabBarExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: false,
        };
    }

    render() {
        return (
            <div className="fotter_bar">
                <ul>
                    <li>
                        <NavLink
                            to='/'
                            activeClassName="selected"
                            activeStyle={{color: '#108ee9'}}
                            exact={true}
                        >
                            <i className={Icons.icon1}></i>
                            <p>首页</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/shop_lists'
                            activeClassName="selected"
                            activeStyle={{color: '#108ee9'}}
                        >
                            <i className={Icons.icon2}></i>
                            <p>商品</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/orders'
                            activeClassName="selected"
                            activeStyle={{color: '#108ee9'}}
                        >
                            <i className={Icons.icon3}></i>
                            <p>订单</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/my'
                            activeClassName="selected"
                            activeStyle={{color: '#108ee9'}}
                        >
                            <i className={Icons.icon4}></i>
                            <p>我的</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default TabBarExample;
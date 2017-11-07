import React, {Component} from 'react';
import {NavBar, Icon} from 'antd-mobile';

class Shop_lists extends Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    rightContent={[
                        <Icon key="0" type="search" style={{marginRight: '16px'}}/>,
                        <Icon key="1" type="ellipsis"/>,
                    ]}
                >商品</NavBar>
            </div>
        )
    }
}

export default Shop_lists;
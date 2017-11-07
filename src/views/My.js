import React, {Component} from 'react';
import {NavBar, Icon} from 'antd-mobile';

class My extends Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    rightContent={[
                        <Icon key="0" type="search" style={{marginRight: '16px'}}/>,
                        <Icon key="1" type="ellipsis"/>,
                    ]}
                >我的</NavBar>
            </div>
        )
    }
}

export default My;
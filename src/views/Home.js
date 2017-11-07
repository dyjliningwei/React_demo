import React, {Component} from 'react';
import {NavBar, Icon, Button, WhiteSpace, WingBlank} from 'antd-mobile';
import logo from '../logo.svg';
import '../css/Home.css';

class Home extends Component {
    render(){
        return(
            <div>
                <NavBar
                    mode="light"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >首页</NavBar>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <WingBlank>
                    <Button>default</Button><WhiteSpace/>
                </WingBlank>
            </div>
        )
    }
}

export default Home;
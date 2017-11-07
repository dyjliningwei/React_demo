import React, {Component} from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import TabBarExample from '../components/Fotter'
import Home from '../views/Home'
import Shop_lists from '../views/Shop_lists'
import Orders from '../views/Orders'
import My from '../views/My'

class RouterItem extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route path="/home" component={Home}></Route>
                            <Route path="/shop_lists" component={Shop_lists}></Route>
                            <Route path="/orders" component={Orders}></Route>
                            <Route path="/my" component={My}></Route>
                        </Switch>
                        <TabBarExample/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default RouterItem;
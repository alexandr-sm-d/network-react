import React, {Suspense} from 'react';
// import './App.css';
import Navigation from './components/Navigation/Navigation';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import {Link, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {getAuthUserDataTC} from './redux/reducers/auth-reducer';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {intitializingTC} from './redux/reducers/app-reducer';
import Preloader from './common/preloader/Preloader';
import 'antd/dist/antd.css'
import {Layout} from "antd";
import style from "./AppAntd.module.css";
import {InstagramOutlined, GithubFilled, FacebookOutlined} from "@ant-design/icons";

const {Header, Footer, Sider, Content} = Layout;
const Dev = React.lazy(() => import('./components/Dev/Dev'))

class App extends React.Component {

    componentDidMount() {
        this.props.intitializing()
    }

    render() {

        {
            if (!this.props.appIsReady) {
                return (
                    <Preloader/>
                )
            }
        }

        return (
            <div className={style.container}>
                <div className={style.mainCol}>
                    <div style={{width: '60%'}}>
                        <Layout className={style.layout}>
                            <Header className={style.headerAtdn}>
                                <HeaderContainer/>
                            </Header>

                            <Layout>
                                <Sider className={style.navigationAtdn}>
                                    <Navigation/>
                                </Sider>

                                <Content className={style.contentAtdn}>
                                    <main>
                                        <Switch>
                                            <Route exact path='/' render={() => <Redirect to='/profile'/>}/>
                                            <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                                            <Route path='/users' render={() => <UsersContainer/>}/>
                                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                                            <Route path='/musicList' component={Music}/>
                                            <Route path='/settingsApp' component={Settings}/>
                                            <Route path='/login' component={Login}/>
                                            <Route path='/dev' render={() =>
                                                <Suspense fallback={<div>Loading...</div>}>
                                                    <Dev/>
                                                </Suspense>
                                            }/>
                                        </Switch>
                                    </main>
                                </Content>
                            </Layout>

                            <Footer className={style.foot}>
                                <div className={style.content}>
                                    <a href='https://github.com/alexandr-sm-d'>
                                        <GithubFilled style={{
                                            paddingRight: '10px',
                                            color: '#233C47',
                                        }}/>
                                    </a>
                                    <InstagramOutlined style={{paddingRight: '10px'}}/>
                                    <FacebookOutlined style={{paddingRight: '10px'}}/>
                                </div>
                            </Footer>
                        </Layout>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    appIsReady: state.app.appIsReady,
})

const mapDispatchToProps = (dispatch) => ({
    getAuthUserData: () => {
        dispatch(getAuthUserDataTC())
    },
    intitializing: () => {
        dispatch(intitializingTC())
    },
})

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))(App)

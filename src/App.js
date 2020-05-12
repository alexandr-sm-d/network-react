import React, {Suspense} from 'react';
// import './App.css';
import Navigation from './components/Navigation/Navigation';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import {Route, withRouter} from 'react-router-dom';
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
import classesStyle from "./AppAntd.module.css";

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

        // return (
        //     <div className='wrapper'>
        //         <div className='container'>
        //             <HeaderContainer />
        //             <Navigation />
        //             <div className="content-container">
        //                 <main className='content'>
        //                     <Route path='/profile/:userID?' render={() => <ProfileContainer />} />
        //                     <Route path='/users' render={() => <UsersContainer />} />
        //                     <Route path='/dialogs' render={() => <DialogsContainer />} />
        //                     <Route path='/musicList' component={Music} />
        //                     <Route path='/settingsApp' component={Settings} />
        //                     <Route path='/login' component={Login} />
        //                     <Route path='/dev' render={() =>
        //                         <Suspense fallback={<div>Loading...</div>}>
        //                             <Dev />
        //                         </Suspense>
        //                     } />
        //                 </main>
        //             </div>
        //             <footer className='foot'>
        //
        //             </footer>
        //         </div>
        //     </div>
        // );

        return (
            <div className={classesStyle.container}>
                <div style={{width: '60%'}}>
                    <Layout className={classesStyle.layout}>
                        <Header className={classesStyle.headerAtdn}>
                            <HeaderContainer/>
                        </Header>

                        <Layout>
                            <Sider className={classesStyle.navigationAtdn}>
                                <Navigation/>
                            </Sider>

                            <Content className={classesStyle.contentAtdn}>
                                <main>
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
                                </main>
                            </Content>
                        </Layout>

                        <Footer className={classesStyle.foot}>Footer</Footer>
                    </Layout>
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

import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {Input} from '../../common/FormsControls/FormsControls';
import {validatorEmptyPost} from '../../utlis/validators/validatorsProfile';
import {login} from '../../redux/reducers/auth-reducer';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import style from './Login.module.css';

const Login = (props) => {
    const login = (formData) => {
        props.login(formData)
    }

    if (props.isAuth) return <Redirect to="/profile"/>

    return (
        <div className={style.loginPage}>
            <h3 className={style.sentence}>You need to login in this app!</h3>
            <LoginReduxForm onSubmit={login} captchaURL={props.captchaURL}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    style={{
                        height: '30px',
                    }}
                    // className={style.passwordField}
                    type="text"
                    placeholder="Enter your email"
                    component={Input}
                    validate={[validatorEmptyPost]}
                    name={"email"}/>
            </div>
            <div>
                <Field
                    style={{
                        height: '30px',
                        marginTop: '10px',
                    }}
                    // className={style.nameField}
                    type="text"
                    placeholder="Enter your password"
                    component={Input}
                    validate={[validatorEmptyPost]}
                    type="password"
                    name={"password"}/>
            </div>
            <div>
                <Field
                    style={{position: 'relative', top: '2px'}}
                    type="checkbox"
                    component={'input'}
                    name={"rememberMe"}/> remember me
            </div>
            {props.error &&
            <div className={style.commonError}>
                {props.error}
            </div>}
            <div>
                <button>Log in</button>
            </div>
            <div className={style.captcha}>
                {props.captchaURL && <Field placeholder={'Enter symbols from image'}
                                            component={Input} name={'captcha'}
                />}
            </div>
            <div className={style.captcha}>
                {props.captchaURL && <img src={props.captchaURL}/>}
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captcha,
})

export default connect(mapStateToProps, {login})(Login);
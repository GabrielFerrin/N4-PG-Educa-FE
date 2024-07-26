import React from 'react'
import './login.css'

export default function Login() {
    return (
        <div className='body-login-cmp'>
            <div>

                <div className='header-login-cmp'>
                    <div className='logo-cmp'>
                        <span>BRUJULA</span>
                    </div>
                    <button className='registrarse-boton-cmp'>Resgistrarse</button>
                </div>

                <div className='main-login-cmp'>

                    <div className='box-login-cmp'>
                        <h2>Iniciar Sesion</h2>

                        <form action="" className='from-login-cmp'>
                            <div className='input-box-cmp'>
                                <div className='logo-input-cmp'>
                                    <img src='' alt="" className='' />
                                </div>
                                <input
                                    type="email"
                                    placeholder='Email'
                                    name='email'
                                    onChange=''
                                    className=''
                                />
                            </div>

                            <div className='input-box-cmp'>
                                <div className='logo-input-cmp'>
                                    <img src='' alt="" className='' />
                                </div>
                                <input
                                    type="password"
                                    placeholder='Password'
                                    name='password'
                                    onChange=''
                                    className='' />
                            </div>

                            <button className='from-button-cmp'>iniciar</button>
                        </form>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

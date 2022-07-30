import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Button from "../button/Button";
import {logout} from "../../../store/reducers/userReducer";
import {FiLogOut} from "react-icons/fi";
import {BsFillSunFill} from "react-icons/bs";
import './navbar.scss'

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isAuth} = useSelector(state => state.user)

    return (
        <div className='navbar__wrapper'>
            {window.location.pathname === '/'
                ? <span className='text-2xl font-bold'>Новые статьи</span>
                : <span className='text-2xl font-bold'>Популярные категории</span>
            }
            {isAuth
                ?
                <div className='flex items-center'>
                    <div className='logout__btn' onClick={() => dispatch(logout())}>
                        <FiLogOut size={16} className='mr-2'/>
                        Выйти
                    </div>
                    <BsFillSunFill size={20} className='mx-6 cursor-pointer'/>
                    <img className='avatar' src='images/briley.jpg' alt='user-avatar'/>
                </div>
                :
                <div className='auth__btns'>
                    <Button className='login__btn' onClick={() => navigate('/login')}>
                        Войти
                    </Button>
                    <Button className='register__btn' onClick={() => navigate('/register')}>
                        Зарегестрироваться
                    </Button>
                </div>
            }
        </div>
    );
};

export default Navbar;
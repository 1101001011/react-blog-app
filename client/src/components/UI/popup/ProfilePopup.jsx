import React from 'react'
import {useNavigate} from "react-router-dom";
import {AiOutlineArrowRight, AiOutlineUser} from "react-icons/ai"
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../store/reducers/userReducer";
import {getUserProfile} from "../../../store/actions/userProfileActions";
import {setProfilePopupDisplay} from "../../../store/reducers/popupReducer";
import Overlay from "../overlay/Overlay";
import './popup.scss'

const ProfilePopup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {profilePopupDisplay} = useSelector(state => state.popup)
    const {currentUser} = useSelector(state => state.user)

    return (
        <div
            style={{display: profilePopupDisplay}}
            onClick={() => dispatch(setProfilePopupDisplay('none'))}
        >
            <Overlay/>
            <div
                className='absolute top-16 right-40 py-2 w-44 bg-white rounded-md shadow-2xl'
            >
                <div
                    className='profile__popup__item'
                    onClick={() => dispatch(getUserProfile({user: currentUser, navigate}))}
                >
                    <AiOutlineUser size={20}/>
                    Профиль
                </div>
                <div
                    className='profile__popup__item'
                    onClick={() => dispatch(logout())}
                >
                    <AiOutlineArrowRight size={20}/>
                    Выйти
                </div>
            </div>
        </div>
    );
};

export default ProfilePopup;
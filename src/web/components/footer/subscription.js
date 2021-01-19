import React, { useState } from 'react';

// css
import './css/_subscription.scss';


// tools

import Switch from 'react-switch';

// reactstrap

import { Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Subscription = () => {



    let [all, setAll] = useState(false)
    let [day, setDay] = useState(false)
    let [week, setWeek] = useState(false)
    let [work, setWork] = useState(false)


    function allfnc(checked, event) {

        setAll(checked)




        if (checked === true && event.target.classList[0] === 'react-switch-handle') {
            event.target.parentNode.classList.add('data')
        }
        else {
            event.target.parentNode.classList.remove('data')
        }

        // handle
        if (checked === true && event.target.classList[0] === 'react-switch-bg') {

            console.log(event.target)

            event.target.parentNode.classList.add('active')
        }
        else {
            event.target.parentNode.classList.remove('active')
        }

    }


    function dayfnc(checked, event) {
        setDay(checked)

        if (checked === true && event.target.classList[0] === 'react-switch-handle') {
            event.target.parentNode.classList.add('data')
        }
        else {
            event.target.parentNode.classList.remove('data')
        }

        // handle
        if (checked === true && event.target.classList[0] === 'react-switch-bg') {


            event.target.parentNode.classList.add('active')
        }
        else {
            event.target.parentNode.classList.remove('active')
        }
    }

    function weekfnc(checked, event) {
        setWeek(checked)


        if (checked === true && event.target.classList[0] === 'react-switch-handle') {
            event.target.parentNode.classList.add('data')
        }
        else {
            event.target.parentNode.classList.remove('data')
        }

        // handle
        if (checked === true && event.target.classList[0] === 'react-switch-bg') {

            console.log(event.target)

            event.target.parentNode.classList.add('active')
        }
        else {
            event.target.parentNode.classList.remove('active')
        }
    }

    function workfnc(checked, event) {
        setWork(checked)


        if (checked === true && event.target.classList[0] === 'react-switch-handle') {
            event.target.parentNode.classList.add('data')
        }
        else {
            event.target.parentNode.classList.remove('data')
        }

        // handle
        if (checked === true && event.target.classList[0] === 'react-switch-bg') {

            console.log(event.target)

            event.target.parentNode.classList.add('active')
        }
        else {
            event.target.parentNode.classList.remove('active')
        }
    }

    return (
        <div className='subscription'>
            <div className='subscription__wrapper'>
                <div className='subscription__title'>
                    <h4>Xəbərlərə abunə olun</h4>
                </div>
                <div className='subscription__wrapperData'>
                    <div className='subscription__switch'>
                        <div className='subscription__switch--item'>
                            <Switch
                                onChange={allfnc}
                                checked={all}
                                onColor="#E8E8E8"
                                onHandleColor="#fff"
                                handleDiameter={7}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={13}
                                width={28}
                                className="react-switch"
                            />
                            <span>
                                Hamısı
                        </span>
                        </div>
                        <div className='subscription__switch--item'>
                            <Switch
                                onChange={dayfnc}
                                checked={day}
                                onColor="#B4B4B4"
                                onHandleColor="#fff"
                                handleDiameter={7}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={13}
                                width={28}
                                className="react-switch"
                            />
                            <span>
                                Günün ən yaxşısı
                        </span>
                        </div>
                        <div className='subscription__switch--item'>
                            <Switch
                                onChange={weekfnc}
                                checked={week}
                                onColor="#B4B4B4"
                                onHandleColor="#fff"
                                handleDiameter={7}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={13}
                                width={28}
                                className="react-switch"
                            />
                            <span>
                                Həftənin ən yaxşısı
                        </span>
                        </div>
                        <div className='subscription__switch--item'>
                            <Switch
                                onChange={workfnc}
                                checked={work}
                                onColor="#B4B4B4"
                                onHandleColor="#fff"
                                handleDiameter={7}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={13}
                                width={28}
                                className="react-switch"
                            />
                            <span>
                                Biznes ideyaları
                        </span>
                        </div>
                    </div>
                    <div className='subscription__wrapperData--buttonBox'>
                        <Input placeholder={'E-poçt ünvanı'} type='text' />
                        <NavLink to={''} className='subscription__subBtn'>
                            Abunə ol
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscription;

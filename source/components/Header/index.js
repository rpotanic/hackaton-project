import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import './style.scss'

import { authotizationF } from '../../actions/info'

import logo from '../../img/mainLogo.png'

import Input from '../Input'
import Button from '../Button'
import Filter from '../Filter'

class Header extends React.Component {
    state = {
        info: {
            login: '',
            password: ''
        },
        show: false,
        filterShow: false
    }

    componentDidMount() {
        const window = document.getElementsByTagName('body')[0];


        window.addEventListener('click', this.windowEvent);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.windowEvent);
    }

    windowEvent = (event) => {
        const target = event.target.closest('.sign-in-form');
        if (!this.block) return;
        if (target === this.block) return;

        if (this.state.show) {
            this.setState({
                show: false
            });
        }
    };

    onRef = (node) => {
        this.block = node;
    };

    changeInput = (e) => {
        const { name, value } = e.target;

        this.setState({...this.state, info: {...this.state.info, [name]: value}})
        
    }

    onShow = () => {
        this.setState({ show: true })
    }

    onHide = () => {
        this.setState({ show: false })
    }

    onShowFilter = () => {
        this.setState({ filterShow: true })
    }

    onHideFilter = () => {
        this.setState({ filterShow: false })
    }

    renderLogin = ()=>{
        const {userType} = this.props;

        if (userType === '') {
            return <div className='login'>
                 <div onClick={this.onShow} >
                        Вход
                    </div>
                   <div> | </div>
                    <Link to='/registration'>
                        Регистрация
                    </Link>
            </div>
        } else {
            return <React.Fragment>
                <div className='login'>Личный кабинет {userType}</div>
            </React.Fragment>
        }
    }

    render() {
        return (
            <header>
                <img src={logo} style={{ width: '150px', height: '40px' }} />
                <div className='rigth'>
                  {this.renderLogin()}
                </div>
                <div ref={(ref) => this.onRef(ref)} className={`sign-in-form${this.state.show ? ' active' : ''}`}>
                    <Input label='Логин' value={this.state.value} inputProps={{
                        value: this.state.login,
                        onChange: this.changeInput,
                        name: 'login'
                    }}
                    />
                    <Input label='Пароль' value={this.state.password} inputProps={{
                        value: this.state.password,
                        onChange: this.changeInput,
                        name: 'password'
                    }} onChange={this.changeInput} />
                    <Button label='Добавить' onClick={() => this.props.authotizationF(this.state.info, this.onHide())} />
                </div>
                {/* <Filter show={this.state.filterShow} /> */}
            </header>
        )
    }
}

const mapStateToProps = state => ({
    userType: state.user.auth
});

const mapDispatchToProps = dispatchEvent => ({
    authotizationF: (...arg) => dispatchEvent(authotizationF(...arg)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

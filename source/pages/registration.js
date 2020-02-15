import React, { Component } from 'react'
import { connect } from 'react-redux';

import Input from '../components/Input';
import Button from '../components/Button'

import {addCompany} from '../actions/company'
import {authotizationF} from '../actions/info'

import '../css/regsPage.scss'

class Page extends Component {
    state = {
        name: '',
        id: 5,
        address: '',
        inn: '',
        kpp: '',
        email: '',
        phone: '',
        workersRent: [],
        workersSale: [],
        vacansies: []
    }

    changeInput = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    getInputProps = (name) => {
        return {
            value: this.state[name],
            onChange: (e) => this.changeInput(e),
            name: name
        }
    }

    sub = ()=>{
        this.props.history.goBack();
        this.props.authotizationF({
            login: 'ROGA i KOPITA',
            password: '2334'
        }, ()=>{})
    }

    submitAdd = () => this.props.addCompany(this.state, ()=>this.sub())




    render() {
        console.log(this.props);
        
        return (
            <div className='registration-page'>
                <div className='form-container'>
                    <div className='title'>Регистрация</div>
                    <div className='form'>
                        <Input inputProps={this.getInputProps('name')} label='Наименование' />
                        {/* <div className='two'> */}
                            <Input inputProps={this.getInputProps('inn')} label='ИНН' />
                            <Input inputProps={this.getInputProps('kpp')} label='КПП' />
                        {/* </div> */}

                        <Input inputProps={this.getInputProps('email')} label='E-mail' />
                        <Input inputProps={this.getInputProps('phone')} label='Телефон' />
                    </div>
                    <div className='buttons'>
                        <Button label='Зарегистрироваться' onClick={this.submitAdd}/>
                        <Button label='Отменить' />
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatchEvent => ({
    addCompany: (...arg) => dispatchEvent(addCompany(...arg)),
    authotizationF: (...arg) => dispatchEvent(authotizationF(...arg)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);

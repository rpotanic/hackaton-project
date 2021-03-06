import React, { Component } from 'react'
import { connect } from 'react-redux';

import Input from '../components/Input';
import Button from '../components/Button'

import {addWorker} from '../actions/company'
import {authotizationF} from '../actions/info'

import '../css/regsPage.scss'

class Page extends Component {
    state = {
        id: '',
        firstname: '',
        lastname: '',
        middlename: '',
        special: 'Системный администратор',
        experience: '3',
        salaryExp: '50000',
        count: 5,
        city: 'Нижний Новгород',
        competence: ['Теория сетей', 'Протоколы передачи', ''],
        count: '1',
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
    }

    submitAdd = () => this.props.addWorker(this.state,this.props.match.params.company, ()=>this.sub())




    render() {
        
        return (
            <div className='registration-page'>
                <div className='form-container'>
                    <div className='title'>Добавить работника</div>
                    <div className='form'>
                        <Input inputProps={this.getInputProps('firsname')} label='Имя' />
                        <Input inputProps={this.getInputProps('lastname')} label='Фамилия' />
                        <Input inputProps={this.getInputProps('middlename')} label='Отчество' />
                        <Input inputProps={this.getInputProps('special')} label='Специальность' />
                        {/* <div className='two'> */}
                            <Input inputProps={this.getInputProps('city')} label='Город' />
                            <Input inputProps={this.getInputProps('salaryExp')} label='Зарплата' />
                            <Input inputProps={this.getInputProps('experience')} label='Опыт работы' />
                        {/* </div> */}
                        <Input type='textarea' inputProps={this.getInputProps('competence')} label='Компетнции' />
                    </div>
                    <div className='buttons'>
                        <Button label='Добавить' onClick={this.submitAdd}/>
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
    addWorker: (...arg) => dispatchEvent(addWorker(...arg)),
    authotizationF: (...arg) => dispatchEvent(authotizationF(...arg)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);

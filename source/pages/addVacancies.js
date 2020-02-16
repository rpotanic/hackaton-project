import React, { Component } from 'react'
import { connect } from 'react-redux';

import Input from '../components/Input';
import Button from '../components/Button'

import {addVacancie} from '../actions/company'
import {authotizationF} from '../actions/info'

import '../css/regsPage.scss'

class Page extends Component {
    state = {
        id: '',
            name: 'Программист',
            companyId: '',
            salaryFrom: '30000',
            salaryTo: '50000',
            experience: '6',
            competence: ['ReactJS', 'C++'],
            type: '',
            city: 'Нижний Новгород',
            count: 1
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

    submitAdd = () => this.props.addVacancie(this.state,this.props.match.params.company, ()=>this.sub())




    render() {
        
        return (
            <div className='registration-page'>
                <div className='form-container'>
                    <div className='title'>Добавить работника</div>
                    <div className='form'>
                        <Input inputProps={this.getInputProps('name')} label='Специальность' />
                        {/* <div className='two'> */}
                            <Input inputProps={this.getInputProps('city')} label='Город' />
                            <Input inputProps={this.getInputProps('salaryFrom')} label='Зарплата от' />
                            <Input inputProps={this.getInputProps('salaryTo')} label='Зарплата lj' />
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
    addVacancie: (...arg) => dispatchEvent(addVacancie(...arg)),
    authotizationF: (...arg) => dispatchEvent(authotizationF(...arg)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);

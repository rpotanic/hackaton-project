import React, {Component} from 'react';
import {connect} from 'react-redux';

import './style.scss';
import Input from '../Input';
import Button from '../Button';

class Filter extends Component{

    state={
        city: '',
        special:'',
        company:'',
        competence: '',
        expFrom: '',
        expTo: '',
        salaryFrom: '',
        salaryTo: ''
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


    render(){
        return(
            <div className={`filter-container${this.props.show ? ' active' : ''}`}>
                <Input inputProps={this.getInputProps('city')} label='Город'/>
                <Input inputProps={this.getInputProps('special')} label='Специальность'/>
                <Input inputProps={this.getInputProps('company')} label='Компания'/>
                <Input type='textarea' inputProps={this.getInputProps('competence')} label='Компетенции'/>
                <div className='row'>
                    <div>
                    <Input inputProps={this.getInputProps('expFrom')} label='Опыт от'/>
                    <Input inputProps={this.getInputProps('expTo')} label='Опыт до'/>
                    </div>
                    <div>
                    <Input inputProps={this.getInputProps('salaryFrom')} label='Зарплата от'/>
                    <Input inputProps={this.getInputProps('salaryTo')} label='Зарплата до'/>
                    </div>
                </div>
                <Button label='Найти'/>
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
)(Filter);

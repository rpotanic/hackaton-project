import React, {Component} from 'react';
import {connect} from 'react-redux';

import Table from '../components/Table';
import Button from '../components/Button'

const tableOption = ['Специальность', 'Компетенции', 'Стаж', 'Стоимость', 'Наличие', '']

class Page extends Component {

    state={
        vac: []
    }

    componentDidMount(){
        const{companies} = this.props;
        console.log(this.props);
        
        const newArr = companies.filter((item)=> item.name === this.props.match.params.company)
        console.log(newArr);
        
        this.setState({
            vac: newArr[0].vacansies
        })
    }

    render(){
        console.log(this.state);
        const {vac}= this.state;
        
        return (
            <div className='workers' style={{width: '100%', background: 'white', marginTop: '50px'}}>
                <Table option = {tableOption} data={vac.map((item) => <tr>
                                <td style={{ fontSize: '18px' }}>{item.name}</td>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}><td style={{ fontSize: '18px' }}>{item.competence.map((comp)=> <div>{comp}</div>)}</td></div> 
                               <td  style={{ fontSize: '18px',  color: '#0500FD' }}>{item.experience} года</td>
                <td style={{ fontSize: '18px' }}> от {item.salaryFrom} до {item.salaryTo}</td>
                                <td style={{ fontSize: '18px' }}>{item.count}</td>
                                <td><Button label='Отправить запрос' className='small' onClick={()=> alert('Запрос отправлен')} /></td>
                            </tr>)}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userType: state.user.auth,
    companies: state.companies.companies
});

const mapDispatchToProps = dispatchEvent => ({
    authotizationF: (...arg) => dispatchEvent(authotizationF(...arg)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);
import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {workers} from '../lib/constanstArray'
import '../css/personalArea.scss'
import Table from '../components/Table'
import Button from '../components/Button'

const companyTable = ['Компания', 'Предложение', 'Запрос', '']
const workersTable = ['Специальность', 'Стоимость', 'Наличие', '']


const t = [{
    item1: 1,
    item2: 2,
    item3: 3
},
{
    item1: 4,
    item2: 5,
    item3: 'Вакансия'
}]

import mtc from '../img/mtc.jpg'
import netcracker from '../img/netcracker.jpg'
import intel from '../img/intel.jpg'
import beeline from '../img/beeline.jpg'
import roga from '../img/roga.jpg'


class Page extends React.Component {
    state = {
        companyInfo: {}
    };

    componentDidMount() {
        if (this.props.userType) this.findCompany()
    }

    findCompany = ()=>{
        const {companies, userType} = this.props;
        const newArr = companies.filter((item) => item.name === userType )

        this.setState({companyInfo: newArr[0]});
    }

    getImagesRoute = (item) => {
        switch (item) {
            case 'mtc':
                return mtc

            case 'netcracker':
                return netcracker
            case 'intel':
                return intel
            case 'beeline':
                return beeline
            case 'Roga i Kopita':
                return roga
            default:
                break;
        }
    }

    render() {
        const {companies} = this.props;
        const {companyInfo} = this.state;
        const workers = companyInfo.workersRent || []
        const vac = companyInfo.vacansies || []
        console.log(workers);
        
        
        return (
            <div className='personal-area'>
                <div className='left'>
                    <div className='block'>
                        <div className='title'>
                            Лента поставщиков
                    </div>
                        <Table option={companyTable} data={this.props.companies.map((item) => <tr>
                            <td><img style={{ width: '150px' }} src={this.getImagesRoute(item.name)} /></td>
                            <td>
                                <div style={{display: 'flex', flexDirection:'column'}}>
                                <Link to={`/workers/${item.name}`} style={{ color: '#0500FD', fontSize: '18px', marginBottom: '10px' }}>
                                    Продажа ({item.workersSale.length})
                                </Link>
                                <Link  to={`/workers/${item.name}`} style={{ color: '#0500FD', fontSize: '18px' }}>
                                    Аренда ({item.workersRent.length})
                                </Link >
                                </div>
                            </td>
                            <td><Link  to={`/vacancies/${item.name}`} style={{ color: '#0500FD', fontSize: '18px' }}>Вакансии ({item.vacansies.length})</Link></td>
                        </tr>)} />
                    </div>
                </div>
                {this.props.userType !==''?
                <div className='right'>
                    <div className='block'>
                        <div className='title'>
                            Продажа/Аренда
                    </div>
                    {workers && workers.length ?
                        <Table option={workersTable} data={workers.map((item) => <tr>
                            <td style={{ fontSize: '18px' }}>{item.special}</td>
                            <td style={{ fontSize: '18px' }}>{item.salaryExp}</td>
                            <td style={{ fontSize: '18px',  color: '#0500FD' }}>{item.count}</td>
                            <td><Button label='Отправить запрос' className='small' onClick={()=> alert('Запрос отправлен')}/></td>
                        </tr>)} /> : null}
                       <Link to={`/addworker/${this.props.userType}`}> <Button  label='Добавить' className='personal-area-but'/></Link>
                    </div>

                    <div className='block' style={{ marginTop: '15px' }}>
                        <div className='title'>
                            Вакансии
                    </div>
                        <div>
                            <Table option={workersTable} data={vac.map((item) => <tr>
                                <td style={{ fontSize: '18px' }}>{item.name}</td>
                            <td style={{ fontSize: '18px' }}>от {item.salaryFrom} до {item.salaryTo}</td>
                                <td style={{ fontSize: '18px',  color: '#0500FD' }}>{item.count}</td>
                                <td><Button label='Отправить запрос' className='small' onClick={()=> alert('Запрос отправлен')} /></td>
                            </tr>)} />
                            <Link to={`/addvacancie/${this.props.userType}`}> <Button  label='Добавить' className='personal-area-but'/></Link>
                        </div>
                    </div>
                </div> : null}
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
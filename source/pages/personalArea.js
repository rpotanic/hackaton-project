import React from 'react';
import {connect} from 'react-redux'

import '../css/personalArea.scss'
import Table from '../components/Table'
import { companies, workers } from '../lib/constanstArray'
import Button from '../components/Button'

const companyTable = ['Компания', 'Предложение', 'Запрос']
const workersTable = ['Специальность', 'Стоимость', 'Наличие']


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
    state = {};

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
        return (
            <div className='personal-area'>
                <div className='left'>
                    <div className='block'>
                        <div className='title'>
                            Лента поставщиков
                    </div>
                        <Table option={companyTable} data={companies.map((item) => <tr>
                            <td><img style={{ width: '150px' }} src={this.getImagesRoute(item.name)} /></td>
                            <td>
                                <div style={{ color: '#0500FD', fontSize: '18px', marginBottom: '10px' }}>
                                    Продажа ({item.workersSale.length})
                                </div>
                                <div style={{ color: '#0500FD', fontSize: '18px' }}>
                                    Аренда ({item.workersRent.length})
                                </div>
                            </td>
                            <td><div style={{ color: '#0500FD', fontSize: '18px' }}>Вакансии ({item.vacansies.length})</div></td>
                        </tr>)} />
                    </div>
                </div>
                {this.props.userType !==''?
                <div className='right'>
                    <div className='block'>
                        <div className='title'>
                            Продажа/Аренда
                    </div>
                        <Table option={workersTable} data={workers.map((item) => <tr>
                            <td style={{ fontSize: '18px' }}>{item.name}</td>
                            <td style={{ fontSize: '18px' }}>{item.price}</td>
                            <td style={{ fontSize: '18px',  color: '#0500FD' }}>{item.count}</td>
                        </tr>)} />
                        <Button  label='Добавить' className='personal-area-but'/>
                    </div>

                    <div className='block' style={{ marginTop: '15px' }}>
                        <div className='title'>
                            Вакансии
                    </div>
                        <div>
                            <Table option={workersTable} data={workers.map((item) => <tr>
                                <td style={{ fontSize: '18px' }}>{item.name}</td>
                                <td style={{ fontSize: '18px' }}>{item.price}</td>
                                <td style={{ fontSize: '18px',  color: '#0500FD' }}>{item.count}</td>
                            </tr>)} />
                            <Button  label='Добавить' className='personal-area-but'/>
                        </div>
                    </div>
                </div> : null}
            </div>
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
)(Page);
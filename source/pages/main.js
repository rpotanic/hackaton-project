import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../css/mainPage.scss'

import HeaderPage from '../components/HeaderPage'
import Input from '../components/Input';
import TableActions from '../components/TableActions/index'
import Button from '../components/Button';
import Card from '../components/Card'


const cardConfig = [
    {
        title: 'Мои оферты',
        img: '',
        linkRoute: '',
        link: false,
        subtitle: [
            {
                label: 'Действующая',
                count: '13'
            },
            {
                label: 'Ввод сведений',
                count: '31'
            }
        ]
    },
    {
        title: 'Мои заявки',
        img: '',
        linkRoute: '',
        link: false,
        subtitle: [
            {
                label: 'Требуют ответа',
                count: '13'
            },
            {
                label: 'Всего',
                count: '31'
            }
        ]
    },
    {
        title: 'Моя корзина',
        img: '',
        linkRoute: '',
        link: false,
       subtitle: [{
            label: 'Личный кабинет',
        },
        {
            label: 'Поиск',
        }]
    },
    {
        title: 'Производимая продукция',
        img: '',
        linkRoute: '',
        link: false,
        subtitle: [
            {
                label: 'Всего',
                count: '13'
            },
        ]
    },
    {
        title: 'Потребность в продукции/услуге',
        img: '',
        linkRoute: '',
        link: false,
        subtitle: [
            {
                label: 'Новых',
                count: '13'
            }
        ]
    },
    {
        title: 'Потребность в продукции/услуге',
        img: '',
        linkRoute: '',
        link: false,
        subtitle: [
            {
                label: 'Новых',
                count: '13'
            }
        ]
    },
    {
        title: 'Биржа кадров',
        img: '',
        link: true,
        linkRoute: 'companies',
        subtitle: [{
            label: 'Личный кабинет',
            link: '/lk'
        },
        {
            label: 'Поиск',
            link: '/vac'
        }]
    },
    {
        title: 'Потребность в продукции/услуге',
        img: '',
        linkRoute: 'companies',
        link: false,
        subtitle: [
            {
                label: 'Новых',
                count: '13'
            }
        ]
    }

]


class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        };
    }

    getTableOptions = () => [
        { value: 'Имя', name: 'name' },
        { value: 'Фамилия', name: 'surname' },
        { value: 'Отчество', name: 'lastname' },
        { value: 'Стаж', name: 'workAge' },
        { className: 'info', name: 'info' }
    ];

    @bind
    getTableRows() {
        return this.props.vac.map((item, index) => ({
            ...item,
            info: (
                <TableActions
                    items={[
                        {
                            icon: 'edit',
                            onClick: () => { }
                        },
                        {
                            icon: 'delete',
                            onClick: () => { }
                        }
                    ]}
                    key={index}
                />
            )
        }));
    }



    getModalState = () => ({
        name: '',
        surname: '',
        lastName: '',
        workAge: ''
    });

    toggleModal = () => {
        const { modalOpen } = this.state;
        this.setState({ modalOpen: !modalOpen });
    };

    renderCards = () => {
        return cardConfig.map((item, key) => <div className='card' key={`card${key}`}>
            <Link  to={`/${item.linkRoute}`} className='title'>{item.title}</Link>
            <div>{item.subtitle.map((sub, key) => {
                if (item.link === false) {
                    return <div className='subtitle'>
                        <div className='label'>{sub.label}</div>
                        <div className='count'>{sub.count}</div>
                    </div>
                } else return <div className='subtitle'>
                   <Link to={sub.link} className='label link'>{sub.label}</Link>
                </div>
            }
            )}
            </div>
        </div>)
    }

    render() {
        const { modalOpen } = this.state;
        return <Fragment>
            <div className='content'>
                {this.renderCards()}
            </div>
        </Fragment>
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatchEvent => ({
    fetchInfo: (...arg) => dispatchEvent(fetchInfo(...arg)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);

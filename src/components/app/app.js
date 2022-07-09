import {Component} from 'react';
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "Бонапарт Н.", salary: 800, increase: false, rise: false, id: nextId()},
                {name: "Цезарь Ю.", salary: 3000, increase: false, rise: false, id: nextId()},
                {name: "Черчилль В.", salary: 5000, increase: false, rise: false, id: nextId()},
            ]
        }
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: nextId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        console.log(`Rise this ${id}`);
    }

    render() {
        const employeesNum = this.state.data.length;
        const increasedNum = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo employeesNum={employeesNum}
                         increasedNum={increasedNum}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;
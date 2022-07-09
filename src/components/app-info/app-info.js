import './app-info.css';

const AppInfo = ({employeesNum, increasedNum}) => {
    return (
        <div className="app-info">
            <h1>Облік працівників у компанії</h1>
            <h2>Загальна кількість працівників: {employeesNum}</h2>
            <h2>Премію отримують: {increasedNum}</h2>
        </div>
    )
}

export default AppInfo;
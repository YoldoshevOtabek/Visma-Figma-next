'use client';
import './service.css';
import Pdf from './Pdf'
export default function Service () {
    return(
        <div className="container">
            <div className="service">
                <h2 style={{marginRight:'5rem'}}>Услуги</h2>
                <p>Тарифы на услуги по обеспечению<br /> контроля доступа на территорию <br /> 
                VISMA на 2022 год </p>
                <p>Условия определения цены <br />договора и тарифы на работы</p>
                <p>Договор перевалки  <br /> (типовая форма)</p>
            </div>
            <div className="pdf">
                <Pdf/>
                <Pdf/>
                <Pdf/>
            </div>
            <div className="cards">
                <div className="card">Услуги <br /><h4>Хранение грузов</h4></div>
                <div className="card">Услуги <br /><h4>Швартовые операции</h4></div>
                <div className="card">Услуги <br /><h4>Складские операции</h4></div>
                <div className="card">Услуги <br /><h4>Агентское обслуживание судов</h4></div>
                <div className="card">Услуги <br /><h4>Буксировка / сопровождение судов</h4></div>
                <div className="card">Услуги <br /><h4>Погрузочно-разгрузочная деятельность</h4></div>
            </div>
        </div>
    )
};
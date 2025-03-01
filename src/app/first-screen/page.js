
import png from './image/png.jpg'
import './section.css'
import Image from 'next/image'

const Section  = () => {
    return(
        <div className="container">
            <div className="img">
                <Image src={png} alt='img' className='img-cover'/>
            </div>
            <div className="card-a">
                <h1>Тавимский морской порт VISMA</h1>
                <p>Vel posuere nibh odio placerat massa vel tellus tortor. Varius eget nunc scelerisque etiam felis facilisi ante viverra sem. Nunc eros elementum.</p>
                <h4 style={{marginRight:'1rem'}}>О компании</h4>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="12" stroke="white" stroke-width="2"/>
<path d="M14.5001 18.7051V15.7051H7.8101L7.7876 14.1976H14.5001V11.2051L18.2501 14.9551L14.5001 18.7051Z" fill="white"/>
</svg>
            </div>
            <div className="cards">
                <div className="card-1"><h2>Услуги</h2><br /><br /> <h2 style={{position:'relative',top:'6rem'}}>Погрузочно-разгрузочная деятельность</h2></div>
                <div className="card-2"><h2>Услуги</h2> <br /><br /><h2 style={{position:'relative',top:'6rem'}}>Хранение<br /> грузов</h2></div>
                <div className="card-3"><h2>Услуги</h2> <br /><br /><h2 style={{position:'relative',top:'6rem'}}>Складские<br /> операции</h2></div>
                <div className="card-4"><h2>Услуги</h2><br /><br /><h2 style={{position:'relative',top:'6rem'}}>Швартовые<br /> операции</h2></div>
            </div>
        </div>
    )
}
export default Section;
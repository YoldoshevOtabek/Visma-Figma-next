import "./request.css";


export default function Request () {
    return(
        <div className="container_1">
            <div className="container">
       <div className="navbar">
       <div style={{marginRight:'1rem'}}><p>Главная <svg width="4" height="6" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.47826 5.74563L3.73913 3.58241C3.82609 3.49921 3.8913 3.40907 3.93478 3.312C3.97826 3.21494 4 3.11093 4 3C4 2.88907 3.97826 2.78506 3.93478 2.688C3.8913 2.59093 3.82609 2.50079 3.73913 2.41759L1.47826 0.254366C1.2029 -0.00910369 0.887826 -0.067899 0.533043 0.0779801C0.177681 0.223305 0 0.483169 0 0.857574V5.14243C0 5.51683 0.177681 5.7767 0.533043 5.92202C0.887826 6.0679 1.2029 6.0091 1.47826 5.74563Z" fill="#333333"/>
</svg>  </p></div>
       <div style={{marginRight:'1rem'}}><p>Клиентам <svg width="4" height="6" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.47826 5.74563L3.73913 3.58241C3.82609 3.49921 3.8913 3.40907 3.93478 3.312C3.97826 3.21494 4 3.11093 4 3C4 2.88907 3.97826 2.78506 3.93478 2.688C3.8913 2.59093 3.82609 2.50079 3.73913 2.41759L1.47826 0.254366C1.2029 -0.00910369 0.887826 -0.067899 0.533043 0.0779801C0.177681 0.223305 0 0.483169 0 0.857574V5.14243C0 5.51683 0.177681 5.7767 0.533043 5.92202C0.887826 6.0679 1.2029 6.0091 1.47826 5.74563Z" fill="#333333"/>
</svg></p></div>
       <p> Запрос ставки и условий погрузочно-разгрузочных работ </p>
       </div>
      </div>
      <div className="section_1">
        <h1>Запрос ставки и условий погрузочно-разгрузочных работ</h1>
        <div className="formOne">
        <form action="">
            <label htmlFor="label">Наименование груза *</label><br />
            <input type="text" style={{marginTop:'1rem',width:'20rem',height:'2rem',borderRadius:'5px'}}/>
        </form>
        <form action="">
            <label htmlFor="label">Размер партии *</label><br />
            <input type="email" style={{marginTop:'1rem',width:'20rem',height:'2rem',borderRadius:'5px'}} />
        </form>
        <form action="">
            <label htmlFor="label">Ед. измерения *</label><br />
            <input type="text" style={{marginTop:'1rem',width:'20rem',height:'2rem',borderRadius:'5px'}}/>
        </form>
        <form action="">
            <label htmlFor="label">Направление перевозки *</label><br />
            <input type="text" style={{marginTop:'1rem',width:'20rem',height:'2rem',borderRadius:'5px'}}/>
        </form>
        <form action="">
            <label htmlFor="label">Пункт назначения перевозки</label><br />
            <input type="text" style={{marginTop:'1rem',width:'20rem',height:'2rem',borderRadius:'5px'}}/>
        </form>
        <form action="">
            <label htmlFor="label">Период поступления груза к перевалке</label><br />
            <input type="text" style={{marginTop:'1rem',width:'20rem',height:'2rem',borderRadius:'5px'}}/>
        </form>
        <form action="">
            <label htmlFor="label">Груз поступает в порт</label><br />
            <input type="text" style={{marginTop:'1rem',width:'20rem',height:'2rem',borderRadius:'5px'}}/>
        </form>
        <form action="">
            <label htmlFor="label">Груз отправляется из порта</label><br />
            <input type="text" style={{marginTop:'1rem',width:'20rem',height:'2rem',borderRadius:'5px'}}/>
        </form>
        <form action="">
            <label htmlFor="label">Размер судовой партии</label><br />
            <input type="text" style={{marginTop:'1rem',width:'20rem',height:'2rem',borderRadius:'5px'}}/>
        </form>
        <form action="">
            <label htmlFor="label">Опасность груза (класс)</label><br />
            <input type="text" style={{marginTop:'1rem',width:'20rem',height:'2rem',borderRadius:'5px'}}/>
        </form>
        <form action="">
            <label htmlFor="label">Дополнительная информация о грузе:</label><br />
            <input type="text" style={{marginTop:'1rem',width:'20rem',height:'5rem',borderRadius:'5px'}}/>
        </form>
        <form action="">
            <label htmlFor="label">Прикрепить файл</label><br />
            <input type="file" style={{marginTop:'1rem',width:'20rem',height:'2rem',borderRadius:'5px'}}/>
        </form>
        </div>
        <div className="formTwo">
        <h2>Просим сообщить:</h2>
        <form action="">
            <input type="checkbox" style={{marginRight:'1rem',marginTop:'1rem'}}/>
            <label htmlFor="label">Ставку ПРР</label><br />
            <input type="checkbox" style={{marginRight:'1rem',marginTop:'1rem'}}/>
            <label htmlFor="label">Срок технологического накопления груза</label><br />
            <input type="checkbox" style={{marginRight:'1rem',marginTop:'1rem'}}/>
            <label htmlFor="label">Ставку хранения груза сверх срока технологического накопления</label><br />
            <input type="checkbox" style={{marginRight:'1rem',marginTop:'1rem'}}/>
            <label htmlFor="label">Возможность приёма и перевалки груза в указанные сроки</label>
        </form>
        </div>
        <div className="formThree">
            <h2>Информация для обратной связи:</h2>
        <form action="">
            <label htmlFor="label">Имя, фамилия</label><br />
            <input type="text" style={{marginTop:'1rem',width:'20rem',height:'2rem',borderRadius:'5px'}}/>
        </form>
        <form action="">
            <label htmlFor="label">Название компании *</label><br />
            <input type="text" style={{marginTop:'1rem',width:'20rem',height:'2rem',borderRadius:'5px'}}/>
        </form>
        <form action="">
            <label htmlFor="label">Номер телефона/факса</label><br />
            <input type="text" style={{marginTop:'1rem',width:'20rem',height:'2rem',borderRadius:'5px'}}/>
        </form>
        <form action="">
            <label htmlFor="label">Адрес эл. почты *</label><br />
            <input type="text" style={{marginTop:'1rem',width:'20rem',height:'2rem',borderRadius:'5px'}}/>
        </form>
        </div>
       <div className="sending">
      <div style={{marginRight:'1rem'}}> <h3 style={{color:'purple'}}>ОТПРАВИТЬ</h3></div>
       <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="12" stroke="purple" stroke-width="2"/>
<path d="M14.5001 18.7051V15.7051H7.8101L7.7876 14.1976H14.5001V11.2051L18.2501 14.9551L14.5001 18.7051Z" fill="purple"/>
</svg>
       </div>
      </div>
            </div>
    )
}
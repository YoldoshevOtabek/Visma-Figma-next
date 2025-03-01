import './style.css';
import Image from 'next/image';
import Media from './482059.png'


export default function aboutCompany () {
    return(
        <div className="container">
            <div className="text">
                <h2>О компании</h2>
                <p style={{marginTop:'3rem'}}>Tristique orci consectetur sit felis. Sed ac auctor tellus lobortis. Enim non turpis nulla nec a sapien sit amet molestie. Et id malesuada gravida sit volutpat. Volutpat sed lectus elementum diam neque facilisis in. Convallis nibh sem in viverra quis. Interdum pharetra.</p>
                <p>Libero nunc porttitor id mi convallis ultricies convallis erat. At sagittis nisi at in diam sit.</p>
                <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                <li>Vivamus tincidunt non lectus odio magna semper odio risus. Vivamus tincidunt non lectus odio magna semper odio risus.Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                <p>Quam accumsan mauris enim quam. A commodo ultrices urna vitae nibh rhoncus at nisl. Duis nibh libero ut enim. Metus aliquam cursus molestie sapien risus. Suspendisse volutpat.</p>
                <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
            </div>
            <div className="media">
                <div className="image">
                    <Image src={Media} 
                    style={{
                        width:'50px',
                        height:'50px',
                        background:'white',
                        borderRadius:'50%',
                        zIndex:'2'}}/>
                </div>
                <div className="secondCont">
                    <p>ЗАПРОС СТАВКИ И УСЛОВИЙ ПОГРУЗОЧНО-РОЗГРУЗОЧНЫХ РАБОТ</p>
                    <h3>Рассчитайте моментально стоимость полных портовых услуг в порту VISMA</h3>
                </div>
            </div>
        </div>
            )
}
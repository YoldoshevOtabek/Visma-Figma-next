import './news.css';
import Image from 'next/image';
import image1 from './image/image1.png'
import image2 from './image/image2.png'
import image3 from './image/image3.png'
import image4 from './image/image4.png'

export default function News () {
    return(
        <div className="news-container">
            <nav>
            <div className="news-navbar">
               <div><h1>Новости</h1></div>
                <div style={{display:'flex',alignItems:'center',color:'#3D348B'}}> <div style={{marginRight:'1rem'}}><h4>ВСЕ НОВОСТИ </h4></div>
                 <a href="https://www.bbc.com/news/world"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="12" stroke="#3D348B" stroke-width="2"/>
<path d="M14.5001 18.7051V15.7051H7.8101L7.7876 14.1976H14.5001V11.2051L18.2501 14.9551L14.5001 18.7051Z" fill="#3D348B"/>
</svg></a></div>
            </div></nav>
            <section>
            <div className="news-cards">
               <div className="news-card">
                    <Image src={image1} alt='img' style={{width:'18rem',height:'10rem',borderRadius:'10px'}}/>
                    <h6>20/05/22</h6>
                    <h3>Semper eu pulvinar eget integer</h3>
                    <p>Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus.</p>
               </div>
               <div className="card">
                    <Image src={image2} alt='img' style={{width:'18rem',height:'10rem',borderRadius:'10px'}}/>
                    <h6>20/02/22</h6>
                    <h3>Vitae id nec nulla sit nunc cursus curabitur tempus vel enim.</h3>
                    <p>Cras arcu ac commodo suspendisse commodo ipsum turpis dui. Quis pharetra malesuada eget sit egestas et integer. Suspendisse a.</p>
               </div>
               <div className="card">
                    <Image src={image3} alt='img' style={{width:'18rem',height:'10rem',borderRadius:'10px'}}/>
                    <h6>30/12/21</h6>
                    <h3>Integer nisi sagittis in aliquet. Enim eget varius lacinia est a.</h3>
                    <p>Lectus tempus felis pretium vitae. Tempor massa vestibulum condimentum cursus diam quam. Mattis facilisi dignissim donec eget vel.</p>
               </div>
               <div className="card">
                    <Image src={image4} alt='img' style={{width:'18rem',height:'10rem',borderRadius:'10px'}}/>
                    <h6>29/06/21</h6>
                    <h3>Facilisis vitae proin quis</h3>
                    <p>Iaculis diam quam velit sit nunc turpis ultricies elementum. Vitae lacinia tristique rutrum faucibus nulla quis ultricies. Risus.</p>
                </div> 
            </div></section>
        </div>
    )
}
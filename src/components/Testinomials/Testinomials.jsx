import React, { useRef } from 'react'
import './Testinomials.css'
import next_btn from '../../assets/next-icon.png'
import back_btn from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testinomials = () => {
  const slider = useRef();
  let tx =0;
  const slideForward =()=>{
    if(tx>-50){
      tx-=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBack =() =>{
    if(tx<0){
      tx+=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
      <img src={next_btn} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_btn} alt="" className='back-btn' onClick={slideBack}/>
      <div className="slider">
        <ul ref = {slider}>
          <li>
            <div className="slide">
              <div className="user-data">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Hens</h3>
                  <span>Cmseru,USA</span>
                </div>
              </div>
              <p>
                Aenean quis interdum nulla, non tincidunt diam. Morbi porta eros nec magna consectetur fringilla.
                 Vestibulum a tristique velit, quis dictum sem. Cras ac tristique mi, ut molestie massa.
                 Nullam feugiat finibus lacinia. Mauris consequat semper urna, at eleifend justo vehicula vel.
                </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-data">
                <img src={user_2} alt="" />
                <div>
                  <h3>Jack Henry</h3>
                  <span>Cmseru,USA</span>
                </div>
              </div>
              <p>
                Aenean quis interdum nulla, non tincidunt diam. Morbi porta eros nec magna consectetur fringilla.
                 Vestibulum a tristique velit, quis dictum sem. Cras ac tristique mi, ut molestie massa.
                 Nullam feugiat finibus lacinia. Mauris consequat semper urna, at eleifend justo vehicula vel.
                </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-data">
                <img src={user_3} alt="" />
                <div>
                  <h3>Aena Sis</h3>
                  <span>Cmseru,USA</span>
                </div>
                
              </div>
              <p>
                Aenean quis interdum nulla, non tincidunt diam. Morbi porta eros nec magna consectetur fringilla.
                 Vestibulum a tristique velit, quis dictum sem. Cras ac tristique mi, ut molestie massa.
                 Nullam feugiat finibus lacinia. Mauris consequat semper urna, at eleifend justo vehicula vel.
                </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-data">
                <img src={user_4} alt="" />
                <div>
                  <h3>James Velli</h3>
                  <span>Cmseru,USA</span>
                </div>
                
              </div>
              <p>
                Aenean quis interdum nulla, non tincidunt diam. Morbi porta eros nec magna consectetur fringilla.
                 Vestibulum a tristique velit, quis dictum sem. Cras ac tristique mi, ut molestie massa.
                 Nullam feugiat finibus lacinia. Mauris consequat semper urna, at eleifend justo vehicula vel.
                </p>
            </div>
          </li>
        </ul>
      </div>

      
    </div>
  )
}

export default Testinomials

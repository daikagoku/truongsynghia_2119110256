import './index.css';
import clsx from 'clsx';
import {memo,useRef,useEffect,useState} from 'react';
import HeaderLogo from './logo';
import HeaderContact from './contact';
import HeaderSearch from './search';
import HeaderSetting from './setting';
import HeaderCart from './cart';
import HeaderUser from './user';
function Header(props) {
  const thisRef       = useRef(null);
  return (
      <section ref={thisRef} id="header" className="container-fluid">
          <HeaderContact />
      		<header className="container-lg   px-0">
      			<div className="row py-2">
      				<div className="order-0 col col-5 col-sm-4 col-md-3 col-lg-3 col-xxl-2 justify-content-center">         
                <div className="w-12 d-flex justify-content-center py-1">
                  <HeaderLogo />
                </div>
              </div>
      				<div className="order-1 order-sm-2 col col-7 col-sm-4 col-md-3 col-lg-4 col-xxl-5 justify-content-center">
      				  <div className="w-12 d-flex justify-content-end py-1">
                  <HeaderSetting /> 
                  <HeaderCart />
                  <HeaderUser />
                </div>
              </div>
              <div className="order-2 order-sm-1 col col-12 col-sm-4 col-md-6 col-lg-5 justify-content-center">
                  <div className="w-12 d-flex justify-content-center py-1">
                    <HeaderSearch />
                  </div>
              </div>
      			</div>
      		</header>
      </section>
  );
}
export default memo(Header);
//
//
//
// 
//                   
//                   
//                   
//                   
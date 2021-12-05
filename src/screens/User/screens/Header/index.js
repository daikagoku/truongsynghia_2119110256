import './index.css';
import clsx from 'clsx';
import {memo,useRef,useEffect,useState} from 'react';
import HeaderLogo from './logo';
import HeaderContact from './contact';
import HeaderSearchDrop from './search/Drop/';
import HeaderSearchOffcanvas from './search/Offcanvas/';
import HeaderSetting from './setting';
import HeaderCart from './cart';
import HeaderUser from './user';
import HeaderMenu from './menu';
function Header(props) {
  const thisRef       = useRef(null);
  const [fixed,setFixed] = useState(false);
  useEffect(function(){
      const offsetTop = thisRef.current.offsetTop;
      const body = document.querySelector("#App");
      function handleScroll(event){
        if(thisRef.current !== null){
            if(offsetTop < body.scrollTop){
                setFixed(true);
            }else{
                setFixed(false);
            };
        }
    };
    body.addEventListener('scroll',handleScroll);
    return ()=>(body.removeEventListener('scroll',handleScroll))
  },[]);
  return (
      <section ref={thisRef} id="header" className={clsx("container-fluid",{"active fixed relative-md top-0":fixed})}>
          <HeaderContact />
      		<header className="container">
      			<div className="row py-2">
      				<div className="col col-5 col-md-3 col-lg-3 col-xxl-2 justify-content-center">         
                <div className="d-flex justify-content-start">
                  <HeaderLogo />
                </div>
              </div>
              <div className="col col-1 col-md-6 col-lg-5 justify-content-center">
                  <HeaderSearchDrop />
              </div>
      				<div className="col col-6 col-md-3 col-lg-4 col-xxl-5 justify-content-center">
      				  <div className="d-flex justify-content-end">
                  <HeaderSearchOffcanvas />
                  <HeaderSetting /> 
                  <HeaderCart />
                  <HeaderUser />
                  <HeaderMenu />
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
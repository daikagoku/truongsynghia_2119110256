import './index.css';
import {memo} from 'react';
import HeaderLogo from './logo';
import HeaderContact from './contact';
import HeaderSearch from './search';
import HeaderSetting from './setting';
import HeaderCart from './cart';
import HeaderUser from './user';
function Header(props) {
  return (
      <section id="header" className="container-fluid ">
          <HeaderContact />
      		<header className="container">
      			<div className="row py-2">
      				<div className="col col-6 col-md-3  justify-content-center">
                <HeaderLogo />
              </div>
      				<div className="col col-md-5  justify-content-center">
      					<HeaderSearch /> 
      				</div>
      				<div className="col col-6 col-md-4 col-xxl-2 justify-content-center">
      				  <div className="d-flex justify-content-end">
                  <HeaderSetting /> 
                  <HeaderCart />
                  <HeaderUser />
                </div>
              </div>
      			</div>
      		</header>
      </section>
  );
}
export default memo(Header);
import './index.css';
import HeaderLogo from '../../../components/header/logo';
import HeaderSearch from '../../../components/header/search';
import HeaderSetting from '../../../components/header/setting';
import HeaderCart from '../../../components/header/cart';
import HeaderUser from '../../../components/header/user';
import HeaderContact from '../../../components/header/contact';
function Header(props) {
  return (
      <section className="header container-fluid ">
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
export default Header;


import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import HeaderMenu from './HeaderMenu';
import HeaderContact from './HeaderContact';
function Header(props) {
  return (
      <section id="header"className="container-fluid"{...props}>
          <HeaderContact />
      		<header className="container">
      			<div className="row py-2">
      				<div className="col col-6 col-md-3  justify-content-center">
                <HeaderLogo />
              </div>
      				<div className="col col-md-6  justify-content-center">
      					<HeaderSearch />
      				</div>
      				<div className="col col-6 col-md-3 col-xxl-2  justify-content-center">
      					<HeaderMenu />
      				</div>
      			</div>
      		</header>
      </section>
  );
}

export default Header;

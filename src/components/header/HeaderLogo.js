import {Button,Image} from '../../tags/Tags';
import Logo from '../../logo.svg';
import './HeaderLogo.css';
function HeaderMenu(props) {
  return (
      <div>
      	 <Button id="logo"className="header-logo"to="/">
            <Image className="header-logo-image" src = {Logo} />
         </Button>
      </div>
  );
}

export default HeaderMenu;

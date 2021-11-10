import {Button,Image} from '../../tags';
import './index.css';
function HeaderLogo(props) {
  return (
      <div>
      	 <Button id="logo"className="header-logo"to="/">
            <Image className="header-logo-image" src = '/img/logo.svg' />
         </Button>
      </div>
  );
}

export default HeaderLogo;

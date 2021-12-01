import './index.css';
import {memo} from 'react';
import {Button,Image} from "../../../../../components/";
function HeaderLogo(props) {
  return (
      <div>
      	 <Button id="logo"className="header-logo"to="/">
            <Image className="header-logo-image" src = '/img/logo.svg' />
         </Button>
      </div>
  );
}

export default memo(HeaderLogo);

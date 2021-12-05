import './index.css';
import {memo} from 'react';
import {Button,Image} from "../../../../../components/";
function HeaderLogo(props) {
  return (
      <div>
      	 <Button id="logo"className="header-logo fs-30em fs-sm-35em fs-md-40em"to="/">
            <Image className="header-logo-image" src = '/img/logo.svg' />
         </Button>
      </div>
  );
}

export default memo(HeaderLogo);

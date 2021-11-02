import './FooterSearch.css';
import {memo} from 'react';
import QRCode from 'qrcode.react';
import Thumbnail from '../thumbnail/Thumbnail';
import {BASE_URL} from '../../core/Config';
import {List,Item,Button,Icon} from '../../tags/Tags';
function FooterDownload(props) {
  return (
      	<div className="w-100 d-flex flex-row">
      		<div className="col col-5 align-items-center justify-content-center">
      				<QRCode
						id            ='qrcode'
						renderAs      ="svg"
						value         ={BASE_URL}
						width         ="100%"
						height        ="auto"
						level         ={'H'}
						includeMargin ={true}
				    />	
      		</div>
      		<div className="col col-7"></div>
      	</div>
  );
}

export default memo(FooterDownload);

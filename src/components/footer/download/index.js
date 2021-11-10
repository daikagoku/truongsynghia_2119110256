import './index.css';
import {memo} from 'react';
import QRCode from 'qrcode.react';
import {BASE_URL} from '../../../core/Config';
import {List,Item,Button,Image} from '../../tags';
function FooterDownload(props) {
	const listItem = [
		"googleplay.png",
		"appstore.png"
	]
  return (
      	<div className="w-100 d-flex flex-row">
      		<div className="col col-6 align-items-center justify-content-center">
      			<Button className="square-btn overflow-hidden" to={BASE_URL}>
	      			<QRCode
						id            ='qrcode'
						renderAs      ="svg"
						value         ={BASE_URL}
						width         ="6em"
						height        ="6em"
						level         ={'H'}
						includeMargin ={true}
					/>
				</Button>	
      		</div>
      		<div className="col col-6">
	      		<List className="footer-download"listItem={listItem}>
			    	{
			    		(item,index)=>(
			    			<Item key={index}className="footer-download-item">
						  		<Button className="footer-download-button square-btn"to={BASE_URL}>
						  			<Image className="img-contain" src={"/img/"+item}></Image>
						  		</Button>	
						  	</Item>
			    		)
			    	}
			    </List>
	    	</div>
      </div>
  );
}

export default memo(FooterDownload);

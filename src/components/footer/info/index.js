import './index.css';
import {memo} from 'react';
import useFetch from '../../../core/useFetch';
import {List,Icon} from '../../tags';
function FooterInfo({listItem,className,...props}) {
	const [infos] = useFetch({
    initData:{},
    keyApi:"info",
    handle:function(data){
       const newData = [];
       Object.keys(data).forEach(function(key){
          if(listInfo[key] !== undefined ){
            const newObj = {
              ...listInfo[key],
              ...data[key]
            };
            newData.push(newObj)
          }
       })
       return newData;
    }
  });
  const listInfo = {
  	copyright:{
  		icon:"far fa-copyright"
  	},
    address:{
      icon:"fas fa-map-marker-alt"
    },
    phone:{
    	icon:"fas fa-phone-alt"
    }
  };
  const itemAttr={
      className:"footer-info-item"
  };
  const buttonAttr={
      className:"footer-info-button"
  };
  return (
    <List className="footer-info-list"listItem={infos}itemAttr={itemAttr}>
    	{
        (item,index)=>(
            <>
              <Icon icon={item.icon} className="footer-info-icon"/>
              <span className="d-flex me-1">{item.title}:</span>
              <List className="d-flex flex-column"listItem={item.value}itemAttr={{className:"d-flex"}}>
                {
                  (str,index)=>(
                      <span {...buttonAttr}>{str}</span>
                    )
                } 
              </List>
            </>
        )
      }
    </List>
  );
}

export default memo(FooterInfo);

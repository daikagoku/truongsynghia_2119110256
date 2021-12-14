import './index.css';
import {memo} from 'react';
import useFetch from '../../../../../core/useFetch';
import {List,Item,Icon} from '../../../../../components/';
function FooterInfo({listItem,className,...props}) {
	const [infos] = useFetch({
    initData:[],
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
    <List className="footer-info-list">
    	{
        infos.map((item,index)=>(
            <Item key={index} {...itemAttr}>
              <Icon icon={item.icon} className="footer-info-icon"/>
              <span className="footer-info-label">{item.title}:</span>
              <List className="footer-info-list-btn">
                {
                  item.value.map((str,index)=>(
                      <Item key={index} className="d-flex">
                        <span {...buttonAttr}>{str}</span>
                      </Item>
                  ))
                } 
              </List>
            </Item>
        ))
      }
    </List>
  );
}

export default memo(FooterInfo);

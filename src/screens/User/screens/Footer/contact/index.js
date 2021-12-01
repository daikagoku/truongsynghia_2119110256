import './index.css';
import React,{memo} from 'react';
import useFetch from '../../../../../core/useFetch';
import {List,Item,Button,Icon} from '../../../../../components/';
function FooterContact({className,...props}) {
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
    facebook:{
      buttonClass:"facebook",
      icon:"fab fa-facebook-f"
    },
    youtube:{
      buttonClass:"youtube",
      icon:"fab fa-youtube"
    },
    twitter:{
      buttonClass:"twitter",
      icon:"fab fa-twitter"
    },
    instagram:{
      buttonClass:"instagram",
      icon:"fab fa-instagram"
    },
    email:{
      buttonClass:"email",
      icon:"far fa-envelope"
    }
  };
  const itemAttr = {
      className:"footer-contact-item d-flex"
  };
  const buttonAttr={
      className:"circle-btn footer-contact-btn mx-1"
    };
  return (
      	<List className="footer-contact-list" listItem={infos}>
          {
            function(item,index){
                const _buttonAttr = {...buttonAttr};
                _buttonAttr.className +=" "+item.buttonClass;
                return(
                  <Item key={index}{...itemAttr}>
                    <Button to={item.value}{..._buttonAttr}>
                       <Icon icon={item.icon}/>
                    </Button>
                  </Item>
              )
            }
          }
        </List>
  );
}

export default memo(FooterContact);

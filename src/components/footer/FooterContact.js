import './FooterContact.css';
import {memo} from 'react';
import Fetch from '../../core/Fetch';
import {List,Item,Button,Icon} from '../../tags/Tags';
function FooterContact({className,...props}) {
  const infos = Fetch({
    initData:{},
    keyApi:"info",
    handle:function(data){
       const newData = {};
       data.forEach(function({key,...item},index){
        newData[key] = item;
       })
       return newData;
    }
  });
  const attr = {
    facebook:{
      icon:"fab fa-facebook-f"
    },
    youtube:{
      icon:"fab fa-youtube"
    },
    twitter:{
      icon:"fab fa-twitter"
    },
    instagram:{
      icon:"fab fa-instagram"
    },
    email:{
      icon:"far fa-envelope"
    }
  };
  function ContactItem({className,buttonClass,icon,src,...props}){
    const itemAttr = {
      ...props,
      className:"footer-contact-item d-flex"
    };
    if(className !== undefined){
      itemAttr.className+=" "+className;
    }
    const buttonAttr={
      className:"circle-btn footer-contact-btn fs-1x fs-4 ws-8em hs-8em mx-1"
    };
    if(buttonClass!== undefined){
      buttonAttr.className+=" "+buttonClass;
    };
    return(
        <Item {...itemAttr}>
              <Button to={src}{...buttonAttr}>
                 <Icon className={icon}/>
              </Button>
        </Item>
    )
  };
  return (
      	 <List className="d-flex my-2 mx-0 p-0">
            {
              Object.keys(attr).map(function(key,index){
                if(infos[key] !== undefined){
                    return ContactItem({
                      ...attr[key],
                      ...infos[key],
                      buttonClass : key,
                      key:index
                  })
                }else{
                  return (<></>)
                }
              })
            }
        </List>
  );
}

export default memo(FooterContact);

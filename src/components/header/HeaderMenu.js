import './HeaderMenu.css';
import {memo} from 'react';
import HeaderUser from './HeaderUser';
import {List,Item,Button,Icon} from '../../tags/Tags';
function HeaderMenu(props) {
  const buttonAttr={
          className:"header-menu-btn circle-btn"
      };
  const itemAttr={
          className:"header-menu-item"
      };
  function RenderItem({className,buttonClass,children,icon,...props}){
      const _itemAttr = {...itemAttr};
      if(className !== undefined){
        _itemAttr.className +=" " + className;
      };
      const _buttonAttr = {...buttonAttr};
      if(buttonClass !== undefined){
        _buttonAttr.className +=" " + buttonClass;
      };
      if(children === undefined){
        return(
            <Item {..._itemAttr}>
              <Button {..._buttonAttr}>
                  <Icon className={icon}/>
              </Button> 
            </Item>
        )
      }else{
        return(
          <Item {..._itemAttr}>
              {children({..._buttonAttr})}
          </Item>
        )
      }
  };
  return (
      	<List className="header-menu">
          <RenderItem icon="fas fa-search"/>
          <RenderItem icon="fas fa-cog"/>
          <RenderItem icon="fab fa-opencart"/>
          <RenderItem>
              {HeaderUser}
          </RenderItem>
      	</List>
  );
}

export default memo(HeaderMenu);

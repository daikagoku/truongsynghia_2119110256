import {List,Item,Button,Icon,Offcanvas} from '../../../../../../components/';
import {useRef,memo} from 'react';
import useFetch from '../../../../../../core/useFetch';
import './index.css';
export default memo(function(){
  const OffcanvasRef = useRef();
  const menuAttr = {
    className:"header-search-offcanvas d-flex d-md-none"
  };
  if(OffcanvasRef.current && OffcanvasRef.current.state.open){
    menuAttr.className+=" active";
  };
  const buttonAttr = {
    className:"header-button circle-btn",
    onClick:function(){
      if(OffcanvasRef.current){
        OffcanvasRef.current.handle.open();
      }
    }
  };
  return(
    <div {...menuAttr}>
      <Button {...buttonAttr}>
        <Icon icon="fas fa-search"/>
      </Button>
      <Offcanvas ref={OffcanvasRef} 
        title="Tìm kiếm" 
        position="right"
        widthSize="w-9 w-sm-7 w-md-6 w-lg-5 w-xl-4 w-xxl-3"
      >
      </Offcanvas>
    </div>
  )
})
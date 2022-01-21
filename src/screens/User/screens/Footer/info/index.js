import './index.css';
import {memo,useMemo,useEffect} from 'react';
import useFetch from '../../../../../core/useFetch';
import {List,Item,Icon} from '../../../../../components/';
function FooterInfo({className,...props}) {
	const [fetchData,handleFetch] = useFetch({
    initData:[],
    position:"footer-info",
    keyApi:"about"
  });
  useEffect(function(){
    handleFetch.get({
      handle:function(datas){
      return datas.reduce(function(result,data,index){
        if(listInfo[data.alias]){
          result.push( {
            ...data,
            ...listInfo[data.alias]
          })
        }
        return result;
      },[]);
    }})
  },[])
  const listInfo = useMemo(function(){
    return {
      copyright:{
        icon:"far fa-copyright",
        value:"@"
      },
      address:{
        icon:"fas fa-map-marker-alt",
        value:"@"
      },
      phone:{
        icon:"fas fa-phone-alt",
        value:"@"
      }
    }
  },[]);
  const itemAttr={
      className:"footer-info-item"
  };
  const buttonAttr={
      className:"footer-info-button"
  };
  return (
    <List className="footer-info-list">
    	{
        fetchData.data.map((item,index)=>(
            <Item key={index} {...itemAttr}>
              <Icon icon={item.icon} className="footer-info-icon"/>
              <span className="footer-info-label">{item.title}:</span>
              <span {...buttonAttr}>{item.value}</span>
            </Item>
        ))
      }
    </List>
  );
}
export default memo(FooterInfo);
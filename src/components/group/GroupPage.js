import {useState,useEffect} from "react"
import GroupCard from './GroupCard';
import ProductCardVertical from '../card/ProductCardVertical'
import {List,Item,Button} from '../../tags/Tags';
import Fetch from '../../core/Fetch';
const GroupPage = (function(){
  let count = 0;    
  return function({title,filter,...props}) {
    const [listItem,setListItem] = useState([]);
    function checkData(data){
        let newData=data;
        if(filter!==undefined){
            newData=data.filter(function(item){
                return filter(item);
            });
        };
        setListItem(newData);
            
    };
    useEffect(function(){
        Fetch({
            api:"http://localhost:3000/api/product.json",
            handle:checkData
        })
    },[]);
    const itemAttr = {};
    itemAttr.className = "col col-6 col-sm-4 col-md-3 col-xxl-2 py-1 px-4"
    return (
        <GroupCard title={title ??"Sản phẩm"}>
            <div className="overflow-hidden px-1">
                <div className="overflow-x-auto overflow-y-hidden">
                    <List listItem={listItem}className="p-0 mx-0 my-2 card-group">
                       {
                          (item,index)=>(
                               <Item key={index}{...itemAttr}>
                                    <ProductCardVertical dataProduct={item}/>
                               </Item>
                          )
                       }
                    </List>
                </div>
            </div>
        </GroupCard>
    );
  };
})();
export default GroupPage;

import {memo,useState,useMemo,useEffect,useContext} from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import CategoryItem from "../../components/Item/";
import useFetch from "../../../../../../../../core/useFetch";
import useSearchModel from "../../../../../../../../model/Search/";
import {ProductCategoryContext} from '../../../../init';
import {List} from "../../../../../../../../components/";
function CategoryList({keyApi,params,...props}){
	let [fetchData] = useFetch({
        initData :[],
        keyApi   :keyApi,
        position :"product-category-sidebar",
        params   :params
  	});
  	const [search,handleSearch] = useContext(ProductCategoryContext);
  	const [isCheck,setList] = useState();
  	useEffect(function(){
  		const newListCheck  = handleSearch.has('parent_alias',params['parent_alias']);
  		setList(newListCheck);
  	},[search]);
  	const setCheck = function(check,value){
	  	if(check){
	  		if(!isCheck){
	  			handleSearch.set('parent_alias',params['parent_alias']);
	  			handleSearch.remove('alias');
	  		}
	  	}
	  }
	return(
		<List>
			{
				fetchData.data.map(function(item,index){
					return (
						<CategoryItem 
							multiple
							key={index} 
							children={item.title} 
							isCheck={isCheck}
							setCheck={setCheck}
							dataKey="alias"
							dataValue={item.alias}
						/>
					)
				})
			}
		</List>
	)
}
export default memo(CategoryList);
import {memo,useState,useMemo} from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import CategoryItem from "../../components/Item/";
import useFetch from "../../../../../../../../core/useFetch";
import {List} from "../../../../../../../../components/";
function CategoryList({keyApi,params,...props}){
	let [fetchData] = useFetch({
        initData :[],
        keyApi   :keyApi,
        position :"product-category-sidebar",
        params   :params
  	});
  	const [listCheck,setList] = useState({});
  	const handleSet = useMemo(function(){
  		return function(index){
  			return function(value){
  				setList(function(prevState){
					return {
						...prevState,
						[index]:value
					}
				})
  			}
  		}
  	},[listCheck])
	return(
		<List>
			{
				fetchData.results.map(function(item,index){
					let isCheck = listCheck[index] ?? false;
					let setCheck = handleSet(index);
					return (
						<CategoryItem 
							multiple
							key={index} 
							children={item.title} 
							isCheck={isCheck} 
							setCheck={setCheck}
						/>
					)
				})
			}
		</List>
	)
}
export default memo(CategoryList);
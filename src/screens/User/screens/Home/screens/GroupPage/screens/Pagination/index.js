import {memo,useMemo,useContext} from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import {List,Icon} from '../../../../../../../../components/';
import HomePagePaginationItem from './Item';
import {HomePageContext} from '../../init';
function HomePagePagination({...props}){
	const [state,dispatch] = useContext(HomePageContext);
	const totalPage = useMemo(function(){
		let tmp = (state.length / state.limit) || 0;
		return Math.ceil(tmp);
	},[state.length,state.limit]);

	const currentPage = useMemo(function(){
		let tmp = (state.index / state.limit) || 0;
		return Math.floor(tmp) + 1;
	},[state.index,state.limit]);
	const items = useMemo(function(){
		const result = {
			components:[],
			indexs:[]
		};
		let iStart,iStop;
		if(totalPage <= 5){
			iStart = 1;
			iStop  = totalPage;
		}else{
			if(currentPage === 1){
				iStart = currentPage;
				iStop  = currentPage+2;
			}else if(currentPage === totalPage){
				iStart = totalPage-2;
				iStop  = totalPage;
			}else{
				iStart = currentPage-1;
				iStop  = currentPage+1;
			};
		};
		for (let i = iStart; i <= iStop; i++) {
			const index = i;
			const newItem =(
				<HomePagePaginationItem 
					key={index}
					text={index}
					active = {index === currentPage}
					onClick={()=>(handleClick(index))}
				/>
			);
			result.indexs.push(index);
			result.components.push(newItem);
		};

		if(result.indexs[0] > 2){
			const newItem =(
				<HomePagePaginationItem 
					key={"null-back"}
					text={"..."}
				/>
			);
			result.components.unshift(newItem);
		};
		if(result.indexs[0] > 1){
			const newItem =(
				<HomePagePaginationItem 
					key={1}
					text="1"
					onClick={()=>(handleClick(1))}
				/>
			);
			result.indexs.unshift(1);
			result.components.unshift(newItem);
		};
		if(currentPage > 1){
			const newItem =(
				<HomePagePaginationItem 
					key={"back"}
					icon="fas fa-chevron-left"
					onClick={()=>(handleClick(currentPage-1))}
				/>
			);
			result.indexs.unshift(currentPage-1);
			result.components.unshift(newItem);
		};
		if(result.indexs[result.indexs.length-1] < totalPage - 1){
			const newItem =(
				<HomePagePaginationItem 
					key={"null-next"}
					text="..."
				/>
			);
			result.components.push(newItem);
		};
		if(result.indexs[result.indexs.length-1] < totalPage){
			const newItem =(
				<HomePagePaginationItem 
					key={totalPage}
					text={totalPage}
					onClick={()=>(handleClick(totalPage))}
				/>
			);
			result.indexs.push(totalPage);
			result.components.push(newItem);
		};
		if(currentPage < totalPage){
			const newItem =(
				<HomePagePaginationItem 
					key={"next"}
					icon="fas fa-chevron-right"
					onClick={()=>(handleClick(currentPage+1))}
				/>
			);
			result.indexs.push(currentPage+1);
			result.components.push(newItem);
		};
		
		console.log({currentPage,totalPage,result});
		return result.components;
	},[currentPage,totalPage]);	
	function handleClick(page,disabled){
		if(!disabled && page!==undefined){
			const body = document.querySelector("#App");
			let index = ((page-1) * state.limit) || 0;
			if(state.this){
				body.scrollTop = state.this.offsetTop-body.dataset.offsetTop;
			}
			dispatch({
				key:"set_index",
				value:index
			})
		}
	};
	return(
		<List className={clsx("d-flex")}>
			{items}
		</List>
	)
}
export default memo(HomePagePagination);

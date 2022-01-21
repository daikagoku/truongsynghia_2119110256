import {memo,useEffect} from 'react';
import clsx from 'clsx';
import useSearchModel from '../../../../model/Search/';
import useFetch from "../../../../core/useFetch";
function PostDetail({...props}){
	const [search,handleSearch] = useSearchModel();
	const [fetchData,handleFetch] = useFetch({
		initData:[],
		keyApi:"post",
		position:"post-detail"
	});
	useEffect(function(){
		function get(){
			handleFetch.get({params:{
				alias:handleSearch.get("alias")
			}})
		}
		get();
		const interval = setInterval(function(){
			get()
		},5000)
		return function(){
			clearInterval(interval);
		}
	},[search])
	return(
		<section id="post-detail" className="container-fluid">
			<div className="container">
				<div className="row">
					{fetchData.data.content}
				</div>
			</div>
		</section>
	)
}
export default memo(PostDetail);
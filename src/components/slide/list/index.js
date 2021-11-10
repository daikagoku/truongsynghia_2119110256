import {useContext,useEffect} from 'react';
import useFetch from '../../../../core/useFetch';
import {SlideContext} from '../init';
import Thumbnail from '../../../thumbnail';
import {List,Item,Image} from '../../../../tags';
export default function MainSlideList({...props}){
	const [state,dispatch] = useContext(SlideContext);
	const [listItem] = useFetch({
		keyApi  :'slide',
		initData:[]
	});	
	useEffect(function(){
		dispatch({
			key:'init_data',
			value:listItem.length
		})
	},[listItem]);
	return(
		<List 
			listItem={listItem}
			className="slide-list main-slide-list px-0 pb-0 m-0 w-100 d-flex"
			style = {{'--index':state.index}}
		>
			{	
				function(_item,_index){
					return(
					<Item 
						className={"slide-item main-slide-item col col-12"}
						key={_index}
					>
						<Thumbnail className="main-slide-item-thumbnail"thumbnailClass="inset-t-4">
							<Image className="img-cover" src={_item.src}alt={_item.title}/>
						</Thumbnail>
					</Item>
				)}
			}
		</List>
	);
}
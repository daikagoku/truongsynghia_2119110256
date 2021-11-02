import React from 'react';
import Thumbnail from '../thumbnail/Thumbnail';
import {List,Item,Image} from '../../tags/Tags';
export default function MainSlideList({listItem,activeIndex,...props}){
	if(activeIndex === undefined){
		activeIndex=0;
	}
	return(
		<List 
			listItem={listItem}
			className="slide-list main-slide-list px-0 pb-0 m-0 w-100 d-flex"
			style = {{'--index':activeIndex}}
		>
			{	
				function(_item,_index,_length){
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
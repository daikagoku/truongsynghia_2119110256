import {List,Item,Button} from '../../tags/Tags';
export default function MainSlideIndicators({listItem,activeIndex,onClick,...props}){
	return(
		<List listItem={listItem}
			className="main-slide-indicators mx-0 my-2 w-100 position-absolute end-6 bottom-0 translateX-6 d-flex justify-content-center">
			{
				function(_item,_index){	
					let __className = _index===activeIndex?"active":"";			
					return(
					<Item className="mx-1"key={_index}>
						<Button 
							className={"slide-indicator main-slide-indicator fs-0x fs-0em hs-6em ws-2em ws-md-4em ws-lg-6em hs-0x ws-2x "+__className}
							data-index={_index}
							data-tab="main-slide-indicator"
							onClick={onClick}
						>							
						</Button>
					</Item>
				)}
			}
		</List>
	)
}
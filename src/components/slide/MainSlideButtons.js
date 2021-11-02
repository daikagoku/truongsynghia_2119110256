import {List,Item,Button,Icon} from '../../tags/Tags';
export default function MainSlideButtons({onClick,...props}){
	return(
		<List className="main-slide-buttons p-0 m-0 w-100 position-absolute end-6 bottom-6 translate-6 d-flex justify-content-between">
			<Item className="">
				<Button onClick={onClick} 
					className="slide-button main-slide-button circle-btn back fs-8 ws-6em hs-6em translateX-6">
					<Icon className="fas fa-chevron-left"></Icon>
				</Button>
			</Item>
			<Item className="">
				<Button onClick={onClick} 
					className="slide-button main-slide-button circle-btn next fs-8 ws-6em hs-6em translate-X-6">
					<Icon className="fas fa-chevron-right"></Icon>
				</Button>
			</Item>
		</List>)	
}

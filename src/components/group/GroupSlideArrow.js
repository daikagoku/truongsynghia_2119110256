import {List,Item,Button,Icon} from '../../tags/Tags';
import "./GroupSlideArrow.css";
export default function GroupSlideArrow({onClick}) {
    return (
        <List className="d-flex justify-content-between absolute bottom-6 end-6 translate-6 fs-1x fs-8 w-100 p-0 ">
	    		<Item className=" d-flex">
	    			 <Button 
	    			 	className={"group-slide-arrow ws-6em hs-6em circle-btn back"}
	    			 	onClick={onClick}
	    			 >
	    			 	<Icon className="fas fa-chevron-left"/>
	    			 </Button>
	    		</Item>
	    		<Item className=" d-flex">
	    			 <Button 
	    			 	className={"group-slide-arrow ws-6em hs-6em circle-btn next"}
	    			 	onClick={onClick}
	    			 >
	    			 	<Icon className="fas fa-chevron-right"/>
	    			 </Button>
	    		</Item>
	    </List>
    );
  };


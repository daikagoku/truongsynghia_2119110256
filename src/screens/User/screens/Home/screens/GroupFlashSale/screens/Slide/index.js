import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {createContext,useRef,useState,useMemo,useEffect} from 'react';
import './index.css';
import CardProductVertical from '../../../../../../components/CardProductVertical/';
import {NextButton,BackButton} from './Buttons/';
export const SlideContext = createContext();
export default function({fetchData}){
	const [index,setIndex] = useState();
	const thisRef = useRef();

	const items = useMemo(function(){
		return fetchData.data.map(function(item,index){
			return (<CardProductVertical prefix="group-flash-sale" data={item} index = {index} />)
		});
	},[fetchData.data]);

	useEffect(function(){
		if(thisRef.current){
			setIndex(thisRef.current.state.activeIndex);
		}
	},[thisRef.current]);
	const handleSlideChanged = useMemo(function(){
		return function(event){
			setIndex(event.item);
		};
	})
	if(!fetchData.error){
		return (
		  <SlideContext.Provider value={[thisRef.current,fetchData.data]}>
		    <div 	id="group-flash-sale">
			    	 		<AliceCarousel 
									ref = {thisRef}
									activeIndex={index}
									infinite
									disableDotsControls
									onSlideChanged={handleSlideChanged}
									disableDotsControls
									disableButtonsControls
									mouseTracking
									responsive = {
										{
											 0:{items:2},
											 600:{items:3},
											 800:{items:4},
											 1200:{items:5},
											 1400:{items:6}
										}
									}
									items={items}
								/>
			    	 		
		    	 	</div>
		    </SlideContext.Provider>
		  );
	}else{
		return <></>
	}
}
/*
<BackButton />
<NextButton />
*/
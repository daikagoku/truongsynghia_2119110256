import React,{useState,useEffect} from 'react';
import './MainSlide.css';
import Fetch from '../../core/Fetch';
import MainSlideList from './MainSlideList';
import MainSlideIndicators from './MainSlideIndicators';
import MainSlideButtons from './MainSlideButtons';
const MainSlide = (function(){
	return function({className,...props}){
		const [activeIndex,setActiveIndex] = useState(0);
		const listItem = Fetch({
			keyApi  :'slide',
			initData:[]
		});
		const totalItem = listItem.length-1;
		useEffect(function(){
			const auto = setInterval(function(){
				nextSlide(activeIndex+1);
			},5000);
			return ()=>clearInterval(auto);
		},[activeIndex]);
		function nextSlide(nextIndex){
			setActiveIndex(setNextIndex(nextIndex));
		};
		function setNextIndex(nextIndex){
			if(nextIndex > totalItem){
				return 0;
			}else if(nextIndex < 0){
				return totalItem;
			}else{
				return nextIndex;
			}
		};
		if(totalItem > 0){	
			function handleClickButton(event){
				if(event.this.classList.contains('back')){
					nextSlide(activeIndex-1);
				}else if(event.this.classList.contains('next')){
					nextSlide(activeIndex+1);
				}
			};
			function handleClickIndicator(event){
				if(!event.this.classList.contains('active')){
					nextSlide(Number.parseInt(event.this.dataset.index));
				};
			};
			return(
				<div className="row my-2">
					<div 
						id="main-slide"
						className="main-slide px-0"
					>
						<div className="overflow-hidden relative w-100 inset-t-4">
							<MainSlideList listItem={listItem}activeIndex={activeIndex}/>
							<MainSlideIndicators 
								onClick={handleClickIndicator}
								listItem={listItem}
								activeIndex={activeIndex}
							/>
							<MainSlideButtons onClick={handleClickButton} />
						</div>
					</div>
				</div>
			);
		}else{
			return (<></>)
		}
	};
})();

export default MainSlide;
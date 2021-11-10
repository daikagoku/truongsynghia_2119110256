import {useReducer} from 'react';
import {SlideContext,initData,reducer} from './init';
import './index.css';
import MainSlideList from './list';
import MainSlideIndicators from './indicators';
import MainSlideButtons from './buttons';
function MainSlide({className,...props}){
		const [state,dispatch] = useReducer(reducer,initData);
		return(
			<SlideContext.Provider value={[state,dispatch]}>
				<section className="container-fluid">
					<div className="container">
						<div className="row my-2">
							<div 
								id="main-slide"
								className="main-slide px-0"
							>
								<div className="overflow-hidden relative w-100 inset-t-4">
									<MainSlideList />
									<MainSlideIndicators />
									<MainSlideButtons  />
								</div>
							</div>
						</div>
					</div>
				</section>
			</SlideContext.Provider>
		);
	};

export default MainSlide;
import './index.css';
import {forwardRef,memo,useRef} from 'react';
import clsx from 'clsx';
import {Button,Icon} from '../../components/';
function Error({history,location,match,...props},ref){
	const thisRef = useRef({});
	console.log(history,location,match)
	return(
		<section className="container-fluid">
			<div className="container">
				<div className="row">
					<div className="error-page relative">
						<span className="error-number">404</span>
						<span className="error-title">PAGE NOT FOUNT</span>
						<span className="error-description">We can't seen find page you're looking for.</span>
						<div className="d-flex">
							<Button to="/" className="error-button circle-btn">
								<Icon icon="fas fa-home"/>
								<span className="text">Go Home</span>
							</Button>
							<Button onClick={()=>(history.goBack())} className="error-button circle-btn">
								<Icon icon="fas fa-chevron-left"/>
								<span className="text">Go Back</span>
							</Button>
						</div>
					</div>	
				</div>	
			</div>	
		</section>	
	)
}
export default memo(forwardRef(Error));
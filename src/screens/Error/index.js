import './index.css';
import {useMemo} from 'react';
import {useHistory} from 'react-router-dom';
import {Button,Icon} from '../../components/';
function Error({...props}){
	const history = useHistory();
	const handleClickBackButton = useMemo(function(){
		return function(){
			history.goBack();
		}
	},[history.pathname])
	return(
		<section className="container-fluid">
			<div className="container">
				<div className="row">
					<div className="error-page relative">
						<span className="error-number">404</span>
						<span className="error-title">PAGE NOT FOUNT</span>
						<span className="error-description">Oh no, We can't see the page you're looking for.</span>
						<div className="d-flex">
							<Button to="/" className="error-button circle-btn">
								<Icon icon="fas fa-home"/>
								<span className="text">Go Home</span>
							</Button>
							<Button onClick={handleClickBackButton} to="" className="error-button circle-btn">
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
export default Error;
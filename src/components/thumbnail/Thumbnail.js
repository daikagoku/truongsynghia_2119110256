import React from 'react';
import './Thumbnail.css'
const Thumbnail = (function(){
	return function({children,className,thumbnailClass,...props}){
		return(
			<div className={"thumbnail position-relative "+className} {...props}>
				<div className={"thumbnail-container position-relative "+thumbnailClass}>
					<div className="thumbnail-content position-absolute top-0 end-0 start-0 bottom-0">
						{children}
					</div>
				</div>
			</div>
		);
	};	
})();
export default Thumbnail;
import './Widget.css';
import {useState,useEffect,memo} from "react";
import {Div,Button} from '../../tags/Tags';
function Widget({children,title,className,...props}) {
  return (
      	<Div className={"widget "+className} {...props}>
            {
                title &&  
                <Div className="widget-head">
                    <Button className="widget-title">
                        {title}
                    </Button>   
                </Div>
            }
      		<Div className="widget-body">
      			{children}
      		</Div>
      	</Div>
  );
}

export default memo(Widget);

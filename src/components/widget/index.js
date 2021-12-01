import './index.css';
import {memo} from "react";
import {Button} from '../index';
function Widget({children,title,prefix,className,...props}) {
  const widgetAttr={
    className:"widget"
  };
  if(prefix !== undefined){
    widgetAttr.className+=" "+prefix+"_widget";
  };
  if(className !== undefined){
    widgetAttr.className+=" "+className;
  };
  return (
      	<div {...widgetAttr}>
            {
                title &&  
                <div className="widget-head">
                    <Button className="widget-title">
                        {title}
                    </Button>   
                </div>
            }
      		<div className="widget-body">
      			{children}
      		</div>
      	</div>
  );
}

export default memo(Widget);

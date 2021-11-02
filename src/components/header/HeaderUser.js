import {Button,Icon,Image} from '../../tags/Tags';
import {useState,useEffect,memo} from "react";
import Fetch from '../../core/Fetch';
import Thumbnail from '../thumbnail/Thumbnail'
function HeaderUser({className,...props}) {
  const user = Fetch({
    keyApi  :'user',
    initData:{}
  });
  function RenderButton(){
      if(user!==undefined && user.avatar !== undefined){
        return(            
          <Thumbnail thumbnailClass="circle">
            <Image className="img-cover" src = {user.avatar} />
          </Thumbnail>
        )
      }else{
          return(
              <Icon className="fas fa-user" />
          )
      }
  };
  return (
      <>
      	 <Button className={className}>
              {RenderButton()}
         </Button>

      </>
  );
}

export default HeaderUser;

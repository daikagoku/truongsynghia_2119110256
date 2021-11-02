import GroupCard from './GroupCard';
import GroupSlideCard from './GroupSlideCard';
import PostCardVertical from '../card/PostCardVertical';
const GroupProduct = (function(){
  let count = 0;    
  return function(props) {
    const itemAttr = {
        className:"col col-6 col-sm-4 col-lg-3 col-xxl-2 py-1 px-2"
    };
    return (
        <GroupCard keyApi="post"{...props}>
           {
              (listItem)=>(
                <GroupSlideCard listItem={listItem}itemAttr={itemAttr}>
                    {
                        (item)=>(
                            <PostCardVertical dataProduct={item} />
                        )
                    }
                </GroupSlideCard>
              )
           }
        </GroupCard>
    );
  };
})();
export default GroupProduct;

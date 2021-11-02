import GroupCard from './GroupCard';
import GroupSlideCard from './GroupSlideCard';
import ProductCardVertical from '../card/ProductCardVertical';
const GroupCardProduct = (function(){
  let count = 0;    
  return function(props) {
    const itemAttr = {
        className:"col col-6 col-sm-4 col-lg-3 col-xxl-2 py-1 px-2"
    };
    return (
        <GroupCard keyApi="product"{...props}>
           {
              (listItem)=>(
                <>
                    <div className="col col-3"></div>
                    <div className="col col-9">
                        <GroupSlideCard listItem={listItem}itemAttr={itemAttr}>
                            {
                                (item)=>(
                                    <ProductCardVertical dataProduct={item} />
                                )
                            }
                        </GroupSlideCard>
                    </div>
                </>
              )
           }
        </GroupCard>
    );
  };
})();
export default GroupCardProduct;

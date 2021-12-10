import {memo} from 'react';
import './index.css';
import useFetch from '../../../../../../core/useFetch';
import {Button} from '../../../../../../components/';
import GroupSlideCard from './screens/Slide/';
import GroupSlideCardLoading from './screens/LoadingSlide/';
import GroupFlashTitle from './screens/Title';
import GroupFlashTime from './screens/Time';
function GroupFlashSale(props) {
    const [listItem] = useFetch({
        initData:[],
        keyApi:'product',
        handle:function(data){
            const newProducts = data.reduce(function(results,{versions,..._product}){
                versions.forEach(function({id,...__version},__index){
                    if(__version.salePrice !== undefined){
                        const __product = {..._product};
                        __product.version=id;
                        __product.versions=versions;
                        results.push(__product);
                    }
                });
                return results;
            },[]);
            return newProducts;
        }
    });
    return (
        <div className="container-fluid group-flash-sale-section px-0">
             <div className="container-lg">
                 <div className="row">
                     <div className="col col-12 group-flash-sale-content">
                         <div className="row group-flash-sale-head">
                             <div className="col col-12 col-md-4 align-items-center justify-content-center">
                                 <GroupFlashTitle />
                             </div>
                             <div className="col col-8 col-md-5 align-items-center justify-content-center">
                                 <GroupFlashTime /> 
                             </div>
                             <div className="col col-4 col-md-3 align-items-center justify-content-center">
                                 <Button className="group-flash-sale-button-view"to="/flashsale">Xem thêm</Button>
                             </div>
                         </div>
                         <div className="row group-flash-sale-body">
                            {
                                listItem.length !== 0 && <GroupSlideCard listItem={listItem} />
                                                      || <GroupSlideCardLoading />
                            }  
                         </div>
                     </div>
                </div>
            </div>
        </div>
    );
};    
export default memo(GroupFlashSale);
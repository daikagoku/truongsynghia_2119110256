import {memo} from 'react';
import './index.css';
import useFetch from '../../../core/useFetch';
import {Button} from '../../../components/tags';
import GroupSlideCard from '../../../components/slidecard';
import ProductCardVertical from '../../../components/productcard/vertical';
import GroupFlashTitle from './title';
import GroupFlashTime from './time';
function GroupFlashSale(props) {
    const [listItem] = useFetch({
        initData:[],
        keyApi:'product',
        filter:(item)=>(item.salePrice !== undefined)
    });
    const itemAttr = {
        className:"col col-6 col-md-4 col-lg-3 col-xl-2 py-1 px-2"
    };
        return (
            <section className="container-fluid group-flash-sale-section">
                    <div className="container">
                        <div className="row group-flash-sale">
                            <div className="col col-12 group-flash-sale-content">
                                <div className="row group-flash-sale-head">
                                    <div className="col col-12 col-md-4 align-items-center justify-content-center">
                                        <GroupFlashTitle />
                                    </div>
                                    <div className="col col-8 col-md-5 align-items-center justify-content-center">
                                        <GroupFlashTime /> 
                                    </div>
                                    <div className="col col-4 col-md-3 align-items-center justify-content-center">
                                        <Button className="group-flash-sale-button-view">Xem thêm</Button>
                                    </div>
                                </div>
                                <div className="row group-flash-sale-body">
                                    <GroupSlideCard listItem={listItem} itemAttr={itemAttr}>
                                            {
                                                (item,index)=>(
                                                    <ProductCardVertical key={index} prefix="group-flash-sale" data={item} />
                                                )
                                            }
                                    </GroupSlideCard>       
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        );
};    
export default memo(GroupFlashSale);

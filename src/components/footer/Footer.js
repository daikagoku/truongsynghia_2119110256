import FooterList from './FooterList';
import FooterInfo from './FooterInfo';
import Widget from '../widget/Widget';
import FooterSearch from './FooterSearch';
import FooterContact from './FooterContact';
import FooterPayment from './FooterPayment';
import FooterDownload from './FooterDownload';
import {List,Item,Button,Icon} from '../../tags/Tags';
import './Footer.css'
function Footer(props) {
  return (
      <section id="footer"className="container-fluid"{...props}>
      		<footer className="container px-1 py-4">
      			<div className="row py-2">
                <div className="col col-12 col-sm-6 col-lg-3 p-1">
                  <Widget title="THÔNG TIN"className="h-100">
                      <FooterList 
                        keyApi="post"
                        filter={(item)=>(item.parent === "thong-tin")}
                      />
                  </Widget>
                </div>
                <div className="col col-12 col-sm-6 col-lg-3 p-1">
                  <Widget title="CHÍNH SÁCH"className="h-100">
                      <FooterList 
                        keyApi="post"
                        filter={(item)=>(item.parent === "chinh-sach")}
                      />
                  </Widget>
                </div>
                <div className="col col-12 col-sm-6 col-lg-3 p-1">
                  <Widget title="THANH TOÁN"className="h-100">
                    <FooterPayment />
                  </Widget>
                </div>
                <div className="col col-12 col-sm-6 col-lg-3 p-1">
                  <Widget title="TẢI ỨNG DỤNG"className="h-100">
                    <FooterDownload />
                  </Widget>
                </div>
                <div className="col col-12 col-lg-5 p-1">
                  <Widget title="LIÊN HỆ" className="h-100">
                      <FooterInfo />
                  </Widget>
                </div>
                <div className="col col-12 col-md-5 col-lg-3 col-xxl-2 p-1">
                  <Widget title="TRẠNG THÁI" className="h-100">
                      
                  </Widget>
                </div>
                <div className="col col-12 col-md-7 col-lg-4 col-xxl-5 p-1">
                  <Widget title="LIÊN HỆ" className="h-100">
                      <FooterSearch />
                      <FooterContact />
                  </Widget>
                </div>
      			</div>
      		</footer>
      </section>
  );
}

export default Footer;

import Widget from "../../../components/widget";
import FooterList from "../../../components/footer/list";
import FooterInfo from "../../../components/footer/info";
import FooterSearch from "../../../components/footer/search";
import FooterContact from "../../../components/footer/contact";
import FooterPayment from "../../../components/footer/payment";
import FooterDownload from "../../../components/footer/download";
import './index.css'
function Footer(props) {
  return (
      <section id="footer"className="container-fluid">
      		<footer className="container px-1 pt-3 pb-5">
      			<div className="row py-2">
                <div className="col col-12 col-sm-6 col-lg-4 col-xl-3 p-1 order-0">
                  <Widget title="THÔNG TIN"prefix="footer">
                      <FooterList 
                        keyApi="post"
                        filter={(item)=>(item.parent === "thong-tin")}
                      />
                  </Widget>
                </div>
                <div className="col col-12 col-sm-6 col-lg-4 col-xl-3 p-1 order-1">
                  <Widget title="CHÍNH SÁCH"prefix="footer">
                      <FooterList 
                        keyApi="post"
                        filter={(item)=>(item.parent === "chinh-sach")}
                      />
                  </Widget>
                </div>
                <div className="col col-12 col-md-6 p-1 order-2 order-lg-4 order-xl-5 ">
                  <Widget title="LIÊN HỆ" prefix="footer">
                      <FooterSearch />
                      <FooterContact />
                  </Widget>
                </div>
                <div className="col col-12 col-md-6 p-1 order-3 order-lg-3 order-xl-4">
                  <Widget title="LIÊN HỆ" prefix="footer">
                      <FooterInfo />
                  </Widget>
                </div>
                <div className="col col-6 col-lg-4 col-xl-3 p-1 order-4 order-lg-2">
                  <Widget title="TRẠNG THÁI" prefix="footer"></Widget>
                </div>
                <div className="col col-6 col-xl-3 p-1 order-5 order-sm-5 order-xl-3">
                  <Widget title="TẢI ỨNG DỤNG"prefix="footer">
                    <FooterDownload />
                  </Widget>
                </div>
                <div className="col col-12 col-lg-6 col-xl-12 p-1 order-6">
                  <Widget title="THANH TOÁN"prefix="footer">
                    <FooterPayment />
                  </Widget>
                </div>
      			</div>
      		</footer>
      </section>
  );
}

export default Footer;
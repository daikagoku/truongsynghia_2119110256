import {List,Item,Link,Icon} from '../../tags';
function HeaderContact(props) {
  return (
      		<div id="header-contact"className="row">
      				<List className="d-flex justify-content-end ">
      						<Item className="d-flex">
      								<Link className="d-flex align-items-center justify-content-center py-1 px-2">
                          <Icon className="mx-2 fas fa-phone-alt"/>
      										<span>0000000000</span> 
      								</Link>	
      						</Item>
                  <Item className="d-flex">
                      <Link className="d-flex align-items-center justify-content-center py-1 px-2">
                          <Icon className="mx-2 far fa-question-circle"/>
                          <span>Trợ giúp</span> 
                      </Link> 
                  </Item>
                  <Item className="d-flex">
                      <Link className="d-flex align-items-center justify-content-center py-1 px-2">
                          <Icon className="mx-2 fas fa-exclamation-circle"/>
                          <span>Báo cáo</span> 
                      </Link> 
                  </Item>
      						<Item className="d-flex">
      								<Link className="d-flex align-items-center justify-content-center py-1 px-2">
      										<Icon className="mx-2 fas fa-store"/>
      										<span>Hệ thống cửa hàng</span> 
      								</Link>	
      						</Item>
      				</List>
      		</div>
  );
}

export default HeaderContact;

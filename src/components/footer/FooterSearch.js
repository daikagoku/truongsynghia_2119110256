import './FooterSearch.css';
import {memo} from 'react';
import {List,Item,Button,Icon,Form,Input} from '../../tags/Tags';
function FooterSearch(props) {
  return (
      	<Form className="footer-search position-relative w-100 d-flex my-2">
      		<Input type="email"className="w-100 input-form footer-search-input" placeholder="Tìm kiếm sản phẩm"/>
      		<Button type="submit"className="footer-search-btn">
      			<Icon className="fas fa-paper-plane"/>
      		</Button>
      	</Form>
  );
}

export default memo(FooterSearch);

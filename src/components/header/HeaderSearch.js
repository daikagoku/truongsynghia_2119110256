
import {Form,Input,List,Item,Button,Icon} from '../../tags/Tags';
import './HeaderSearch.css';
function HeaderSearch(props) {
  return (
      	<Form className="header-search">
      		<Input className="header-search-input" placeholder="Tìm kiếm sản phẩm"isRequired/>
      		<Button type="submit"className="header-search-btn square-btn">
      			<Icon className="fas fa-search"/>
      		</Button>
      	</Form>
  );
}

export default HeaderSearch;

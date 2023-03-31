import { useSelector } from "react-redux";
import { Pagination } from "@material-ui/lab"
export const Page = ({page,setPage}) => {
 
  const { totalPage,products } = useSelector((store) => store.productReducer);
  const itemsPerPage = 10;

  const handleChange = (event, value) => {
   setPage(value);
  };
  return (
    <div>
      <Pagination count={Math.ceil(totalPage/8)} page={page} onChange={handleChange} color="primary" style={{marginLeft:"700px",marginTop:"30px"}}/>
    </div>
  );
     
};

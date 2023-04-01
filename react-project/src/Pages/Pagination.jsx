import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from "@material-ui/lab"
export const Page = ({page,setPage}) => {
 
  const { totalPage,products } = useSelector((store) => store.productReducer);
  const itemsPerPage = 10;
  const useStyles = makeStyles((theme) => ({
    pagination: {
      '& .MuiPaginationItem-root': {
        fontSize: '1.2rem',
        height: '48px',
      },
      '& .MuiPaginationItem-sizeLarge': {
        fontSize: '1.5rem',
        height: '64px',
      },
    },
  }));
  const classes = useStyles();
  const handleChange = (event, value) => {
    console.log(value)
   setPage(value);
  };
  return (
    <div>
      <Pagination count={Math.ceil(totalPage/8)} page={page} onChange={handleChange} color="primary" className={classes.pagination} style={{marginLeft:"700px",marginTop:"30px",fontSize:"30px",fontWeight:"bold"}}/>
    </div>
  );
     
};

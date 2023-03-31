import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";

export const Pagination = ({ page, setPage }) => {
  const { totalPage } = useSelector((store) => store.productReducer);
  let allpages = Math.ceil(totalPage / 10);
  let arr = new Array(allpages).fill(0);
  return (
    <>
      {arr.map((e, index) => {
        return (
          < >
            <Button
              style={{
                backgroundColor: page === index + 1 ? "grey" : "white",
                border: "1px solid black",
                textAlign: "center",
              
              }}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </Button>
          </>
        );
      })}
    </>
  );
};

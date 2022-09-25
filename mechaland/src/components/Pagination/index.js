import { Box, Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import { useStoreApi } from '../../context/useAPI';

const pageSize = 9;

export default function AppPagination({setDatas, status, category, setLoad}) {
  console.log(setDatas, status, category, setLoad);
	const { axios } = useStoreApi();
  const [paging, setPaging] = useState({
    count: 0,
    from: 0,
    to: pageSize
  })

  const getData = async ({from, to, category, status}) => {
	  try {
      const response = {};
      {status ? 
        response = await axios.get(`api/v1/products/?category=${category}`)
      :
        response = await axios.get(`api/v1/interestcheck/`);
      }
      const data = response.data.slice(from, to);
			console.log("Data: ", { raw: response.data, sliced: data, category: category });
			await setPaging({...paging, count: response.data.length});
			await setDatas(data);
	  } catch (err) {
			console.log("ERROR: ", err);
	  }

    setLoad(false);
	};
  
	useEffect(() => {
	  getData({from: paging.from, to: paging.to, category: category, status: status});
	},[paging.from, paging.to]);

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPaging({...paging, from: from, to: to});
  }

  return (
    <Box justifyContent={"center"} alignItems="center" display={"flex"} sx={{margin: "20px 0px"}}>
      <Pagination
        count={Math.ceil(paging.count / pageSize)}
        onChange={handlePageChange}
      />
    </Box>
  );
};
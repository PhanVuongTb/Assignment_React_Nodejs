import React from 'react'
import { Pagination } from 'antd';
type Props = {}

const Paginations = (props: Props) => {
  return (
    <div>
        <Pagination 
        defaultPageSize={5}
        defaultCurrent={1} 
        total={500} 
        showSizeChanger= {true}
        pageSizeOptions = {[5, 10, 15, 20]}
         />
    </div>
  )
}

export default Paginations
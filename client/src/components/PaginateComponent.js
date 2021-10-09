import React from 'react'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link } from 'react-router-dom'

const PaginateComponent = ({ pages, page, keyword = '' }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Link
            key={x + 1}
            to={
                keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`}>
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </Link>
        ))}
      </Pagination>
    )
  )
}

export default PaginateComponent

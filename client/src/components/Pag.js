import * as React from "react";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

export default function PaginationLink({ pages, page, keyword = "" }) {
  return (
    <>
      <Pagination>
      {[...Array(pages).keys()].map((x) => (
          <Link
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
        <PaginationItem
          component={Link}
          to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
          {...item}
        />
        </Link>
      </Pagination>
    </>
  );
}

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const PaginationContainer = styled.div`
  margin: 20px auto 0 auto;
  text-align: center;
`

const PaginationLink = styled(Link)`
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin: 2px;
  background-color: #555555;
  text-decoration: none;
  color: #fff;

  &:hover { background-color: #d40000; }
  &.selected { background-color: #d40000; }
`

const getLink = (link, pageNumber = 1) => {
  return pageNumber === 1 ? link : `${link}/${pageNumber}`
}

const Pagination = ({link, current, max}) => {
  const visibleRange = 4;
  let visibleFirstPage = current - visibleRange;
  let visibleLastPage = current + visibleRange;
  if(visibleFirstPage < 1) visibleFirstPage = 1;
  if(visibleLastPage > max) visibleLastPage = max;
  const pages = [];
  for(let i = visibleFirstPage; i <= visibleLastPage; i++) pages.push(i);
  return(
    <PaginationContainer>
      {visibleFirstPage > 1 && <PaginationLink to={getLink(link)}>‹‹</PaginationLink>}
      {current > 1 && <PaginationLink to={getLink(link, current - 1)}>‹</PaginationLink>}
      {
        pages.map(page => (
          <PaginationLink key={page} to={getLink(link, page)} className={page === current && 'selected'}>
            {page}
          </PaginationLink>
        ))
      }
      {current < max && <PaginationLink to={getLink(link, current + 1)}>›</PaginationLink>}
      {visibleLastPage < max && <PaginationLink to={getLink(link, max)}>››</PaginationLink>}
    </PaginationContainer>
  )
}

Pagination.propTypes = {
  link: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
}

export default Pagination

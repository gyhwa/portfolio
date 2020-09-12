import React from 'react'
import { Link } from 'gatsby';

const Pagination = ({ numPages, currentPage }) => {
	if(numPages === 0) return ""

	const pagesArray = Array.from(Array(numPages).keys()).map( (_, index) => index + 1);
	const previousPage = currentPage - 1 <= 1 ? "" : currentPage - 1;
  var nextPage = "";
  if (currentPage === 1) {
    nextPage = ""
  } else if (currentPage === numPages) {
    nextPage = currentPage
  } else {
    nextPage = currentPage + 1
  }


	return(
		<div>
			<Link
				to={`/blog/${previousPage}`}
			>
				{"<"}
			</Link>
			{
				pagesArray.map( num => {
					return(
						<Page key={num} num={num} current={num === currentPage} />
					)
				})
			}
			<Link
				to={`/blog/${nextPage}`}>
					{">"}
			</Link>
		</div>
	)
}

const Page = ({ num, current }) => {
	const toPage = num === 1 ? "" : num;

	return(
		<Link to={`/blog/${toPage}`}>{num}</Link>
	)
}

export default Pagination

import * as React from "react";
import Paginating from "react-paginating";
import { Pagination } from "react-bootstrap";

export default class Paginator extends React.Component {

    constructor(props) {
        super(props);
    }

    firstPageBtn;
    lastPageBtn;

    setFirstPage = () => {
        var link = this.firstPageBtn.firstChild;
        link.click();
    }

    setLastPage = () => {
        var link = this.lastPageBtn.firstChild;
        link.click();
    }

    render() {
        return <Paginating
            total={this.props.totalResults}
            limit={this.props.limitPerPage}
            currentPage={this.props.currentPage}
        >
            {({
                pages,
                currentPage,
                hasNextPage,
                hasPreviousPage,
                previousPage,
                nextPage,
                totalPages,
                getPageItemProps
            }) => (
                    <Pagination>

                        <Pagination.Item
                            ref={x => this.firstPageBtn = x}
                            key={`first`}
                            {...getPageItemProps({
                                total: totalPages,
                                pageValue: 1,
                                onPageChange: (num, e) => this.props.onChangePage(num)
                            })}
                        >
                            first
                    </Pagination.Item>

                        {hasPreviousPage && (
                            <Pagination.Item
                                key={`prev`}
                                {...getPageItemProps({
                                    total: totalPages,
                                    pageValue: previousPage,
                                    onPageChange: (num, e) => this.props.onChangePage(num)
                                })}
                            >
                                {`<`}
                            </Pagination.Item>
                        )}

                        {pages.map(page => {
                            return <Pagination.Item
                                key={page}
                                active={page === currentPage}
                                {...getPageItemProps({
                                    total: totalPages,
                                    pageValue: page,
                                    onPageChange: (num, e) => this.props.onChangePage(num)
                                })}
                            >
                                {page}
                            </Pagination.Item>;
                        })}

                        {hasNextPage && (
                            <Pagination.Item
                                key={`next`}
                                {...getPageItemProps({
                                    total: totalPages,
                                    pageValue: nextPage,
                                    onPageChange: (num, e) => this.props.onChangePage(num)
                                })}
                            >
                                {`>`}
                            </Pagination.Item>
                        )}

                        <Pagination.Item
                            ref={x => this.lastPageBtn = x}
                            key={`last`}
                            {...getPageItemProps({
                                total: totalPages,
                                pageValue: totalPages,
                                onPageChange: (num, e) => this.props.onChangePage(num)
                            })}
                        >
                            last
                    </Pagination.Item>

                    </Pagination>
                )}
        </Paginating>
    }
}
import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'

const Pagination = props => {
    const router = useRouter()
    let id = Number(router.query.id)

    return (
        <ul className="nav nav-pills justify-content-evenly" >
            <li className="nav-item align-self-center">
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li className="page-item prev-button-low">
                            <button className="page-button bg-chillyellow zoom-in border-0 previous" aria-label="Previous">
                                <span aria-hidden="true" style={{paddingLeft: '2px', paddingRight: '2px'}}> 
                                    <Link href={`/detail?id=${id > 1 ? id - 1 : 151}`}>
                                        <a className="nav-link bg-lightgrey p-0 rounded-1">
                                            <img src="/static/icons/a-prev.png" alt="Preview" border="0"/>
                                        </a>
                                    </Link>
                                </span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </li>

            { props.children }

            <li className="nav-item align-self-center">
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li className="page-item ms-2">
                            <button className="page-button bg-chillyellow zoom-in border-0 next" aria-label="Next">
                                <span aria-hidden="true" style={{paddingLeft: '2px', paddingRight: '2px'}}>
                                    <Link href={`/detail?id=${id < 151 ? id + 1 : 1}`}>
                                        <a className="nav-link bg-lightgrey p-0 rounded-1">
                                            <img src="/static/icons/a-next.png" alt="Next" border="0"/>
                                        </a>
                                    </Link>
                                </span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </li>
        </ul>
    );
}

export default Pagination;
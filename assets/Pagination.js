import React from 'react';

const Pagination = props => {
    return (
        <ul className="nav nav-pills justify-content-between" >
          
            <li className="nav-item align-self-center">
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        
                        <li className="page-item prev-button-low">
                            <button className="page-button bg-chillyellow zoom-in border-0 previous mt-2" aria-label="Previous">
                                <span aria-hidden="true" style={{paddingLeft: '2px', paddingRight: '2px'}}> 
                                    <img src="/static/icons/a-prev.png" alt="Preview" border="0" />
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
                            <button className="page-button bg-chillyellow zoom-in border-0 next mt-2" aria-label="Next">
                                <span aria-hidden="true" style={{paddingLeft: '2px', paddingRight: '2px'}}>
                                    <img src="/static/icons/a-next.png" alt="Next" border="0" />
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
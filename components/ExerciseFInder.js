import Image from 'next/image'
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import List from "./List"

const ExerciseFInder = () => {
    const [current, setCurrent] = useState(0)
    const [query, setQuery] = useState("")

    const perPage = 15;
    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrent(selectedPage)
    }
    const offset = current * perPage;
    const pageCount = Math.ceil(List.length / perPage)
    return (
        <div className='machineshit'>
            <h3>Search Our List of 100+ Exercises </h3>
            <input type="text" placeholder="Search by muscle group or specific muscle" className='thatsearch' onChange={e => setQuery(e.target.value)} />
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <div className='thatList'>
                    {query == "" ? List.slice(offset, offset + perPage).map(item => {
                        return (
                            <div className='finish' key={item.name}>
                                <h1>{item.name}</h1>
                                <Image src={`/${item.image}`} width="300px" height="300px" alt={item.name} />
                            </div>
                        )
                    }) : List.filter(item => item.tags.includes(query)).map(item => {
                        return (
                            <div className='finish' key={item.name}>
                                <h3>{item.name}</h3>
                                <Image src={`/${item.image}`} width="300px" height="300px" alt={item.name} />
                            </div>
                        )
                    })}
                </div>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination_link"}
                    nextLinkClassName={"pagination_link"}
                    disabledClassName={"paginationdisabled"}
                    activeClassName={"paginationactive"} />

            </div>
        </div>
    )
}

export default ExerciseFInder
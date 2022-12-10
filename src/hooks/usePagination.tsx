import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useEffect, useState } from 'react';


const containerPagination = {
    width: '100%',
    display: 'flex',
    margin: '0 auto',
    height: 50,
    position: 'fixed' as 'fixed',
    top: '85%',

    justifyContent: 'center',


}

const paginationStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    with: 200,
    height: 50
}


export default function usePaginationComponent(content: any, nroItems: number) {

    const [pagContent, setPagContent] = useState<any[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageinit, setPageInit] = useState<number>(0)
    const [pageEnd, setPageEnd] = useState<number>()
    const [totalPages, setTotalPages] = useState<number>(0)

    useEffect(() => {
        if (content.length > 0) {

            setPageInit(0);
            setPageEnd(0 + nroItems);
            setTotalPages(
                (content.length / nroItems) > Math.trunc(content.length / nroItems) ? (content.length / nroItems) + 1 : Math.trunc(content.length / nroItems)
            )
            setPagContent(content.slice(pageinit, pageEnd))
        }
    }, [content])

    useEffect(()=>{
        setPagContent(content.slice(pageinit==1?0:pageinit, pageEnd))

    },[currentPage])

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {

        if (value > totalPages) return



        setPageInit(value == 1 ? 1 : (value * nroItems) - nroItems)
        setPageEnd(value == 1 ? nroItems : (value * nroItems))
        setCurrentPage(value)
        

    };

    const PaginationComponent = () => {

        return (

            <div style={containerPagination}>
                <div style={paginationStyle}>

                    <Pagination showFirstButton showLastButton count={totalPages} onChange={handleChange} page={currentPage} variant="text" color='primary' style={{ boxShadow: '24px' }} />
                </div>

            </div>

        );
    }

    return [pagContent, PaginationComponent]

}
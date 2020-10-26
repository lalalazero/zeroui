import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Icon } from '../index'
import { makeClassSwitchs, scopedClassMaker } from '../_util/classes'
import './Pagination.scss'

const scopedClassName = scopedClassMaker('zeroUI-pagination')
const sc = scopedClassName

interface PaginationProps {
    total?: number
    pageSize?: number
    pageNumber?: number
    simple?: boolean
    hideIfOnePage?: boolean
}

interface PaginationInnerProps {
    total: number
    pageSize: number
    pageNumber: number
    simple: boolean
    hideIfOnePage: boolean
}

const PAGE_ELIPSIS = '...'

const Pagination: React.FC<PaginationProps> = (props) => {
    const {
        simple,
        hideIfOnePage,
        total,
        pageNumber,
        pageSize,
    } = props as PaginationInnerProps
    const [currentPage, setCurrentPage] = useState(pageNumber)
    const [endPage, setEndPage] = useState(1)
    useEffect(() => {
        const pages =
            total > 0
                ? total % pageSize === 0
                    ? total / pageSize
                    : Math.floor(total / pageSize) + 1
                : 0
        setEndPage(pages)
    }, [total, pageSize])
    const clsSwithes = makeClassSwitchs({
        simple: {
            useKey: simple,
        },
        hideIfOnePage: {
            useKey: hideIfOnePage,
        },
    })

    const onSelectPage = useCallback((idx: number) => {
        setCurrentPage(idx)
    }, [])

    const onSelectPagePrev = useCallback(() => {
        const newPage = currentPage - 1 <= 0 ? 1 : currentPage - 1
        setCurrentPage(newPage)
    }, [currentPage])

    const onSelectPageNext = useCallback(() => {
        const newPage = currentPage + 1 >= endPage ? endPage : currentPage + 1
        setCurrentPage(newPage)
    }, [currentPage, endPage])

    const displayPages = useMemo(() => {
        let array: any[] = []
        if (total > 0 && endPage > 5) {
            const array1 = new Array(2)
                .fill(1)
                .map((item, idx) => currentPage - idx - 1)
                .sort((a, b) => (a - b > 0 ? 1 : -1))
            const array2 = new Array(2)
                .fill(1)
                .map((item, idx) => currentPage + idx + 1)
            array = [...array1, currentPage, ...array2].filter(
                (j: number) => j > 0 && j <= endPage
            )
            if (array[0] > 1) {
                array.unshift(PAGE_ELIPSIS)
                array.unshift(1)
            }
            if (array[array.length - 1] < endPage) {
                array.push(PAGE_ELIPSIS)
                array.push(endPage)
            }
        } else {
            array = new Array(endPage).fill(1).map((item, idx) => idx + 1)
        }
        return array
    }, [currentPage, endPage, total])
    const renderPages = useMemo(() => {
        const array = displayPages.map((item, idx) => (
            <span
                className={
                    item === PAGE_ELIPSIS
                        ? ''
                        : `${sc('item')} ${
                            currentPage === item ? sc('active-page') : ''
                        }`
                }
                onClick={() => item !== PAGE_ELIPSIS && onSelectPage(item)}
                key={idx}
            >
                {item}
            </span>
        ))
        return array
    }, [currentPage, displayPages])

    return hideIfOnePage ? (
        <div className={sc(clsSwithes)}></div>
    ) : (
        <div className={sc(clsSwithes)}>
            <span
                className={sc('nav prev')}
                onClick={onSelectPagePrev}
                nav-disabled={`${currentPage === 1 || total <= 0}`}
            >
                <Icon name="left"></Icon>
            </span>
            {total > 0 ? (
                renderPages
            ) : (
                <span className={`${sc('item')} active-page`}>1</span>
            )}
            <span
                onClick={onSelectPageNext}
                className={sc('nav next')}
                nav-disabled={`${total <= 0 || currentPage === endPage}`}
            >
                <Icon name="right"></Icon>
            </span>
        </div>
    )
}

Pagination.defaultProps = {
    hideIfOnePage: false,
    simple: false,
    pageNumber: 1,
    total: 0,
    pageSize: 10,
}

export default Pagination

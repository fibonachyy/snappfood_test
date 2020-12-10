import React, { useState } from 'react'
import './filterModal.scss'
import * as cards from '../../cards'
import { useDispatch, useSelector } from 'react-redux'
import * as globalAction from '../../../store/actions/globalAction'


const FilterModal = props => {
    const dispatch = useDispatch()
    const { top_filters, active_top_filter, filter_section } = useSelector(state => state.global)
    const [selectedTopFilter, setSelectedTopFilter] = useState(active_top_filter)
    const [sectionFilters, setSectionFilter] = useState(filter_section);

    const handelChnageFilterSection = (data) => {
        const updateData = filter_section.map(node => {

            if (node.value === data.value) node.selected = true
            else node.selected = false
            return node
        })
        console.log(updateData);
        setSectionFilter([...updateData])
    }
    const selectFilterGenerator = (data = []) => {
        return data.map(node => {
            return <cards.FilterSelectCard selectItem={(e) => setSelectedTopFilter(e)} selectedItem={selectedTopFilter}  {...node} />
        })
    }

    const selectFilterSection = (data = []) => {
        return data.map(node => {
            return <cards.FilterToggleCard selectItem={(e) => handelChnageFilterSection(e)}  {...node} />
        })
    }


    const handelConfirmChange = () => {
        dispatch(globalAction.setTopFilter(selectedTopFilter))
        dispatch(globalAction.srtSectionFilter(sectionFilters))
    }
    return (
        <>
            <div className="filterModal animate__animated animate__slideInUp" onClick={e => e.stopPropagation()}>
                <header className='filterModal_header'>
                    <svg onClick={() => dispatch(globalAction.closeModal())} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="nonzero"><path fill="#404040" fill-opacity="0" d="M0 0h24v24H0z"></path><path fill="#404040" d="M13.414 12l2.122 2.121a1 1 0 0 1-1.415 1.415L12 13.414l-2.121 2.122a1 1 0 1 1-1.415-1.415L10.586 12 8.464 9.879A1 1 0 0 1 9.88 8.464L12 10.586l2.121-2.122a1 1 0 0 1 1.415 1.415L13.414 12zM4.93 19.071c-3.905-3.905-3.905-10.237 0-14.142 3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0zm1.414-1.414A8 8 0 1 0 17.657 6.343 8 8 0 0 0 6.343 17.657z"></path></g></svg>
                    <h2>فیلتر و مرتب سازی</h2>
                </header>
                <div className='filterModal_scrollArea'>
                    <section>
                        <h4>مرتب سازی</h4>

                        {selectFilterGenerator(top_filters)}

                        <h4>فیلتر</h4>
                        {selectFilterSection(filter_section)}
                        <cards.FilterToggleCard />


                    </section>
                </div>
                <footer className='filterModal_buttonArea'>
                    <button class="filterModal_buttonArea_lightbtn" onClick={handelConfirmChange}>اعمال</button>
                    <button class="filterModal_buttonArea_redbtn">حذف فیلترها</button>
                </footer>
            </div>
        </>
    )
}


export default FilterModal
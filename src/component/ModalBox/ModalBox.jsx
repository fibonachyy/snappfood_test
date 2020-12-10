import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FilterModal from './modalContent/FilterModal'
import './modalBox.scss';
import * as globalAction from '../../store/actions/globalAction'
const ModaleContainer = () => {
    const { modal_state, modal_content } = useSelector(state => state.global)
    const dispatch = useDispatch()
    const contentGenerator = () => {
        switch (modal_content) {
            case 'filter':
                return <FilterModal />
            default:
                return 'dwd'
        }
    }
    return (
        <React.Fragment>
            <div className={modal_state === true ? 'modalBox modalBox--active' : 'modalBox '} onClick={() => dispatch(globalAction.closeModal())}>
                <div className='modale_content'>
                    {contentGenerator()}
                </div>
            </div>
        </React.Fragment >
    )
}

export default ModaleContainer

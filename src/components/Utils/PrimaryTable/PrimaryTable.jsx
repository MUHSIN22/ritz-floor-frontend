import React, { Fragment, useEffect } from 'react'
import { AiFillDelete, AiFillCloseCircle, AiFillCheckCircle } from 'react-icons/ai'
import './PrimaryTable.css'

export default function PrimaryTable({ tableHeader, tableBody, deleteCol, deleteRow,isAction, approve, deny, rowAction }) {
    return (
        <>
            {
                tableBody && tableBody[0] ?
                    <table className='primary-table' cellPadding={0} cellSpacing={0}>
                        <thead>
                            <tr>
                                {
                                    tableHeader.map((item, index) => (
                                        <th key={index}>{item}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableBody.map((item, index) => (
                                    <tr key={index} onClick={() => rowAction ? rowAction(item.id) : null}>
                                        {
                                            Object.keys(item).map((key, keyIndex) => (
                                                <td>{key === 'id' ? index + 1 : item[key]}</td>
                                            ))
                                        }
                                        {
                                            deleteCol &&
                                            <td className='delete-icon' onClick={() => deleteRow(item.id, index)}><AiFillDelete /></td>
                                        }
                                        {
                                            isAction && 
                                            <td className='action-wrapper'>
                                                <AiFillCloseCircle className='action-icons' onClick={() => deny(item.id)} />
                                                <AiFillCheckCircle className='action-icons' onClick={() => approve(item.id)} />
                                            </td>
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    :
                    "No data found"
            }
        </>
    )
}

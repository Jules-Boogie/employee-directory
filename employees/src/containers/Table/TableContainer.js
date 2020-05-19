import React from 'react'
import TableHead from '../../components/Table/Tablehead'
import Dynamictable from '../../components/Table/Table'

function tableContainer(){
return (
    <div className="table table-hover table-dark">
    <table >
        <TableHead/>
        <Dynamictable/>

    </table>
    </div>
)



}

export default tableContainer;
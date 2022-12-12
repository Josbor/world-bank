import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import React, { useEffect } from 'react'
import './TransactionTable.scss'
import { red } from '@mui/material/colors';
import { fontSize } from '@mui/system';
import useLoading from '../../hooks/useLoading';

const TransactionTable = ({transactions}:any=[]) => {
    const handlesumit=(event:any)=>{
        console.log(Event)
    }
   

   
    
    const styleheader={
        fontSize:{xs:'x-small',sm:'small',md:'medium'},
        fontWeight:'600',
        padding:0,
        paddingLeft:1,
        paddingTop:2,
        paddingBottom:2,
        paddingRight:1
    }

    const styleBody={
       fontSize:{xs:'x-small',sm:'small',md:'medium'},
       padding:0,
       paddingLeft:1,
       paddingTop:2,
       paddingBottom:2,
       paddingRight:1
    }

    const tableContainer={
        maxWidth:{xs:'90%',md:800,lg:1024},
        margin:'0 auto'
    }

   
  return (
    <>
    {transactions.length>0&&
        <TableContainer component={Paper} sx={tableContainer}>
      <Table  aria-label="simple table" >
        <TableHead>
          <TableRow  >
            <TableCell size='small' sx={styleheader}  align="center">Tipo</TableCell>
            <TableCell size='small' sx={styleheader}  align="left">Fecha</TableCell>
            <TableCell align="left" sx={styleheader} >Description</TableCell>
            <TableCell size='small' sx={{...styleheader,display:{xs:'none',sm:'table-cell'}}} align="left">Ref</TableCell>
            <TableCell size='small' sx={styleheader} align="left">Monto</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((row:any) => (
              <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 },width:320 }}
              onClick={(e)=>handlesumit(e)}
              hover
              
              >
              <TableCell size='small' align="center" sx={styleBody}>{row.type=='INFLOW'?<ControlPointIcon fontSize='small' color='success'/>:<RemoveCircleOutlineIcon fontSize='small' color='warning'/>}</TableCell>
              <TableCell size='medium' sx={{...styleBody,fontSize:{xs:'xx-small',sm:'x-small',md:'small'}}}  className="date" align="left" >{row.value_date}</TableCell>
              <TableCell className="description" sx={{...styleBody,fontSize:{xs:'xx-small',sm:'x-small',md:'small'},maxWidth:{xs:90,sm:'100%'}}} align="left">{row.description}</TableCell>
              <TableCell size='small' sx={{...styleBody,display:{xs:'none',sm:'table-cell'}}}  className="ref" align="left">{row.reference}</TableCell>
              <TableCell  size='small' sx={{...styleBody,color:`${row.type=='OUTFLOW'?'#c74545':'#2c7e1b'}`}} scope='text-color:red' className={`amount ${row.type=='OUTFLOW'&&'red'}`} align="left">{row.currency}. {row.amount}</TableCell>
            </TableRow >
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
      
    
    
    }
     
          </>
  )
}

export default TransactionTable
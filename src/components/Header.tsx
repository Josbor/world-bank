import React from 'react'
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import { Link } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
const Header = ({ header }: any) => {

    return (
        <div className="header">
            <div className='header-icon-container'>{header.path&&<Link to={header.path}><ArrowBackIosSharpIcon /></Link>}</div>
            <div><h2>{header.tittle}</h2></div>
            <div className='header-icon-container'>
                <Tooltip title={header.help} >
                
                    <HelpOutlineOutlinedIcon />
              
                </Tooltip>
            </div>
        </div>
    )
}

export default Header
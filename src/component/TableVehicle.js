import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };




  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Baby Seat (0 Months - 9 Months)'),
  createData('Child Seat (9 Month - 4 Years)'),
  createData('Booster Seat (4 Month - 12 Years)'),

].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const TableCellWrapper = styled(TableCell)(() => ({
  fontFamily: 'DM Sans',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "23px",
  color: "#000000",

  '.uroo': {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '22px',
    lineHeight: '29px',
    color: '#0E4672',
  }



}))
const TableWrapper = styled(Table)(() => ({
  overflow: "hidden"
}))

export function TableVehicle() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  return (
    <TableContainer component={Paper}>
      <TableWrapper sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCellWrapper component="th" scope="row" >
                {row.name}
                <p className='uroo'>&#8364; 4</p>
              </TableCellWrapper>
              <TableCell>
                <div className="capsule-Number" style={{ position: "relative", top: ".5rem", }}>Number</div>
                <div className='d-flex gap-3'>
                  <div className="capsule-Number" style={{ position: "relative", top: "1.6rem" }}>
                    1
                  </div>
                  <div>
                    <PlusMinusBtn />
                  </div>
                </div>
              </TableCell>
              <TableCell>
                {/* {row.fat} */}
                <Tablecellbutten />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableWrapper>
    </TableContainer>
  );
}

const PlusMinusBtn = ({ onClickPlus, onClickMinus }) => {
  return (
    <div className='rounded-pill d-flex py-3' style={{ margin: "0px 0px 0px 0px", width: "6rem" }} >
      <span className='w-50 puls-minus-btn-darkblue' onClick={onClickPlus}>+</span>
      <span className='w-50 puls-minus-btn-skyblue' onClick={onClickMinus}>-</span>
    </div>
  )
};

const Tablecellbutten = () => {
  const { t } = useTranslation()

  return (
    <div style={{ display: "grid", placeContent: "center" }}>

      <button className="btn-primary btn-sm px-4">{t('wah')}</button>
    </div>

  )
}


// import React from 'react'

// export default function TableVehicle() {
//   return (
//     <div className='row'>
//       <div className='col-4'>
//         <span>Baby Seat (0Months - 9months)</span>
//       </div>
//       <div className='col-4'>

//       </div>
//       <div className='col-4'>
//         <button className="btn-primary btn-sm ">Choose</button>
//       </div>
//     </div>
//   )
// }

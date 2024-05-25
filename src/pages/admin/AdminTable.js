import React from 'react'
import styled from '@emotion/styled';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Pagination } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const TableCellWraper = styled(TableCell)(() => ({
    textAlign: 'right',
    fontstyle: 'normal',
    fontWeight: 500,
    fontSize: '15.65px',
    lineHeight: ' 20px',
    color: '#000000'
}));

const BodyTableCellWraper = styled(TableCell)(() => ({
    textAlign: 'center',
    fontstyle: 'normal',
    fontWeight: 500,
    fontSize: '15.65px',
    lineHeight: ' 20px',
    color: '#000000',
}));

const ApprovalWraper = styled(TableCell)(() => ({
    textAlign: 'center',
    fontstyle: 'normal',
    fontWeight: 500,
    fontSize: '15.65px',
    lineHeight: ' 20px',
    color: '#0F8D04',
    borderRadius: "10px",
}))
const PartnerWrapper = styled(TableCell)(() => ({
    textAlign: 'center',
    fontstyle: 'normal',
    fontWeight: 500,
    fontSize: '15.65px',
    lineHeight: ' 20px',
    color: '#0072CB',
}))

export default function AdminTable() {
    return (
        <>
            <TableContainer >
                <Table>
                    <TableHead sx={{ backgroundColor: "#FBFAFA", borderBottom: "0.978128px solid #F0F0F0" }}>
                        <TableRow >
                            <TableCellWraper component='th' align="right">No</TableCellWraper>
                            <TableCellWraper >Booking ID <ArrowUpwardIcon /></TableCellWraper>
                            <TableCellWraper >Date & Time <ArrowUpwardIcon /></TableCellWraper>
                            <TableCellWraper >Customer ID <ArrowUpwardIcon /></TableCellWraper>
                            <TableCellWraper >Accept Rides <ArrowUpwardIcon /></TableCellWraper>
                            <TableCellWraper >Partner Name <ArrowUpwardIcon /></TableCellWraper>
                            <TableCellWraper >Payment Status <ArrowUpwardIcon /></TableCellWraper>
                            <TableCellWraper >Total Payment <ArrowUpwardIcon /></TableCellWraper>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <BodyTableCellWraper>12345</BodyTableCellWraper>
                            <BodyTableCellWraper>12/09/2022 | 12:00 PM</BodyTableCellWraper>
                            <BodyTableCellWraper>AD74392043</BodyTableCellWraper>
                            <ApprovalWraper >Approval</ApprovalWraper>
                            <PartnerWrapper>Chance Ekstrom</PartnerWrapper>
                            <ApprovalWraper>Completed</ApprovalWraper>
                            <BodyTableCellWraper>₹1,230</BodyTableCellWraper>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <BodyTableCellWraper>12345</BodyTableCellWraper>
                            <BodyTableCellWraper>12/09/2022 | 12:00 PM</BodyTableCellWraper>
                            <BodyTableCellWraper>AD74392043</BodyTableCellWraper>
                            <ApprovalWraper >Approval</ApprovalWraper>
                            <PartnerWrapper>Chance Ekstrom</PartnerWrapper>
                            <ApprovalWraper>Completed</ApprovalWraper>
                            <BodyTableCellWraper>₹1,230</BodyTableCellWraper>
                        </TableRow>
                        <TableRow>
                            <TableCell>3</TableCell>
                            <BodyTableCellWraper>12345</BodyTableCellWraper>
                            <BodyTableCellWraper>12/09/2022 | 12:00 PM</BodyTableCellWraper>
                            <BodyTableCellWraper>AD74392043</BodyTableCellWraper>
                            <ApprovalWraper >Approval</ApprovalWraper>
                            <PartnerWrapper>Chance Ekstrom</PartnerWrapper>
                            <ApprovalWraper>Completed</ApprovalWraper>
                            <BodyTableCellWraper>₹1,230</BodyTableCellWraper>
                        </TableRow>
                        <TableRow>
                            <TableCell>4</TableCell>
                            <BodyTableCellWraper>12345</BodyTableCellWraper>
                            <BodyTableCellWraper>12/09/2022 | 12:00 PM</BodyTableCellWraper>
                            <BodyTableCellWraper>AD74392043</BodyTableCellWraper>
                            <ApprovalWraper >Approval</ApprovalWraper>
                            <PartnerWrapper>Chance Ekstrom</PartnerWrapper>
                            <ApprovalWraper>Completed</ApprovalWraper>
                            <BodyTableCellWraper>₹1,230</BodyTableCellWraper>
                        </TableRow>
                    </TableBody>
                </Table>
                <Pagination count={10} />
            </TableContainer>
        </>
    )
}

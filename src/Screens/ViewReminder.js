import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import TextareaAutosize from '@mui/base/TextareaAutosize';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import homeBackground from "../Assets/background.jpg";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from "react-router-dom";
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';

const columns = [
    { id: 'name', label: 'Reminder Name', minWidth: 170 },
    { id: 'sub', label: 'Reminder Subject', minWidth: 100 },
    {
      id: 'description',
      label: 'Reminder Description',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'email',
      label: 'Email Address',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'contactNo',
      label: 'Contact Number',
      minWidth: 170,
      align: 'right',
    },
    {
        id: 'smsNo',
        label: 'SMS Number',
        minWidth: 170,
        align: 'right',
      },
      {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'right',
      },
      {
        id: 'recurFreq',
        label: 'Recurrence Frequency',
        minWidth: 170,
        align: 'right',
      },
  ];
  
  function createData(name, sub, description, email,contactNo,smsNo,satus,recurFreq) {
    // const density = population / size;
    return {name, sub, description, email,contactNo,smsNo,satus,recurFreq };
  }
  
  const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
  ];

export default function ViewReminder(){

    const Navigate = useNavigate();

    const [subject, setSubject] = useState('');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  

    const handleChange = (event) => {
        setSubject(event.target.value);
      };

    const styles={
        root: {
            height: "150vh",
            backgroundImage: `url(${homeBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        },
        backStyle:{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            height: "150vh",
        },
        headings:{
            display: 'flex',
            flexDirection: 'column',
            justityContent: 'center',
            alignItems: 'center',
            paddingTop: '2%'
        },
        container:{
            width: "80%",
            margin: "2% auto 0",
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '20px',
            padding: '1%'
        },
        fieldContainer:{
            display:'flex',
            flexDirection:"row",
            margin: '1% 0',
            justifyContent:"space-between",
        },
        firstConatiner:{
             display:'flex',
             flexDirection:'row',
             justifyContent:'space-between'
        },
        key:{
            fontSize: '1.3rem',
            fontFamily: "Roboto,Helvetica, Arial",
            float: 'left'
        },
        buttonContainer: {
            marginTop: '2%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        }
    }

    return(
        <Grid style={styles.root}>
            <div style={styles.backStyle} >
                <Grid style={styles.headings} >
                    <Typography component="h1" variant="h4" style={{color: 'white'}}>
                        View Your Reminder
                    </Typography>
                </Grid>
                <Paper elevation={6} style={styles.container}>
                    <div style={styles.firstConatiner}>
                        <div style={styles.fieldContainer}>
                            <div style={styles.keyContain}>
                                <Typography style={styles.key}>
                                    Select from date:
                                </Typography>
                            </div>
                            <div style={styles.valueContain}>
                                <TextField
                                    style={{width: '10rem'}}
                                    id="date"
                                    size="small"
                                    label="Select a date"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                            </div>
                        </div>
                        <div style={styles.fieldContainer}>
                            <div style={styles.keyContain}>
                                <Typography style={styles.key}>
                                    Select to date:
                                </Typography>
                            </div>
                            <div style={styles.valueContain}>
                                <TextField
                                    style={{width: '10rem'}}
                                    id="date"
                                    size="small"
                                    label="Select a date"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{width:"35%",alignItems:"center"}}>
                    <div style={styles.fieldContainer}>
                        <div style={styles.keyContain}>
                            <Typography style={styles.key}>
                                Subject
                            </Typography>
                        </div>
                        <div style={styles.valueContain}>
                            <FormControl size="small" style={{margin:0}}>
                                <InputLabel id="demo-simple-select-label" >Subject</InputLabel>
                                <Select
                                    style={{width: '15rem'}}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={subject}
                                    label="Subject"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"Meeting"}>Meeting</MenuItem>
                                    <MenuItem value={"Deadline"}>Deadline</MenuItem>
                                    <MenuItem value={"Task"}>Task</MenuItem>
                                    <MenuItem value={"Appointment"}>Appointment</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    </div>
                    <div>
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                    {columns.map((column) => (
                                        <>
                                        <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                        >
                                        {column.label}
                                        </TableCell>
                                         
                                         </>
                                    ))}
                                    <TableCell padding="checkbox">
                                         <Checkbox
                                           color="primary"
                                        //    checked={isItemSelected}
                                        //    inputProps={{
                                        //      'aria-labelledby': labelId,
                                        //    }}
                                         />
                                         </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                    <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                    </TableCell>
                                            );
                                            })}
                                              <TableCell padding="checkbox">
                                                 <Checkbox
                                                   color="primary"
                                                //    checked={isItemSelected}
                                                //    inputProps={{
                                                //      'aria-labelledby': labelId,
                                                //    }}
                                                 />
                                                 </TableCell>
                                        </TableRow>
                                        );
                                    })}
                                </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </div>
                </Paper>
                <div style={styles.buttonContainer} >
                    <Button 
                        variant="contained"
                        onClick={() => {
                            Navigate('/home')
                          }}
                    >
                        Back
                    </Button>
                    <Button 
                        variant="contained"
                    >
                        Confirm
                    </Button>
                </div>
                <div style={{marginLeft:"80%"}}>
                <Link
                     underline="always"
                     onClick={() => {
                        Navigate('/logout')
                      }}>
                        {"LogOut"}
                    </Link>
                </div>
            </div>
        </Grid>
    )
}
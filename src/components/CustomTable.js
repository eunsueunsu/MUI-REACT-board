import React from "react";

import {Button, makeStyles, TableContainer, TablePagination} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
    table: {
        margin: theme.spacing(1),
        marginTop : theme.spacing(2),
    },
    pagination : {
        justifyContent:"center",
        display:'flex',
        marginTop : theme.spacing(2),

    },
}))

const CustomTable = () => {
    const classes = useStyles();
    return (<TableContainer>
            <Table stickyHeader aria-label="sticky table" >
                <TableHead>
                    {/*<TableRow>*/}
                    {/*    <TableCell>Title</TableCell>*/}
                    {/*    <TableCell>Tags</TableCell>*/}
                    {/*    <TableCell>Date</TableCell>*/}
                    {/*</TableRow>*/}
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell><a href="/detail"> 첫번째글 첫번째글첫번째글첫번째글첫번째글첫번째글첫번째글첫번째글</a></TableCell>
                        <TableCell>
                            <Button variant="outlined" color="secondary" size="small"
                                    className={classes.table}>#React</Button>
                            <Button variant="outlined" color="primary" size="small"
                                    className={classes.table}>#Vue</Button>
                            <Button variant="outlined" color="primary" size="small"
                                    className={classes.table}>#Angular</Button>
                        </TableCell>
                        <TableCell>2021-01-21</TableCell>
                    </TableRow>


                    <TableRow>
                        <TableCell><a href="#"> 첫번째글</a></TableCell>
                        <TableCell>
                            <Button variant="outlined" color="primary" size="small"
                                    className={classes.table}>#React</Button>
                            {/*<Button variant="outlined" color="primary" size="small" className={classes.table}>#Vue</Button>*/}
                            <Button variant="outlined" color="primary" size="small"
                                    className={classes.table}>#Angular</Button>
                        </TableCell>
                        <TableCell>2021-01-21</TableCell>
                    </TableRow>


                    <TableRow>
                        <TableCell><a href="#"> 첫번째글</a></TableCell>
                        <TableCell>
                            <Button variant="outlined" color="primary" size="small"
                                    className={classes.table}>#React</Button>
                            {/*<Button variant="outlined" color="primary" size="small" className={classes.table}>#Vue</Button>*/}
                            {/*<Button variant="outlined" color="primary" size="small" className={classes.table}>#Angular</Button>*/}
                        </TableCell>
                        <TableCell>2021-01-21</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><a href="#"> 첫번째글</a></TableCell>
                        <TableCell>
                            <Button variant="outlined" color="primary" size="small"
                                    className={classes.table}>#React</Button>
                            {/*<Button variant="outlined" color="primary" size="small" className={classes.table}>#Vue</Button>*/}
                            {/*<Button variant="outlined" color="primary" size="small" className={classes.table}>#Angular</Button>*/}
                        </TableCell>
                        <TableCell>2021-01-21</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><a href="#"> 첫번째글</a></TableCell>
                        <TableCell>
                            <Button variant="outlined" color="primary" size="small"
                                    className={classes.table}>#React</Button>
                            {/*<Button variant="outlined" color="primary" size="small" className={classes.table}>#Vue</Button>*/}
                            {/*<Button variant="outlined" color="primary" size="small" className={classes.table}>#Angular</Button>*/}
                        </TableCell>
                        <TableCell>2021-01-21</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Pagination count={10} color="primary" className={classes.pagination} size="large" showFirstButton showLastButton aria/>
        </TableContainer>

    )
}
export default CustomTable

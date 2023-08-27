import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function padValues(arr:any[]) {
  const maxLength = arr.reduce((max, obj) => Math.max(max, obj.value.length), 0);

  return arr.map(obj => ({
    ...obj,
    value: obj.value.padEnd(maxLength) 
  }));
}

export default function DisplayValueKeyPairs(props:any) {
  const rows = padValues(props.rows);
  console.log(rows);
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          {/* <TableRow>
            <TableCell sx={{ backgroundColor:'background.paper', border: 0 }} align="center" colSpan={2}>
              <h4>
                Grades
              </h4>
            </TableCell>
          </TableRow> */}
        </TableHead>

        <TableBody>
          <TableCell sx={{ border: 0 }} align="center" colSpan={2}>
            <h4>
              {props.title}
            </h4>
          </TableCell>
          {rows.map((row:any) => (
              <TableRow
                key={row.dataLabel}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell><strong>{row.key}</strong></TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

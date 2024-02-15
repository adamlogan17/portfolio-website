import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DisplayValueKeyPairs(props: KeyValuePair) {
	return (
		<TableContainer sx={{ boxShadow: 0 }} component={Paper}>
			<Table stickyHeader>
				<TableBody>
					{props.title && (
						<TableRow>
							<TableCell sx={{ border: 0 }} align='center' colSpan={2}>
								<h4>{props.title}</h4>
							</TableCell>
						</TableRow>
					)}

					{props.data.map((row: any) => (
						<TableRow key={row.key} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell>
								<strong>{row.key}</strong>
							</TableCell>
							{/* By setting the width at the minimum value, this forces 'value' to be the width of the largest value */}
							<TableCell align='left' width='1px'>
								{row.value}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

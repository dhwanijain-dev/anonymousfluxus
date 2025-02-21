import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(date, doctor, hospital, type, diagnosis, medications, nextAppointment, notes) {
    return { date, doctor, hospital, type, diagnosis, medications, nextAppointment, notes };
}

const rows = [
    createData('2025-02-10', 'Dr. Smith', 'City Health Clinic', 'General Checkup', 'Healthy, minor cold symptoms', 'Paracetamol 500mg', '2025-08-10', 'Advised more hydration'),
    createData('2024-12-15', 'Dr. Lee', 'Heart Care Hospital', 'Cardiology', 'Slightly high BP', 'Amlodipine 5mg', '2025-06-15', 'Reduce salt intake'),
    createData('2024-09-05', 'Dr. Patel', 'Vision Care Center', 'Eye Checkup', 'Mild myopia', 'Glasses (-1.5)', '2025-09-05', '6-month follow-up recommended'),
    createData('2024-06-20', 'Dr. Kumar', 'Dental Care Hub', 'Dental Checkup', 'Cavity in molar', 'Filling treatment', '2024-07-05', 'Follow-up for filling check'),
];

export default function MedicalCheckupHistoryTable() {
    return (
        <TableContainer component={Paper} className='overflow-scroll h-42'>
            <Table sx={{ minWidth: 800 }} aria-label="medical checkup history table">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Checkup Date</b></TableCell>
                        <TableCell><b>Doctor's Name</b></TableCell>
                        <TableCell><b>Hospital/Clinic</b></TableCell>
                        <TableCell><b>Checkup Type</b></TableCell>
                        <TableCell><b>Findings/Diagnosis</b></TableCell>
                        <TableCell><b>Prescribed Medications</b></TableCell>
                        <TableCell><b>Next Appointment</b></TableCell>
                        <TableCell><b>Notes</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.doctor}</TableCell>
                            <TableCell>{row.hospital}</TableCell>
                            <TableCell>{row.type}</TableCell>
                            <TableCell>{row.diagnosis}</TableCell>
                            <TableCell>{row.medications}</TableCell>
                            <TableCell>{row.nextAppointment}</TableCell>
                            <TableCell>{row.notes}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

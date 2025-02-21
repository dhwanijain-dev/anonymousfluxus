import React, { useState } from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import LineChart from './LineChart'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import CombinedLineChart from './CombinedLIneChart'
import BookingWidget from './BookingWidget'
import { Modal, Box } from '@mui/material';

import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, TextField, Button
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

function createPrescriptionData(date, medication, dosage, instructions) {
    return { date, medication, dosage, instructions };
}

const initialPrescriptionRows = [
    createPrescriptionData('2025-02-10', 'Paracetamol', '500mg', 'Once Daily'),
    createPrescriptionData('2025-02-12', 'Ibuprofen', '200mg', 'Twice Daily'),
];

export function PrescriptionTable() {
    const [rows, setRows] = useState(initialPrescriptionRows);

    // For searching
    const [searchTerm, setSearchTerm] = useState('');

    // For sorting (track which column and ascending/descending)
    const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'asc' });

    // Filter or search the data
    const filteredRows = rows.filter((row) =>
        Object.values(row).some((val) =>
            val.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Simple sort function
    const sortedRows = [...filteredRows].sort((a, b) => {
        const { key, direction } = sortConfig;
        if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
        if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
        return 0;
    });

    // Trigger sort by column
    const handleSort = (key) => {
        setSortConfig((prev) => ({
            key,
            direction: prev.direction === 'asc' && prev.key === key ? 'desc' : 'asc',
        }));
    };

    return (
        <div>
            <div style={{ marginBottom: '1rem' }}>
                <TextField
                    label="Search Prescription"
                    variant="outlined"
                    size="small"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <TableContainer component={Paper}>
                <Table aria-label="prescription table">
                    <TableHead>
                        <TableRow>
                            <TableCell onClick={() => handleSort('date')}><b>Date</b></TableCell>
                            <TableCell onClick={() => handleSort('medication')}><b>Medication</b></TableCell>
                            <TableCell onClick={() => handleSort('dosage')}><b>Dosage</b></TableCell>
                            <TableCell onClick={() => handleSort('instructions')}><b>Instructions</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedRows.map((row, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.medication}</TableCell>
                                <TableCell>{row.dosage}</TableCell>
                                <TableCell>{row.instructions}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

// Diagnosis Table
function createDiagnosisData(date, condition, severity, notes) {
    return { date, condition, severity, notes };
}

const initialDiagnosisRows = [
    createDiagnosisData('2025-03-01', 'Flu', 'Mild', 'Stay hydrated'),
    createDiagnosisData('2025-03-05', 'Migraine', 'Moderate', 'Avoid bright lights'),
];

export function DiagnosisTable() {
    const [rows, setRows] = useState(initialDiagnosisRows);

    // For searching
    const [searchTerm, setSearchTerm] = useState('');

    // For sorting (track which column and ascending/descending)
    const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'asc' });

    // Filter or search the data
    const filteredRows = rows.filter((row) =>
        Object.values(row).some((val) =>
            val.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Simple sort function
    const sortedRows = [...filteredRows].sort((a, b) => {
        const { key, direction } = sortConfig;
        if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
        if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
        return 0;
    });

    // Trigger sort by column
    const handleSort = (key) => {
        setSortConfig((prev) => ({
            key,
            direction: prev.direction === 'asc' && prev.key === key ? 'desc' : 'asc',
        }));
    };

    return (
        <div>
            <div style={{ marginBottom: '1rem' }}>
                <TextField
                    label="Search Diagnosis"
                    variant="outlined"
                    size="small"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        <TableContainer component={Paper}>
            <Table aria-label="diagnosis table">
                <TableHead>
                    <TableRow>
                            <TableCell onClick={() => handleSort('date')}><b>Date</b></TableCell>
                            <TableCell onClick={() => handleSort('condition')}><b>Condition</b></TableCell>
                            <TableCell onClick={() => handleSort('severity')} ><b>Severity</b></TableCell>
                            <TableCell onClick={() => handleSort('notes')}><b>Notes</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedRows.map((row, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.condition}</TableCell>
                            <TableCell>{row.severity}</TableCell>
                            <TableCell>{row.notes}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>

    );
}

// Consultation Table
function createConsultationData(date, doctor, topics, recommendations) {
    return { date, doctor, topics, recommendations };
}

const consultationRows = [
    createConsultationData('2025-04-10', 'Dr. A', 'General checkup, diet plan', 'Increase protein intake'),
    createConsultationData('2025-05-15', 'Dr. B', 'Follow-up, test results', 'Schedule more lab tests'),
];

export function ConsultationTable() {
    const [rows, setRows] = useState(consultationRows);

    // For searching
    const [searchTerm, setSearchTerm] = useState('');

    // For sorting (track which column and ascending/descending)
    const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'asc' });

    // Filter or search the data
    const filteredRows = rows.filter((row) =>
        Object.values(row).some((val) =>
            val.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Simple sort function
    const sortedRows = [...filteredRows].sort((a, b) => {
        const { key, direction } = sortConfig;
        if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
        if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
        return 0;
    });

    // Trigger sort by column
    const handleSort = (key) => {
        setSortConfig((prev) => ({
            key,
            direction: prev.direction === 'asc' && prev.key === key ? 'desc' : 'asc',
        }));
    };

    return (
        <div>
            <div style={{ marginBottom: '1rem' }}>
                <TextField
                    label="Search Consultation"
                    variant="outlined"
                    size="small"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

        <TableContainer component={Paper}>
            <Table aria-label="consultation table">
                <TableHead>
                    <TableRow>
                        <TableCell onClick={() => handleSort('date')} ><b>Date</b></TableCell>
                        <TableCell onClick={() => handleSort('doctor')} ><b>Doctor</b></TableCell>
                        <TableCell onClick={() => handleSort('topics')} ><b>Topics Discussed</b></TableCell>
                        <TableCell onClick={() => handleSort('recommendations')} ><b>Recommendations</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {sortedRows.map((row, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.doctor}</TableCell>
                            <TableCell>{row.topics}</TableCell>
                            <TableCell>{row.recommendations}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}

const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [showRangeModal, setShowRangeModal] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [myInput, setMyInput] = useState('');
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const [activeTab, setActiveTab] = useState('prescription')
    const handleUploadSubmit = () => {
        // Handle file submission logic here
        setShowUploadModal(false);
    };

 
    return (
    <div className='dashboard h-screen w-full flex bg-red-50'>
          
    <div className='w-3/4 h-screen '>
        <div className='heading '>
                <div className='profile '>
                      <h1 className='text-left ml-15 mt-3  text-3xl '>Hello, <span className='font-bold'>John Doe</span></h1>
                </div>
                {/* <h1 className='text-left ml-10 mt-3 ' > Overview Of Your Health</h1>  */}
                
        </div>
        <div className='stats'>
            {/* <div className='cards flex '>
                {
                    ["muscle recovery","calories burned" , "steps"].map((item)=>{
                        return(
                            <div className='card bg-white flex flex-col justify-between m-5 p-5 w-50 rounded-lg shadow-md'>
                                <h1 className='text-2xl capitalize'>{item}</h1>
                                <p className='text-4xl'>0</p>
                            </div>
                        )
                    })
                }
            </div> */}
            <div className='charts px-10 flex'>
                <div className='calender'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar />
                        </LocalizationProvider>
                </div>
                      {/* <div className='doctors flex overflow-scroll   flex-col gap-3 w-72 h-72  overflow-x-hidden  px-3 py-4'>

                          {
                              ["Dr. John Doe", "Dr. Jane Doe", "Dr. benjamin", "Dr. John Doe", "Dr. Jane Doe", "Dr. benjamin", "Dr. benjamin"].map((item) => {
                                  return (
                                      <div className='doctor bg-white flex w-full p-2 justify-between  rounded-lg shadow-md'>
                                          <h1 className='text-2xl capitalize'>{item}</h1>
                                          <p className='text-2xl'>0</p>
                                      </div>
                                  )
                              })

                          }
                          
                      </div> */}
                <div className='graphs flex flex-col justify-center'>
                    <h1 className='text-2xl text-center'>GRAPHS</h1>
                        {/* <LineChart/> */}
                          <CombinedLineChart
                              prescriptionRows={initialPrescriptionRows}
                                diagnosisRows={initialDiagnosisRows}
                              consultationRows={consultationRows}
                          />
                </div>
                <div className='buttons flex flex-col gap-3 justify-center'>

                          <button
                              onClick={() => setShowModal(true)}
                              sx={{ marginTop: '1rem' }}
                              type="submit"
                              class="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-black/80 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
                          >
                              <span class="text-lg">Book Appointment</span>
                              <div
                                  class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                              >
                                  <div class="relative h-full w-10 bg-white/20"></div>
                              </div>
                          </button>

                          <button class="continue-application"
                              onClick={() => setShowRangeModal(true)}
                          >
                              <div>
                                  <div class="pencil"></div>
                                  <div class="folder">
                                      <div class="top">
                                          <svg viewBox="0 0 24 27">
                                              <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                                          </svg>
                                      </div>
                                      <div class="paper"></div>
                                  </div>
                              </div>
                              Leave Application
                          </button>

                          <button
                              class="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group"
                                onClick={() => setShowUploadModal(true)}
                          >
                              <span
                                  class="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"
                              ></span>
                              <span class="absolute bottom-0 left-0 h-full -ml-2">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="w-auto h-full opacity-100 object-stretch"
                                      viewBox="0 0 487 487"
                                  >
                                      <path
                                          fill-opacity=".1"
                                          fill-rule="nonzero"
                                          fill="#FFF"
                                          d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                                      ></path>
                                  </svg>
                              </span>
                              <span class="absolute top-0 right-0 w-12 h-full -mr-3">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="object-cover w-full h-full"
                                      viewBox="0 0 487 487"
                                  >
                                      <path
                                          fill-opacity=".1"
                                          fill-rule="nonzero"
                                          fill="#FFF"
                                          d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                                      ></path>
                                  </svg>
                              </span>
                              <span
                                  class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
                              ></span>
                              <span class="relative text-base font-semibold">Upload Prescription</span>
                          </button>


                            <Modal
                                open={showUploadModal}
                                onClose={() => setShowUploadModal(false)}
                                aria-labelledby="upload-modal"
                                aria-describedby="upload-description"
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        bgcolor: 'background.paper',
                                        boxShadow: 24,
                                        p: 4,
                                        borderRadius: 2,
                                    }}
                                >   
                                    <h1 
                                    className='text-center text-3xl mb-2'
                                    >Upload your Document</h1>
                                    <h2 className=' mb-2 text-left text-sm'>Upload Your reports like Prescription,diagnois report or consultation report to add it into your checkup history</h2>
                                    <div class="grid w-full max-w-xs items-center gap-1.5">

                                        <label class="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Picture</label>
                                        <input 
                                            onChange={(e) => setSelectedFile(e.target.files[0])}
                                         id="picture" type="file" class="flex mb-10 h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"/>
                                    </div>

                                    {/* <input
                                        type="file"
                                        onChange={(e) => setSelectedFile(e.target.files[0])}
                                        style={{ display: 'block', marginBottom: '1rem' }}
                                    /> */}
                                    <Button variant="contained" onClick={handleUploadSubmit} sx={{ marginRight: '1rem' }}>
                                        Submit
                                    </Button>
                                    <Button variant="outlined" onClick={() => setShowUploadModal(false)}>
                                        Close
                                    </Button>
                                </Box>
                            </Modal>

                          <Modal
                              open={showRangeModal}
                              onClose={() => setShowRangeModal(false)}
                              aria-labelledby="date-range-modal"
                              aria-describedby="date-range-description"
                          >
                              <Box
                                  sx={{
                                      position: 'absolute',
                                      top: '50%',
                                      left: '50%',
                                      transform: 'translate(-50%, -50%)',
                                      bgcolor: 'background.paper',
                                      boxShadow: 24,
                                      p: 4,
                                      borderRadius: 2,
                                  }}
                              >
                                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                                      <DatePicker
                                          label="Start Date"
                                          value={startDate}
                                          onChange={(newValue) => setStartDate(newValue)}
                                          sx={{ marginRight: 2 }}
                                      />
                                      <DatePicker
                                          label="End Date"
                                          value={endDate}
                                          onChange={(newValue) => setEndDate(newValue)}
                                      />
                                  </LocalizationProvider>
                                  <TextField
                                      label="Additional info"
                                      variant="outlined"
                                      size="small"
                                      value={myInput}
                                      onChange={(e) => setMyInput(e.target.value)}
                                      sx={{ display: 'block', marginTop: '1rem' }}
                                  />
                                  <Button
                                      variant="contained"
                                      sx={{ marginTop: '1rem', marginRight: '1rem' }}
                                  >
                                      Submit
                                  </Button>
                                  <Button
                                      variant="outlined"
                                      onClick={() => setShowRangeModal(false)}
                                      sx={{ marginTop: '1rem' }}
                                  >
                                      Close
                                  </Button>
                              </Box>
                          </Modal>



                          {/* Modal with BookingWidget */}
                          <Modal
                              open={showModal}
                              onClose={() => setShowModal(false)}
                              aria-labelledby='booking-modal'
                              aria-describedby='booking-description'
                          >
                              <Box
                                  sx={{
                                      position: 'absolute',
                                      bgcolor: 'background.paper',
                                      boxShadow: 24,
                                      p: 4,
                                      borderRadius: 2,
                                      overflow: 'scroll',
                                  }}
                                  className="h-screen w-full"
                              >
                                  <BookingWidget />
                                  <Button
                                      variant='outlined'
                                      onClick={() => setShowModal(false)}
                                      sx={{
                                          marginTop: '1rem',
                                          marginLeft: '1rem',
                                          position: 'absolute',
                                          top: '5%',
                                          right: '5%',
                                          zIndex: 1000

                                      }}
                                  >
                                      Close
                                  </Button>
                              </Box>
                          </Modal>

                </div>
            </div>


        </div>
              <div className='history px-20 pt-8'>
                  {/* Tab buttons */}
                  <div className='flex space-x-4 mb-4'>
                      <button onClick={() => setActiveTab('prescription')} className='bg-white px-4 py-2 rounded-md shadow-sm'>
                          Prescription
                      </button>
                      <button onClick={() => setActiveTab('diagnosis')} className='bg-white px-4 py-2 rounded-md shadow-sm'>
                          Diagnosis
                      </button>
                      <button onClick={() => setActiveTab('consultation')} className='bg-white px-4 py-2 rounded-md shadow-sm'>
                          Consultation
                      </button>
                  </div>

                  {/* Table content based on active tab */}
                  <div className='table-container bg-white p-4 rounded-md shadow-md'>
                      {activeTab === 'prescription' && <PrescriptionTable />}
                      {activeTab === 'diagnosis' && <DiagnosisTable />}
                      {activeTab === 'consultation' && <ConsultationTable />}
                  </div>
              </div>
    </div>  
    {/* <div className='w-1/4 h-screen '>
              
              <button
                  onClick={() => setShowModal(true)}
                  sx={{ marginTop: '1rem' }}
                  type="submit"
                  class="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
              >
                  <span class="text-lg">Shimmer</span>
                  <div
                      class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                  >
                      <div class="relative h-full w-10 bg-white/20"></div>
                  </div>
              </button>

              <button class="continue-application"
                  onClick={() => setShowRangeModal(true)}
              >
                  <div>
                      <div class="pencil"></div>
                      <div class="folder">
                          <div class="top">
                              <svg viewBox="0 0 24 27">
                                  <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                              </svg>
                          </div>
                          <div class="paper"></div>
                      </div>
                  </div>
                    Leave Application
              </button>

              <button
                  class="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                  <span
                      class="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"
                  ></span>
                  <span class="absolute bottom-0 left-0 h-full -ml-2">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-auto h-full opacity-100 object-stretch"
                          viewBox="0 0 487 487"
                      >
                          <path
                              fill-opacity=".1"
                              fill-rule="nonzero"
                              fill="#FFF"
                              d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                          ></path>
                      </svg>
                  </span>
                  <span class="absolute top-0 right-0 w-12 h-full -mr-3">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="object-cover w-full h-full"
                          viewBox="0 0 487 487"
                      >
                          <path
                              fill-opacity=".1"
                              fill-rule="nonzero"
                              fill="#FFF"
                              d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                          ></path>
                      </svg>
                  </span>
                  <span
                      class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
                  ></span>
                  <span class="relative text-base font-semibold">Upload document</span>
              </button>

             

              <Modal
                  open={showRangeModal}
                  onClose={() => setShowRangeModal(false)}
                  aria-labelledby="date-range-modal"
                  aria-describedby="date-range-description"
              >
                  <Box
                      sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          bgcolor: 'background.paper',
                          boxShadow: 24,
                          p: 4,
                          borderRadius: 2,
                      }}
                  >
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                              label="Start Date"
                              value={startDate}
                              onChange={(newValue) => setStartDate(newValue)}
                              sx={{ marginRight: 2 }}
                          />
                          <DatePicker
                              label="End Date"
                              value={endDate}
                              onChange={(newValue) => setEndDate(newValue)}
                          />
                      </LocalizationProvider>
                      <TextField
                          label="Additional info"
                          variant="outlined"
                          size="small"
                          value={myInput}
                          onChange={(e) => setMyInput(e.target.value)}
                          sx={{ display: 'block', marginTop: '1rem' }}
                      />
                      <Button
                          variant="contained"
                          sx={{ marginTop: '1rem', marginRight: '1rem' }}
                      >
                          Submit
                      </Button>
                      <Button
                          variant="outlined"
                          onClick={() => setShowRangeModal(false)}
                          sx={{ marginTop: '1rem' }}
                      >
                          Close
                      </Button>
                  </Box>
              </Modal>



              <Modal
                  open={showModal}
                  onClose={() => setShowModal(false)}
                  aria-labelledby='booking-modal'
                  aria-describedby='booking-description'
              >
                  <Box
                      sx={{
                          position: 'absolute',
                          bgcolor: 'background.paper',
                          boxShadow: 24,
                          p: 4,
                          borderRadius: 2,
                          overflow: 'scroll',
                      }}
                      className="h-screen w-full"
                  >
                      <BookingWidget />
                      <Button
                          variant='outlined'
                          onClick={() => setShowModal(false)}
                          sx={{ marginTop: '1rem',
                              marginLeft: '1rem', 
                              position: 'absolute',
                              top: '5%',
                            right: '5%',
                            zIndex: 1000
                          
                             }}
                      >
                          Close
                      </Button>
                  </Box>
              </Modal>
    </div>
        */}
       

    </div>
  )
}

export default Dashboard

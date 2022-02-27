import React, { useState } from 'react';
import * as XLSX from 'xlsx'

const FileUpload = () => {
    // on change states
    const [excelFile, setExcelFile] = useState(null);
    const [excelFileError, setExcelFileError] = useState(null);

    // submit
    const [excelData, setExcelData] = useState(null);
    // it will contain array of objects

    // handle File
    const fileType = ['application/vnd.ms-excel'];
    const handleFile = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            // console.log(selectedFile.type);
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsArrayBuffer(selectedFile);
                reader.onload = (e) => {
                    setExcelFileError(null);
                    setExcelFile(e.target.result);
                }
            }
            else {
                setExcelFileError('Please select only excel file types');
                setExcelFile(null);
            }
        }
        else {
            console.log('plz select your file');
        }
    }

    // submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        if (excelFile !== null) {
            const workbook = XLSX.read(excelFile, { type: 'buffer' });
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(worksheet);
            setExcelData(data);
            console.log(data)
        }
        else {
            console.log(null);
        }
    }
    return (
        <div className='mt-5'>
            <div className='row'>
                <div className="col-md-6">
                    <form className='form-group' autoComplete="off"
                        onSubmit={handleSubmit}>
                        <label><h5>Upload file</h5></label>
                        <br></br>
                        <input type='file' className='form-control my-3' onChange={handleFile} required></input>
                        {
                            excelFileError && <div className='text-danger'>{excelFileError}</div>
                        }
                        <button type='submit' className='btn btn-success'>Submit</button>
                    </form>
                </div>
            </div>

            <div className='text-center text-capitalize'>
                <h4 className='mt-5 mb-3'>View all file</h4>
            </div>
            <div className='viewer'>
                {excelData === null && <>No file selected</>}
                {excelData !== null && (
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead className='bg-info'>
                                <tr>
                                    <th scope="col">Sr No</th>
                                    <th>amount</th>
                                    <th>Description</th>
                                    <th>Level</th>
                                    <th>Quarter</th>
                                    <th>SeriesRefSNDQ</th>
                                    <th>Weight</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    excelData.map((data, index) =>
                                        <tr className='text-capitalize'>
                                            <td>{index + 1}</td>
                                            <td>{data.Amount}</td>
                                            <td>{data.Description}</td>
                                            <td>{data.Level}</td>
                                            <td>{data.Quarter}</td>
                                            <td>{data.SeriesRefSNDQ}</td>
                                            <td>{data.Weight}</td>

                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileUpload;
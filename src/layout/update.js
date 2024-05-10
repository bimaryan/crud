import { useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function Update() {
    const [nama, setNama] = useState('')
    const [matkul, setMatkul] = useState('')
    const [dosen, setDosen] = useState('')
    const { id } = useParams();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8081/update/' + id, { nama, matkul, dosen })
            .then(res => {
                console.log(res);
                navigate('/');
            }).catch(err => console.log(err));
    }

    return (
        <>
            <div className="container p-3 mx-auto">
                <div className="bg-gray-500 dark:bg-gray-600 p-3 rounded shadow-lg">
                    <h3 className='text-2xl text-center font-normal font-semibold text-gray-200 dark:text-gray-400'>
                        Update Mahasiswa
                    </h3>
                    <hr className='my-3' />
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label for="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama:</label>
                                <input type="text" id="nama" placeholder="Masukkan Nama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={e => setNama(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label for="matkul" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mata Kuliah:</label>
                                <input type="text" id="matkul" placeholder="Masukkan Mata Kuliah" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={e => setMatkul(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label for="dosen" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dosen:</label>
                                <input type="text" id="dosen" placeholder="Masukkan Nama Dosen" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={e => setDosen(e.target.value)}
                                />
                            </div>
                            <button className="bg-green-600 dark:bg-green-700 hover:bg-green-800 rounded-lg w-full py-1 px-2">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Main() {

    const [mahasiswa, setMahasiswa] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081')
            .then(res => setMahasiswa(res.data))
            .catch(err => console.log(err));
    })

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8081/mahasiswa/'+id)
            window.location.reload()
        }catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="container p-3 mx-auto">
                <div className="bg-gray-500 dark:bg-gray-600 p-3 rounded shadow-lg">
                    <h3 className='text-2xl text-center font-normal font-semibold text-gray-200 dark:text-gray-400'>Latihan CRUD Reactjs + Mysql</h3>
                    <hr className='my-3' />
                    <div className='mt-2 mb-2'>
                        <Link to="/create" className='bg-green-600 py-1 px-2 rounded-lg text-gray-200 dark:text-gray-400 dark:bg-green-800 hover:bg-green-700'>Add</Link>
                    </div>
                    <div className='relative overflow-x-auto'>
                        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-40'>
                            <thead className='text-xs text-gray-700 uppercase dark:text-gray-400'>
                                <tr>
                                    <th className='px-6 py-3'>ID</th>
                                    <th className='px-6 py-3'>NAMA</th>
                                    <th className='px-6 py-3'>MATA KULIAH</th>
                                    <th className='px-6 py-3'>DOSEN</th>
                                    <th className='px-6 py-3'>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    mahasiswa.map((data, i) => (
                                        <tr key={i} className='border-b dark:border-gray-700'>
                                            <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{data.id}</td>
                                            <td className='px-6 py-4 font-medium text-gray-900 dark:text-white'>{data.nama}</td>
                                            <td className='px-6 py-4 font-medium text-gray-900 dark:text-white'>{data.matkul}</td>
                                            <td className='px-6 py-4 font-medium text-gray-900 dark:text-white'>{data.dosen}</td>
                                            <td className='px-6 py-4'>
                                                <div className='flex gap-1 items-center'>
                                                    <Link to={`update/${data.id}`} className='bg-blue-600 py-1 px-2 rounded-lg text-gray-200 dark:text-gray-400 dark:bg-blue-800 hover:bg-blue-700'>Update</Link>
                                                    <button className='bg-red-600 py-1 px-2 rounded-lg text-gray-200 dark:text-gray-400 dark:bg-red-800 hover:bg-red-700' onClick={e => handleDelete(data.id)}>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
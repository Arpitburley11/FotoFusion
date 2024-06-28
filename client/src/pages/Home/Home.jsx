import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Search from '../../Components/Search/Search';
import Loader from '../../Components/Loader/Loader';

export default function Home() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading for 3 seconds
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/api/file/files')
      .then((res) => {
        setFiles(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [files])

  return (
    <div className='min-h-screen p-4 file-upload'>
      <h1 className='pt-8 pb-10 text-3xl font-bold text-center text-teal-400 sm:text-4xl md:text-5xl'>Photo Gallery</h1>
      <Search />
      {loading ? <Loader /> : <div className='columns-2 sm:columns-3 lg:columns-4 gap-3 w-full md:w-[90%] lg:w-[80%] mx-auto space-y-3 pb-28'>
        {files.map((file, index) => {
          return (
            <div className="overflow-hidden bg-gray-800 break-inside-avoid" key={index}>
              <img
                src={file.photo}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          );
        })}
      </div>}
    </div>
  );
}

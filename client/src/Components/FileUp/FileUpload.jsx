import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate()
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/file/files')
      .then((res) => {
        setFiles(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [files])

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('title', title);
      formData.append('description', description);

      const res = await axios.post('http://localhost:8000/api/file/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      navigate('/')
      console.log(res.data);
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="p-4 my-10 tex-white">
      <div className="max-w-lg p-6 mx-auto mb-10 bg-white rounded-lg shadow-lg">
        <h1 className="pt-2 text-lg font-bold text-teal-400 pb-7 sm:text-4xl md:text-3xl ">Submit Your Image</h1>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 mb-4">
            <label htmlFor="file_input" className="block mb-1 font-medium text-white md:text-gray-700">Select Image</label>
            <input
              type="file"
              id="file_input"
              className="w-full px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-teal-400"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </div>
          <div className="w-full px-2 mb-4">
            <label htmlFor="title" className="block mb-1 font-medium text-gray-700 md:text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter title"
              className="w-full px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-teal-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full px-2 mb-4">
            <label htmlFor="description" className="block mb-1 font-medium text-gray-700 md:text-gray-700">Description</label>
            <textarea
              id="description"
              placeholder="Enter description"
              className="w-full px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-teal-400"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="text-center">
          <button
            className="px-4 py-2 font-semibold text-white transition bg-teal-500 rounded-md shadow-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
            onClick={handleSubmit}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

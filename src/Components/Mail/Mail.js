import React, { useState } from 'react';
import axios from 'axios';
function Mail() {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Phone: '',
        Company_name: '',
        Message: '',
        Interest: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataObject = new FormData();

        for (const key in formData) {
            formDataObject.append(key, formData[key]);
        }
        console.log(formDataObject, "formDataObject");
    };


    const handleForm = () => {
        axios
            .post('fab-backend.vercel.app/api/form', formData)
            .then((response) => {
                console.log('POST request successful:', response.data.data);
            })
            .catch((error) => {
                console.error('POST request error:', error);
            });
    };

    return (
        <div className='container min-w-full grid place-items-center border px-10 rounded-lg shadow-sm py-10 md:px-10 xl:px-20'>
            <h2 className='font-medium text-2xl text-[#545b77]'>FashibBuzz</h2>
            <form
                className='grid grid-cols-1 gap-5 my-10 text-[#545b77]  p-3 sm:grid-cols-2 lg:grid-cols-3'
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor="Name" className=''>Name</label>
                    <input
                        type='text'
                        className='border px-2 py-1 rounded-md min-w-full'
                        id='Name'
                        name='Name'
                        value={formData.Name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="Email" className=''>Email</label>
                    <input
                        type='text'
                        className='border px-2 py-1 rounded-md min-w-full'
                        name='Email'
                        value={formData.Email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="Phone" className=''>Phone</label>
                    <input
                        type='text'
                        className='border px-2 py-1 rounded-md min-w-full'
                        name='Phone'
                        value={formData.Phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="Company_name" className=''>Company Name</label>
                    <input
                        type='text'
                        id='Company_name'
                        className='border px-2 py-1 rounded-md min-w-full'
                        name='Company_name'
                        value={formData.Company_name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="Message" className=''>Message</label>
                    <textarea
                        type='text'
                        id='Message'
                        className='border px-2 py-1 rounded-md min-w-full'
                        name='Message'
                        value={formData.Message}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="Interest" className=''>Interest</label>
                    <input
                        type='text'
                        id='Interest'
                        className='border px-2 py-1 rounded-md min-w-full'
                        name='Interest'
                        value={formData.Interest}
                        onChange={handleChange}
                    />
                </div>


            </form>
            <button
                type='submit'
                className='border px-2 py-1 rounded-md max-w-[300px]'
                onClick={handleForm}
            >
                Submit
            </button>
        </div>
    );
}

export default Mail;

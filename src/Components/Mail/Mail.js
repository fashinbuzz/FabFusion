import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
function Mail() {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Phone: '',
        CompanyName: '',
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

    const [errors, setErrors] = useState({});

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert('clicked')
        console.log('Form submitted with data:', formData);

        if (validateForm()) {

            emailjs.sendForm('service_stvo3oi', 'template_d6ifzul', form.current,
                '8tmsZ8kairuMnGRXj')
                .then((result) => {
                    console.log(result.text);
                    alert("Form submitted successfully!!!")
                }, (error) => {
                    console.log(error.text);
                    alert(error.text)

                });

            setFormData({
                Name: '',
                Email: '',
                Phone: '',
                CompanyName: '',
                Message: '',
                Interest: '',
            })

        }
        else {
            console.log('Form has errors');
            alert("Error!!!")
        }

    };

    const validateForm = () => {
        const newErrors = {};

        // Validate Name
        if (!formData.Name) {
            newErrors.name = 'Name is required';
        }

        // Validate Email
        if (!formData.Email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
            newErrors.email = 'Email is invalid';
        }

        // Validate Phone
        if (!formData.Phone) {
            newErrors.phone = 'Phone is required';
        } else if (!/^\d{10}$/.test(formData.Phone)) {
            newErrors.phone = 'Phone is invalid (10 digits)';
        }

        // Validate CompanyName
        if (!formData.CompanyName) {
            newErrors.companyName = 'Company Name is required';
        }

        if (!formData.Message) {
            newErrors.message = 'Message is required';
        }

        if (!formData.Interest) {
            newErrors.interest = 'Interest is required';
        }

        setErrors(newErrors);

        // Return true if there are no errors, otherwise false
        return Object.keys(newErrors).length === 0;
    };


    const handleForm = (e) => {

        e.preventDefault();
        const formDataObject = new FormData();
        console.log("formDataObjectt", "IN");


        for (const key in formData) {
            formDataObject.append(key, formData[key]);

            console.log("FORM DatA::", formDataObject)

            console.log("formDataObjectt", formDataObject);
        }
        // axios
        //     .post('fab-backend.vercel.app/api/form', formData)
        //     .then((response) => {
        //         console.log('POST request successful:', response.data.data);
        //     })
        //     .catch((error) => {
        //         console.error('POST request error:', error);
        //     });
    };

    return (
        <div className='container min-w-full grid place-items-center border px-10 rounded-lg shadow-sm py-10 md:px-10 xl:px-20'>
            <h2 className='font-medium text-2xl text-[#545b77]'>FashibBuzz</h2>
            <form ref={form}
                className='grid grid-cols-1 gap-5 my-10 text-[#545b77]  p-3 sm:grid-cols-2 lg:grid-cols-3'
                onSubmit={(e) => handleSubmit(e)}
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
                    {errors.name && <span className="text-red-500">{errors.name}</span>}
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
                    {errors.email && <span className="text-red-500">{errors.email}</span>}

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
                    {errors.phone && <span className="text-red-500">{errors.phone}</span>}

                </div>
                <div>
                    <label htmlFor="CompanyName" className=''>Company Name</label>
                    <input
                        type='text'
                        id='CompanyName'
                        className='border px-2 py-1 rounded-md min-w-full'
                        name='CompanyName'
                        value={formData.CompanyName}
                        onChange={handleChange}
                    />
                    {errors.companyName && (
                        <span className="text-red-500">{errors.companyName}</span>
                    )}
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
                    {errors.message && (
                        <span className="text-red-500">{errors.message}</span>
                    )}
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
                    {errors.interest && (
                        <span className="text-red-500">{errors.interest}</span>
                    )}
                </div>

                <button
                    type="submit"
                    className='border px-2 py-1 rounded-md max-w-[300px]'
                // onClick={handleForm}
                >
                    Submit
                </button>
            </form>

        </div>
    );
}

export default Mail;

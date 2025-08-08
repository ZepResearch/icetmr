import React from 'react';

const organizerImg = '/assets/org-logo.png'; // Update with your image path

function Organizer() {
    return (
        <section className="bg-gradient-to-r from-slate-50/60 to-slate-100 rounded-xl p-8 text-center shadow-lg max-w-4xl mx-auto my-8 px-2">
            <h2 className="text-5xl font-semibold mb-6 text-slate-900 ">
                Our <span className='bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 drop-shadow-2xl text-transparent bg-clip-text'>Organizing Partner</span>
            </h2>
            <img
                src={organizerImg}
                alt="Organizing Partner Logo"
                className="max-w-xl w-auto h-[250px] rounded-lg   p-4 mx-auto"
            />
        </section>
    );
}

export default Organizer;

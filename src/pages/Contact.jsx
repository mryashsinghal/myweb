import React, { useState } from 'react';
import emailjs from 'emailjs-com';
emailjs.init('kRh0lLQF00v7liyDq');

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_6dsugw1', 
      'template_055lrn9', 
       e.target, 
    )
      .then((result) => {
        alert("Message Sent Successfully!");
      }, (error) => {
        alert("Failed to Send Message. Try Again Later.");
      });
    e.target.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light min-w-full">
      <div className="w-full max-w-lg p-8 bg-primary shadow-lg rounded-xl relative overflow-hidden">
        {/* Animation Layers */}
        <div className="absolute -top-16 -right-16 h-40 w-40 bg-black rounded-full animate-blob"></div>
        <div className="absolute -bottom-16 -left-16 h-40 w-40 bg-black rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute -top-32 -right-32 h-64 w-64 bg-black rounded-full animate-blob animation-delay-4000"></div>

        <h2 className="text-4xl font-bold text-center text-dark mb-8 animate-fadeIn z-30">Contact Me</h2>

        <form onSubmit={sendEmail} className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <input 
              type="text" 
              name="name" 
              className="peer placeholder-transparent h-10 w-full border-b-2 border-[#647376] focus:outline-none focus:border-black bg-transparent text-white" 
              placeholder="Name" 
              onChange={handleChange} 
              required 
            />
            <label 
              htmlFor="name" 
              className="absolute left-0 -top-3.5 text-[#647376] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#647376]">
              Name
            </label>
          </div>

          {/* Email Input */}
          <div className="relative">
            <input 
              type="email" 
              name="email" 
              className="peer placeholder-transparent h-10 w-full border-b-2 border-[#647376] focus:outline-none focus:border-black bg-transparent text-white" 
              placeholder="Email" 
              onChange={handleChange} 
              required 
            />
            <label 
              htmlFor="email" 
              className="absolute left-0 -top-3.5 text-[#647376] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black">
              Email
            </label>
          </div>

          {/* Message Input */}
          <div className="relative">
            <textarea 
              name="message" 
              className="peer placeholder-transparent h-32 w-full border-b-2 border-[#647376v] focus:outline-none focus:border-black bg-transparent text-white" 
              placeholder="Message" 
              onChange={handleChange} 
              required 
            />
            <label 
              htmlFor="message" 
              className="absolute left-0 -top-3.5 text-[#647376] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#647376]">
              Message
            </label>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full py-2 bg-dark hover:bg-black transition-colors text-white font-bold rounded-lg animate-bounceIn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

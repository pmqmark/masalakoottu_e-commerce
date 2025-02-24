import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-orange-600 font-semibold italic">Write a Message</h3>
        <h2 className="text-3xl font-bold text-green-900 mt-2">
          We’re always here to help you
        </h2>
      </div>

      <div className="max-w-3xl mx-auto mt-8">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Write a message"
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg h-32 focus:outline-none"
          ></textarea>

          <div className="text-center">
            <button className="bg-green-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-800">
              Send a message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

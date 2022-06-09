/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const Contacts = () => {
  return (
    <section
      name="Contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="post"
        action="https://getform.io/f/4f405913-36ee-422c-badf-f18160aa7edd"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 pt-2">
            //Submit the from below or shoot me an email
          </p>
        </div>
        <input
          type="text"
          name="Name"
          id="name"
          className="bg-[#ccd6f6] p-2"
          placeholder="Name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] "
          type="email"
          name="Email"
          id="email"
          placeholder="Email"
        />
        <textArea
          name="message"
          rows="10"
          className="p-2 bg-[#ccd6f6]"
          placeholder="message"
        ></textArea>
        <button
          type="submit"
          className="text-white border-2 hover:border-pink-600 hover:bg-pink-600 my-8 px-4 py-3 mx-auto flex items-center"
        >
          Let's Colaborate
        </button>
      </form>
    </section>
  );
};

export default Contacts;

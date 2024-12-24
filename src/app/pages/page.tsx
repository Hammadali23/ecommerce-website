"use client"
import { useState } from "react";

const FAQSection = () => {
  const [open, setOpen] = useState(false); 

  return (
    <div className="py-10 px-4 lg:px-32  bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Questions Looks Here</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* FAQ Items */}
        {[
          { question: "What types of chairs do you offer?" },
          { question: "How can we get in touch with you?" },
          { question: "Do your chairs come with a warranty?" },
          { question: "What will be delivered? And When?" },
          { question: "Can I try a chair before purchasing?" },
          { question: "How do I clean and maintain my Comforty chair?" },
        ].map((faq, index) => (
          <div
            key={index}
            className="relative bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col"
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-800">{faq.question}</h3>
              {/* Plus Icon */}
              <button
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <span className="text-3xl font-bold text-teal-600">-</span>
                ) : (
                  <span className="text-3xl font-bold text-teal-600">+</span>
                )}
              </button>
            </div>
            {/* Answer */}
            {open && (
              <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
                veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

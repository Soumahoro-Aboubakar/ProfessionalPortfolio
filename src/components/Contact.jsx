import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ClipLoader from "react-spinners/ClipLoader";
import image_svg from "../assets/shake.svg";
const serviceId = "service_ht97685";
const templateId = "template_9zcksa8";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailText, setEmailText] = useState("");
  const [name, setName] = useState("");
  const form = useRef();

  const handleNameInputChange = (event) => {
    setName(event.target.value);
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setEmailText(event.target.value);
  };

  const isEmail = (text) => {
    const gmailRegex = /^[^\s@]+@gmail\.com$/;
    return gmailRegex.test(text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEmail(email) || emailText.length < 5 || name.length < 2) {
      if (!isEmail(email)) {
        alert("Please check your email");
      } else if (name.length < 2) {
        alert("Enter your name, please");
      } else {
        alert("Oups, please check your information before sending the email");
      }
      return;
    }
    setLoading(true);

    emailjs
      .sendForm(serviceId, templateId, form.current, "mIfQMWn5CUch1AKk_")
      .then(
        (result) => {
          setEmail("");
          setEmailText("");
          setName("");
          setLoading(false);
          setMessage(true);
        },
        (error) => {
          console.log(error, "error");
        }
      );
  };

  return (
    <div id="contact" className="bg-neutral-500 flex flex-col lg:flex-row rounded-sm">
      <div className="flex-1 overflow-hidden">
        <img src={image_svg} alt="" className="h-full" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Contact Me</h2>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-11/12 lg:w-2/3 flex flex-col items-center space-y-4"
        >
          <input
            type="text"
            name="to_name"
            placeholder="Name"
            value={name}
            onChange={handleNameInputChange}
            className="w-full lg:w-72 h-10 lg:h-12 text-sm lg:text-base p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="from_name"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
            className="w-full lg:w-72 h-10 lg:h-12 text-sm lg:text-base p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Message"
            onChange={handleTextareaChange}
            name="message"
            value={emailText}
            className="w-full lg:w-72 h-40 lg:h-52 text-sm lg:text-base p-2 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            onClick={handleSubmit}
            className="border px-6 py-2 bg-gradient-to-tr from-orange-500 to-orange-700 text-white rounded-md"
          >
            Send
          </button>

          {message && (
            <span className="text-white">Thanks, I'll reply SOON.</span>
          )}
          {loading && (
            <span>
              <ClipLoader
                color={"red"}
                loading={loading}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

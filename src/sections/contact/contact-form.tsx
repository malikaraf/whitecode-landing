import React from "react";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import { ICONS } from "@/utils/icons";

const ContactForm = () => {
  return (
    <div
      className="h-[900px] w-bg-cover w-full bg-center font-montserrat pb-3"
      style={{ backgroundImage: "url('/Form.png')" }}
    >
      <div>
        <p className="text-[3rem] text-center mb-[30px] ml-[10px] my-[500px] pt-[50px]">
          Let's have a chat!
        </p>
      </div>

      <div className="mx-[400px] my-[180px] ">
        {/* Name Input */}
        <Input label="Name" type="text" placeholder="Name" labelPlacement="outside" className="my-[40px] w-[300px] " />

        {/* Professional Email Input */}
        <Input label="Professional Email" placeholder="Professional Email Input" type="email" labelPlacement="outside" className="w-[300px]"  />

        {/* Reasons of Interest - Radio Buttons */}
        <p className="my-2">Reasons of interest</p>
        <div className="flex flex-col space-y-4">
          {["Project", "Recruitment", "Other"].map((reason) => (
            <label key={reason} className="inline-flex items-center">
              <input
                type="radio"
                name="reason"
                className="form-radio text-black"
              />
              <span className="ml-2">{reason}</span>
            </label>
          ))}
        </div>

        {/* CAPTCHA */}
        <div className="mt-4">
          <Image src="/Captcha.png" alt="captcha" width={300} height={100} />
        </div>
      </div>

      {/* Right Column with Surname, Company, and Message */}
      <div className="mx-[850px] my-[-525px] w-[300px]  ">
        {/* Surname Input */}
        <Input label="Surname" placeholder="Surname" labelPlacement="outside" type="text" className="pt-[30px]" />
        <div className="mb-2 whitespace-nowrap">
          {/* Name of the Company Input */}
          <Input label="Name of the Company" placeholder="Name of the Company"labelPlacement="outside" type="text" className="pt-5 pb-2" />
        </div>

        {/* Message Input */}
        <p className="mb-2"></p>
        
        <Input
        label="Message"
          type="text"
          placeholder="Message"
          labelPlacement="outside"
          
          className="block w-[300px] h-[100px]   border-gray-300 pt-3"
        />
       

        {/* Submit Button */}
        <button className="bg-black hover:bg-blue-400 text-white font-bold py-1 px-[67px] rounded-lg mt-5">
          Submit
        </button>
      </div>

      <div>
        {/* social media icon */}
        <ul className="mx-[1350px] my-[200px] space-y-2 ">
          <li>{ICONS.linkedin}</li>
          <li>{ICONS.youtube}</li>
          <li>{ICONS.instagram}</li>
          <li>{ICONS.twitter}</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;

import React from "react";
import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/button";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { Input } from "@nextui-org/react";
import { ICONS } from "@/utils/icons";

const ContactForm = () => {
  return (
    <div
      className="h-[900px] w-bg-cover w-full bg-center font-montserrat pb-3"
      style={{ backgroundImage: "url('/Form.png')" }}
    >
      <div>
      <p className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center  sm:mb-[25px] md:mb-[30px] ml-[15px] sm:ml-[20px] md:ml-[25px] lg:ml-[30px] my-[100px] sm:my-[200px] md:my-[300px] lg:my-[500px] pt-[30px] sm:pt-[40px] md:pt-[50px]">
  Let's have a chat!
</p>
      </div>
      <div className="container mx-auto p-4 flex justify-center max w-auto ">
  {/* Form Container */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
    {/* Left Column */}
    <div>
      {/* Name Input */}
      <Input
        label="Name"
        type="text"
        placeholder="Name"
        labelPlacement="outside"
        className="my-4 transform -translate-y-[50px] w-96"
      />

      {/* Professional Email Input */}
      <Input
        label="Professional Email"
        placeholder="Professional Email Input"
        type="email"
        labelPlacement="outside"
        className="w-96"
      />

      {/* Reasons of Interest - Radio Buttons */}
      <p className="my-2">Reasons of Interest</p>
      <div className="flex flex-col space-y-4">
        <RadioGroup color="secondary" defaultValue="london">
          <Radio value="Project">Project</Radio>
          <Radio value="Recruitment">Recruitment</Radio>
          <Radio value="Other">Other</Radio>
        </RadioGroup>
      </div>

      {/* CAPTCHA */}
      <div className="mt-4">
        <Image src="/Captcha.png" alt="captcha" width={300} height={100} />
      </div>
    </div>

    {/* Right Column */}
    <div>
      {/* Surname Input */}
      <Input
        label="Surname"
        placeholder="Surname"
        labelPlacement="outside"
        type="text"
        className="pt-[30px] w-96"
      />

      <div className="mb-2">
        {/* Name of the Company Input */}
        <Input
          label="Name of the Company"
          placeholder="Name of the Company"
          labelPlacement="outside"
          type="text"
          className="pt-6 pb-2 w-96"
        />
      </div>

      {/* Message Input */}
      <Input
        label="Message"
        type="text"
        placeholder="Message"
        labelPlacement="outside"
        className="block w-96 h-[100px] border-gray-300 pt-3"
      />

      {/* Submit Button */}
      <Button className="bg-black hover:bg-blue-400 text-white font-bold py-1 px-6 rounded-lg mt-5 w-80">
        Submit
      </Button>
    </div>
  </div>

  {/* Social Media Icons */}
  <div className="flex justify-center mt-8">
    <ul className="flex space-x-4">
      <li>{ICONS.linkedin}</li>
      <li>{ICONS.youtube}</li>
      <li>{ICONS.instagram}</li>
      <li>{ICONS.twitter}</li>
    </ul>
  </div>
</div>
</div>
  );
};

export default ContactForm;

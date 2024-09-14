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
      <p className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center  sm:mb-[25px] md:mb-[30px] ml-[15px] sm:ml-[20px] md:ml-[25px] lg:ml-[30px] my-[60px] sm:my-[80px] md:my-[100px] lg:my-[120px] pt-[20px] sm:pt-[30px] md:pt-[40px]">

  Let's have a chat!
</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
    {/* Left Column: Name, Email, RadioGroup, Captcha */}
    <div>
      <Input
        type="text"
        label="Name"
        labelPlacement="outside"
        placeholder="Enter your name"
        className="w-full sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem]"
      />
      <Input
        type="email"
        label="Email"
        labelPlacement="outside"
        placeholder="Email"
        className="w-full sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem]"
      />
      <RadioGroup color="secondary" defaultValue="london">
        <Radio value="Project">Project</Radio>
        <Radio value="Recruitment">Recruitment</Radio>
        <Radio value="Other">Other</Radio>
      </RadioGroup>
      {/* CAPTCHA */}
      <div className="mt-4">
        <Image src="/Captcha.png" alt="captcha" width={300} height={100} />
      </div>
    </div>

    {/* Right Column: Surname, Name of the company, Message, Submit Button */}
    <div>
      <div className="pb-3 pr-8">
      <Input
        label="Surname"
        placeholder="Surname"
        labelPlacement="outside"
        type="text"
        className="w-full sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem]"
      />
      </div>
      <div className="pb-3 pr-8">
      <Input
      
        label="Name of the Company"
        placeholder="Name of the Company"
        labelPlacement="outside"
        type="text"
        className="w-full sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem]"
      />
      </div>
        <div className="pb-3 pr-8">
      <Input
        label="Message"
        type="text"
        placeholder="Message"
        labelPlacement="outside"
        className="w-full sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem]"
      />
      <Button className="bg-black hover:bg-blue-400 text-white font-bold py-1 px-6 rounded-lg mt-5 w-80">
        Submit
      </Button>
    </div>
  </div>

  {/* Social Media Icons */}

  <div className="grid [;">
    <ul className="">
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

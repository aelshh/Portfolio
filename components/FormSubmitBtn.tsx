import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const FormSubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="flex  group cursor-pointer items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none  transition-all hover:scale-110  active:scale-105 disabled:opacity-65 disabled:scale-100 "
      disabled={pending}
    >
      {pending ? (
        <div className="w-5 h-5 rounded-full animate-spin  border-b-2  border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="opacity-70 text-xs transition-all group-hover:translate-x-1 group-hover:-translate-y-1  " />
        </>
      )}{" "}
    </button>
  );
};

export default FormSubmitBtn;

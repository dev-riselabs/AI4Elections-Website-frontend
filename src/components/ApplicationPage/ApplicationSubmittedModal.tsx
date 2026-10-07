import { IoArrowForwardSharp } from "react-icons/io5";
import { useNavigate } from "react-router";

type ModalProps = {
  setSubmitted : React.Dispatch<React.SetStateAction<boolean>>
}

function ApplicationSubmittedModal({setSubmitted} : ModalProps) {
  const navigate = useNavigate()

  function handleClick(){
    setSubmitted(false)
    navigate('/')
  }

  return (
    <div className="fixed w-full h-screen bg-black/70 flex items-center justify-center px-4 z-30 inset-0">
      <div
        className="flex flex-col items-center gap-7 md:gap-8 rounded-3xl md:rounded-[70px] bg-center bg-no-repeat bg-cover px-4 md:px-8 py-10  max-w-180 max-h-[90vh] overflow-y-auto mx-auto"
        style={{ backgroundImage: "url('/why_ai4election_bg.png')" }}
      >
        <div className="flex flex-col items-center gap-12.5">
          <div className="flex items-center gap-6">
            <h2 className="text-lg md:text-xl  font-semibold text-white">
              Application Submitted
            </h2>
            <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-accent-green shrink-0"></div>
          </div>
          <p className="text-center text-sm md:text-base text-white">
            Thank you for applying to Rise Networks #AI4Elections Hackathon
            2026.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center text-xs md:text-sm text-white">
          <p className="text-center">
            Congratulations, your application has been successfully received.
          </p>
          <p className="text-center">
            We appreciate your interest in contributing your skills, ideas and
            perspective to a national community exploring responsible artificial
            intelligence and technology for electoral innovation, integrity and
            inclusion.
          </p>
        </div>
        <button onClick={handleClick} className="flex items-center gap-2 w-auto bg-accent-orange text-white font-bold text-sm md:text-lg rounded-md px-8 py-3 justify-center">
          Explore #AI4Elections
          <IoArrowForwardSharp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default ApplicationSubmittedModal;

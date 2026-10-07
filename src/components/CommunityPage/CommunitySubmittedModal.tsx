import { IoArrowForwardSharp } from "react-icons/io5";
import { useNavigate } from "react-router";

type ModalProps = {
  setSubmitted : React.Dispatch<React.SetStateAction<boolean>>
}

function CommunitySubmittedModal({setSubmitted} : ModalProps) {
  const navigate = useNavigate()

  function handleClick(){
    setSubmitted(false)
    navigate('/')
  }

  return (
    <div className="fixed w-full h-screen bg-black/70 flex items-center justify-center px-4 z-30 inset-0">
      <div
        className="flex flex-col items-center gap-6 md:gap-8 rounded-3xl md:rounded-[50px] bg-center bg-no-repeat bg-cover px-6 md:px-8 py-7 md:py-12 max-w-150 w-full max-h-[90vh] overflow-y-auto mx-auto"
        style={{ backgroundImage: "url('/why_ai4election_bg.png')" }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-6">
            <div className="flex flex-col gap-2 items-center">
          <h2 className="text-lg md:text-xl font-semibold text-white text-center">
            Welcome to the #AI4Elections 
          </h2>
          <h3 className="text-sm md:text-lg font-semibold text-white text-center"
          >Community of Practice.</h3>
          </div>
          <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-accent-green shrink-0"></div>
        </div>

        <p className="text-center text-white text-xs md:text-base">
          Your registration has been received. We'll keep you informed about
          upcoming sessions, research opportunities, collaborations, mentorship
          and innovation activities.
        </p>

        <button onClick={handleClick} className="flex items-center gap-2 w-auto bg-accent-orange text-white font-bold text-sm md:text-lg rounded-md px-8 py-3 justify-center">
          Explore #AI4Elections
          <IoArrowForwardSharp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default CommunitySubmittedModal;

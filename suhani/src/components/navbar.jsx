import React from 'react'
import { Smile } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = ({ activeSection }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResumeClick = () => {
    navigate('/resume');
  };

  return (
    <nav className="flex items-center justify-between rounded-2xl fixed top-0 left-0 right-0 z-50 mx-auto my-3 w-[92%] max-w-4xl bg-slate-900 px-4 py-2.5 text-white shadow-md sm:px-5 sm:py-3">
      <div className="text-2xl font-signature text-yellow-300 tracking-widest sm:text-2xl">Suhani</div>
      <div className="flex gap-3 text-sm sm:gap-5 sm:text-base">
        <button
          type="button"
          onClick={() => handleNavigateToSection('home')}
          className={`transition-colors duration-300 hover:cursor-pointer ${activeSection === 'home' ? 'text-blue-400' : 'text-blue-300'}`}
        >
          Home
        </button>
        <button
          type="button"
          onClick={() => handleNavigateToSection('projects')}
          className={`transition-colors duration-300 hover:cursor-pointer ${activeSection === 'projects' ? 'text-blue-400' : 'text-blue-300'}`}
        >
          Projects
        </button>
        <button
          type="button"
          onClick={handleResumeClick}
          className={`transition-colors duration-300 hover:cursor-pointer ${activeSection === 'resume' ? 'text-blue-400' : 'text-blue-300'}`}
        >
          Resume
        </button>
      </div>
      <button
        type="button"
        onClick={() => handleNavigateToSection('contact')}
        className="flex flex-row items-center bg-yellow-400 font-semibold cursor-pointer text-slate-900 rounded-full p-2 text-sm hover:bg-yellow-300 group sm:px-3 sm:py-1"
      >
        <span className="hidden sm:inline">Contact Me</span>
        <Smile className="ml-0 sm:ml-2 transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:scale-110" />
      </button>
    </nav>
  )
}

export default Navbar
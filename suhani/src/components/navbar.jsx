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
    <nav className="flex items-center justify-between rounded-3xl fixed top-0 left-0 right-0 z-50 mx-20 my-5 bg-slate-900 px-6 py-4 text-white shadow-md">
      <div className="text-3xl font-signature text-yellow-300 tracking-widest">Suhani</div>
      <div className="flex gap-8">
        <button
          type="button"
          onClick={() => handleNavigateToSection('home')}
          className={`transition-colors duration-300 ${activeSection === 'home' ? 'text-blue-400' : 'text-blue-300'}`}
        >
          Home
        </button>
        <button
          type="button"
          onClick={() => handleNavigateToSection('projects')}
          className={`transition-colors duration-300 ${activeSection === 'projects' ? 'text-blue-400' : 'text-blue-300'}`}
        >
          Projects
        </button>
        <button
          type="button"
          onClick={handleResumeClick}
          className={`transition-colors duration-300 ${activeSection === 'resume' ? 'text-blue-400' : 'text-blue-300'}`}
        >
          Resume
        </button>
      </div>
      <div className="flex flex-row bg-yellow-400 font-bold cursor-pointer text-slate-900 rounded-full px-3 py-1 hover:bg-yellow-300">
        Contact Me
        <Smile className="animate-spin ml-2" />
      </div>
    </nav>
  )
}

export default Navbar
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SearchInputmobile = () => {
  const { links } = useSelector((state) => state.header);

  const [searchText, setSearchText] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null); // ref for outside click detection

  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const matchedLink = links.find((link) =>
        link.label.toLowerCase().includes(searchText.toLowerCase())
      );
      if (matchedLink) {
        navigate(matchedLink.path);
        setSearchText('');
        setShowSuggestions(false);
      }
    }
  };

  const handleSelect = (link) => {
    navigate(link.path);
    setSearchText('');
    setShowSuggestions(false);
  };

  const matchedOptions = searchText
    ? links.filter((link) =>
        link.label.toLowerCase().includes(searchText.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={inputRef}
      className="relative lg:pr-5 flex sm:hidden z-10 w-32"
    >
      <input
        type="text"
        placeholder="Search..... 🔍"
        className="w-full px-4 py-1 rounded-lg bg-white text-gray-900 placeholder-gray-900 outline-none text-sm border-[1px] border-indigo-500"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          setShowSuggestions(true);
        }}
        onKeyDown={handleKeyDown}
      />
      {showSuggestions && matchedOptions.length > 0 && (
        <ul className="absolute top-full w-full bg-indigo-200 border border-gray-200 rounded-md shadow-md">
          {matchedOptions.map((link) => (
            <li
              key={link.path}
              onClick={() => handleSelect(link)}
              className="px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 cursor-pointer w-full"
            >
              {link.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInputmobile;

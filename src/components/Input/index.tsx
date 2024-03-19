import React from 'react';

type InputProps = {
  onChange: (query: string) => void;
  value: string;
};

const Input = ({ onChange, value }: InputProps) => {
  return (
    <div className="p-4">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="block p-4 ps-10 w-1/2 text-sm bg-gray-200 rounded-lg focus:border-gray-100 focus:bg-white focus:border-2 focus:outline-none dark:bg-gray-100"
          placeholder="Search high-resolution images"
          value={value}
          onChange={(event) => onChange(event?.target?.value)}
        />
      </div>
    </div>
  );
};

export default Input;

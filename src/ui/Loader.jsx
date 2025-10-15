import React from 'react';

// insert-0 absolute flex items-center justify-center bg-slate-200/20 backdrop-blur-sm
function Loader() {
  return (
    <div className="absolute flex h-full w-full items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;

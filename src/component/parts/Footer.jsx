import React from 'react'
import IconHeader from './IconHeader'

function Footer() {
  return (
    <footer className="h-72 bg-[#101424] text-white">
      <div>
        <IconHeader/>
      </div>
      <div className="">
        <p className='text-center'>&copy; Copyrigt <a className='text-blue-500' href="http://github.com/dwiprst13" target='_blank'>prast13</a></p>
      </div>
    </footer>
  );
}

export default Footer
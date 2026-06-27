import React from 'react'


function Pagination({ PageHandler, page, DynamicPage }) {

  const getPages = (current, total) => {
    //console.log("Total ==", total)
    const pages = []
    if (total <= 5) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
    }
    else {
      if (current <= 3) {
        pages.push(1, 2, 3, '...', total)
      } else if (current >= total - 2) {
        pages.push(1, '...', total - 2, total - 1, total)
      } else {
        pages.push(1, '...', current - 1, current, current + 1, '...', total)
      }
    }
    return pages;
  }


  return (
    <div className='mt-10 space-x-4 flex items-center'>

      <button disabled={page === 1}
        onClick={() => PageHandler(page - 1)}
        className={`px-5 cursor-pointer py-1.5 flex items-center gap-3 rounded-lg ${page === 1 ? 'bg-purple-700/50' : 'bg-[#7c3aed]'} hover:scale-105 transition duration-300 font-semibold text-lg text-white shadow-xl shadow-[#7c3aed]/30`}>
        Prev
      </button>
      {
        getPages(page, DynamicPage)?.map((item, index) => {
          return <span className={`cursor-pointer ${item === page ? 'font-bold text-[#7c3aed]' : 'text-black'}`}
            key={index}
            onClick={() => typeof item === "number" && PageHandler(item)}
          >
            {item}
          </span>
        })
      }

      <button disabled={page === DynamicPage}
        onClick={() => PageHandler(page + 1)}
        className={`px-5 py-1.5 cursor-pointer flex items-center gap-3 rounded-lg ${page === DynamicPage ? 'bg-purple-700' : 'bg-[#7c3aed]'} hover:scale-105 transition duration-300 font-semibold text-lg text-white shadow-xl shadow-[#7c3aed]/30`}>
        Next
      </button>
    </div>
  )
}

export default Pagination

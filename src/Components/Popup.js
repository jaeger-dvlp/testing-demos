import React from 'react'

export default function Popup() {
  return (
    <div
      data-testid="popup"
      className="p-5 bg-zinc-800 w-full max-w-[20rem] rounded-lg flex flex-wrap justify-center content-start shadow-xl"
    >
      <h1 className="w-full text-zinc-300 text-md font-light pb-3 text-left border-b-2 border-b-zinc-700 ">
        Simple Popup
      </h1>
      <div className="popup-body font-light text-left w-full py-3 text-zinc-300 text-sm">
        Simple popup for testing.
      </div>
      <div className="popop-footer font-light text-right w-full flex justify-end gap-2">
        <button className="p-3 py-2 hover:bg-opacity-50 bg-green-700 bg-opacity-30 text-green-500 rounded-lg text-light font-normal text-sm">
          Apply
        </button>
        <button className="p-3 py-2 hover:bg-opacity-50 bg-red-700 bg-opacity-30 text-red-500 rounded-lg text-light font-normal text-sm">
          Close
        </button>
      </div>
    </div>
  )
}

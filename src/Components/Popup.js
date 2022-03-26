import React, { useState } from 'react'

export default function Popup() {
  const [bodyMSG, setBodyMSG] = useState('Simple popup for testing.')
  return (
    <div
      data-testid="popup"
      className="p-5 pop-up bg-zinc-800 w-full max-w-[20rem] rounded-lg flex flex-wrap justify-center content-start shadow-xl"
    >
      <h1 className="w-full text-zinc-300 text-md font-light pb-3 text-left border-b-2 border-b-zinc-700 ">
        Simple Popup
      </h1>
      <div
        data-testid="popup-body"
        className="popup-body font-light text-left w-full py-3 text-zinc-300 text-sm"
      >
        {bodyMSG}
      </div>
      <div className="popop-footer font-light text-right w-full flex justify-end gap-2">
        <button
          name="popup-apply"
          type="button"
          data-testid="popup-apply"
          className="p-3 py-2 hover:bg-opacity-50 bg-green-700 bg-opacity-30 text-green-500 rounded-lg text-light font-normal text-sm"
          onClick={() => setBodyMSG('You have successfully applied.')}
        >
          Apply
        </button>
        <button
          name="popup-close"
          type="button"
          data-testid="popup-close"
          className="p-3 py-2 hover:bg-opacity-50 bg-red-700 bg-opacity-30 text-red-500 rounded-lg text-light font-normal text-sm"
          onClick={() =>
            document.querySelector('.pop-up').classList.add('hidden')
          }
        >
          Close
        </button>
      </div>
    </div>
  )
}

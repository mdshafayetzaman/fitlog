'use client'
 
import { Bookmark, BookmarkCheck } from 'lucide-react'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { IType } from '../../lib/types'
import { PlanContext } from '@/Context/PlanContext'

const SavedButton = ({ exercise }: { exercise: IType }) => {
  const { saved, setSaved } = useContext(PlanContext)

  const alreadySaved = saved.some((item) => item.id === exercise.id)

  const handleSave = () => {
    if (alreadySaved) {
      return
    }

    setSaved((previous) => [...previous, exercise])

    toast.success(
      <div>
        <p className="font-semibold">Saved successfully!</p>
        <p className="text-xs opacity-70">
          {exercise.name} has been saved for later.
        </p>
      </div>,
      {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      },
    )
  }

  return (
    <button
      onClick={handleSave}
      disabled={alreadySaved}
      type="button"
      className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-[11px] font-medium transition ${
        alreadySaved
          ? 'cursor-not-allowed border border-[#343942] bg-[#252a31] text-[#858a94]'
          : 'border border-[#343942] bg-transparent text-[#d1d4d9] hover:bg-[#191c21]'
      }`}
    >
      {alreadySaved ? (
        <>
          <BookmarkCheck size={13} />
          Saved for later
        </>
      ) : (
        <>
          <Bookmark size={13} />
          Save for later
        </>
      )}
    </button>
  )
}

export default SavedButton;

'use client'

import { PlanContext } from '@/Context/PlanContext'
import { IType } from '@/app/lib/types'
import { Bookmark } from 'lucide-react'
import React, { useContext } from 'react'

const SavedButton = ({ exercise }: { exercise: IType }) => {
  const { saved, setSaved } = useContext(PlanContext)

  const handleSave = () => {
    setSaved((previous) => [...previous, exercise])
  }

  return (
    <button
      onClick={handleSave}
      type="button"
      className="flex items-center justify-center gap-2 rounded-lg border border-[#343942] bg-transparent px-4 py-2.5 text-[11px] font-medium text-[#d1d4d9] transition hover:bg-[#191c21]"
    >
      <Bookmark size={13} />
      Save for later
    </button>
  )
}

export default SavedButton

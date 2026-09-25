'use client'

import { PlanContext } from '@/Context/PlanContext'
import { IType } from '@/app/lib/types'
import { CalendarPlus } from 'lucide-react'
import React, { useContext } from 'react'

const AddToCartButton = ({ exercise }: { exercise: IType }) => {
  const { plan, setPlan } = useContext(PlanContext)

  const handleCart = () => {
    setPlan([...plan, exercise])
  }

  return (
    <button
      onClick={handleCart}
      type="button"
      className="flex items-center justify-center gap-2 rounded-lg bg-[#baff00] px-4 py-2.5 text-[11px] font-bold text-black transition hover:bg-[#a9eb00]"
    >
      <CalendarPlus size={13} />
      Add to today's plan
    </button>
  )
}

export default AddToCartButton

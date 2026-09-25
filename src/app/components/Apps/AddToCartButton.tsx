'use client'

import { PlanContext } from '@/Context/PlanContext'
import { IType } from '@/app/lib/types'
import { CalendarCheck, CalendarPlus } from 'lucide-react'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'

const AddToCartButton = ({ exercise }: { exercise: IType }) => {
  const { plan, setPlan } = useContext(PlanContext)

  const alreadyAdded = plan.some((item) => item.id === exercise.id)

  const handleCart = () => {
    if (alreadyAdded) {
      return
    }

    setPlan((previous) => [...previous, exercise])

    toast.success("Added to today's plan!", {
      position: 'top-right',
      autoClose: 2000,
      theme: 'dark',
    })
  }

  return (
    <button
      onClick={handleCart}
      disabled={alreadyAdded}
      type="button"
      className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-[11px] font-bold transition ${
        alreadyAdded
          ? 'cursor-not-allowed bg-[#252a31] text-[#858a94]'
          : 'bg-[#baff00] text-black hover:bg-[#a9eb00]'
      }`}
    >
      {alreadyAdded ? (
        <>
          <CalendarCheck size={13} />
          Added to today's plan
        </>
      ) : (
        <>
          <CalendarPlus size={13} />
          Add to today's plan
        </>
      )}
    </button>
  )
}

export default AddToCartButton

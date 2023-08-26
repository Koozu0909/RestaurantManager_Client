/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { findInputError, isFormInvalid } from '../utils'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'

export const Input = ({
  name,
  type,
  id,
  placeholder,
  validation,
  showPassword,
  showConfirmPassword,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const inputErrors = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputErrors)

  return (
    <div className='w-full relative'>
      <div className="flex justify-between">
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError 
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      <input
        className="p-2 w-full focus:outline-none"
        id={id}
        type={
          name === 'password'
            ? showPassword
              ? 'text'
              : type
            : name === 'confirmPassword'
            ? showConfirmPassword
              ? 'text'
              : type
            : type
        }
        placeholder={placeholder}
        {...register(name, validation)}
      />
    </div>
  )
}

const InputError = ({ message }) => {
  return (
    <motion.p
      className=" justify-end w-40 px-2 py-2 absolute -left-52 top-0 flex items-center gap-1 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}

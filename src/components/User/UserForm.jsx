import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserSignupForm from './UserSignupForm'
import styles from '../../styles/User.module.css'
import { toggleForm, toggleFormType } from '../../features/user/userSlice'
import UserLoginForm from './UserLoginForm'

const UserForm = () => {
    const dispatch = useDispatch()
    const { showForm, formType } = useSelector(({ user }) => user)

    const closeForm = () => dispatch(toggleForm(false))
    const toggleCreateFormType = (type) => dispatch(toggleFormType(type))

  return showForm ? (
    <> 
        <div className={styles.overlay} onClick={closeForm} />
        {formType === 'signup'
            ? <UserSignupForm toggleCreateFormType={toggleCreateFormType} closeForm={closeForm} /> 
            : <UserLoginForm toggleCreateFormType={toggleCreateFormType} closeForm={closeForm} />}
    </>
  ) : (
    <></>
  )
}

export default UserForm
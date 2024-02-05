import { Button } from '@mui/material'
import { useUserContext } from 'app/hooks/useUserContext';
import React, { useEffect } from 'react'
import usePost from 'app/hooks/services/usePost';

const LoanInitiation = () => {
  const { user } = useUserContext();
  const { postData, data, error, loading } = usePost(`/loan/initiate`);
  console.log("🚀 ~ LoanInitiation ~ user:", user)

  const handleLoanInitiation = () => {
    postData({
      user_email: user.email
    })
  }
  
  return (
    <div>
        <h3>Initiate a loan </h3>
        <Button variant='contained' onClick={handleLoanInitiation}>Initiate Loan</Button>
    </div>
  )
}

export default LoanInitiation
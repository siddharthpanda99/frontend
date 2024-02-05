import { Button } from '@mui/material'
import { useUserContext } from 'app/hooks/useUserContext';
import React, { useEffect, useState } from 'react'
import usePost from 'app/hooks/services/usePost';
import { baseUrl } from 'app/constants';
import LoansDatagrid from 'app/components/LoansDataGrid';

import { useQuery } from "react-query";
import LoanSubmissionForm from 'app/components/LoanSubmissionForm';

const LoanInitiation = () => {
  const { user } = useUserContext();
  const [loansData, setLoansData] = useState([]);
  const [unprocessedLoans, setUnprocessedLoans] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "ABC",
    provider: "xero",
    user_id: user.user_id,
    loan_amt: 0,
  });
  // console.log("🚀 ~ LoanInitiation ~ user:", user)
  const { postData, data, error, loading } = usePost(`/loan/initiate`);

  const postLoanSubmission = usePost(`/loan/submit`);
  // const { data, error, isLoading } = useQuery(
  //   "bookingsByUserEmail",
  //   getBookingsForUser
  // );

  const updateFormData = (key: string, value: any) => {
    console.log("Updating form data")
    setFormData({
      ...formData, // Copy the old fields
      [key]: value, // But override this one
    });
  };

  useEffect(() => {
    console.log("🚀 ~ LoanInitiation ~ loansData:", loansData)
    const isUnprocessedLoanPresent = loansData.filter(
      (loan) => !loan?.processingDate).length;
      if(isUnprocessedLoanPresent) setUnprocessedLoans(true)
      console.log("🚀 ~ useEffect ~ isUnprocessedLoanPresent:", isUnprocessedLoanPresent)
  }, [loansData])
  

  const getLoanListForUser = async () => {
    const res = await fetch(`${baseUrl}/loans?user_id=${user.user_id}`);
    return res.json();
  };

  const usersResp = useQuery("bookingsByUserEmail", getLoanListForUser);
  
  useEffect(() => {
    // Ger a list of loans
    if (usersResp.data) {
      setLoansData(usersResp?.data?.data);
    }
  }, [usersResp]);

  const handleLoanInitiation = () => {
    postData({
      user_id: user.user_id
    })
  }

  const handleLoanSubmission = () => {
    console.log("🚀 ~ handleLoanSubmission ~ formData:", formData)
    postLoanSubmission.postData(formData);
  };
  
  return (
    <div>
      {JSON.stringify(data)}
      <h3>Initiate a loan </h3>
      {!unprocessedLoans ? (
        <Button variant="contained" onClick={handleLoanInitiation}>
          Initiate Loan
        </Button>
      ) : (
        <>
          <LoanSubmissionForm
            formData={formData}
            updateFormData={updateFormData}
          />
          <Button variant="contained" onClick={handleLoanSubmission}>
            Submit Loan
          </Button>
        </>
      )}
      <LoansDatagrid loansData={loansData} />
    </div>
  );
}

export default LoanInitiation
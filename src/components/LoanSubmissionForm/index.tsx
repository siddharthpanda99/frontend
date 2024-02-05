import React from 'react'
import { TextField } from '@mui/material';

const LoanSubmissionForm = ({ formData, updateFormData }) => {
  console.log("🚀 ~ LoanSubmissionForm ~ formData:", formData)
  const { companyName, provider, loan_amt } = formData;
  return (
    <div>
      <TextField
        id="input-with-icon-textfield"
        label="Company Name"
        value={companyName}
        onChange={(e) => updateFormData("companyName", e.target.value)}
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start">
        //       <AccountCircle />
        //     </InputAdornment>
        //   ),
        // }}
        variant="standard"
      />
      <TextField
        id="input-with-icon-textfield"
        label="Provider"
        value={provider}
        onChange={(e) => updateFormData("provider", e.target.value)}
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start">
        //       <AccountCircle />
        //     </InputAdornment>
        //   ),
        // }}
        variant="standard"
      />
      <TextField
        id="input-with-icon-textfield"
        label="Loan Amount"
        value={loan_amt}
        onChange={(e) => updateFormData("loan_amt", e.target.value)}
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start">
        //       <AccountCircle />
        //     </InputAdornment>
        //   ),
        // }}
        variant="standard"
      />
    </div>
  );
};

export default LoanSubmissionForm
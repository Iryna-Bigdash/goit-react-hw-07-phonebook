import styled from '@emotion/styled';



// export const BtnForm = styled.button`
//   width: 150px;
//   background-color: #8b54c1;
//   font-size: 25px;
//   color: white;
//   border: none;
//   border-radius: 5%;
//   cursor: pointer;

//   &&:hover{
//     border: 1px solid white;
//   }
// `;


const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  border-color: white;
  background-color: #8b54c1;
`;

const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
  color: white;
`;

const InputForm = styled.input`
  padding: 10px;
  margin-right: 10px;
  font-size: 25px;
`;

const BtnForm = styled.button`
  width: 180px;
  padding: 10px;
  background-color: #8b54c1;
  font-size: 25px;
  color: white;
  border: none;
  border-radius: 5%;
  cursor: pointer; 
   &&:hover{
    border: 1px solid white;
  }
`;


export { Form, Label, InputForm, BtnForm };



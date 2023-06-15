import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  list-style: none;
  background-color: #8b54c1;
  color: white;
  padding: 0;
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

export const ContactsContainer = styled.div`
  flex: 1;
  text-align:start;
  font-weight: bold;
  margin-right: 10px;
`;

export const PhoneContainer = styled.div`
 text-align:start;
  flex: 1;
`;

export const DeleteContactBtn = styled.button`
   background-color: #e5d2f8;
   width: 100px;
   cursor: pointer;
   color: #8b54c1;
   font-weight: 800;
   font-size: 23px;

   &&:hover{
    background-color: white;

   }

`
import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const CustomButton = styled.button`
  max-width: 35rem;
  padding: 0.5rem;
  border-radius: 20px;
  border: 1px solid gray;
  background-color: skyblue;
  :hover {
    background-color: blue;
    color: white;
  }
`;

export const CustomTextarea = styled.textarea`
  width: 45rem;
  height: 25rem;
  :hover {
    background-color: #e0ffff;
    cursor: pointer;
  }
`;

export const LoaderComponent = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.834)
    url("https://media.giphy.com/media/8agqybiK5LW8qrG3vJ/giphy.gif") center
    no-repeat;
  z-index: 1;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

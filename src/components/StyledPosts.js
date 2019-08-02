import styled from "styled-components";

//Styling for EditPosts.js
export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 7em;
  margin-right: 7em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  padding: 0.5em;
  background-color: #f5f5f5;
  height: auto;
  width: 50%;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center
  flex-direction: column;
`;

export const CardPost = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1em;
  width: auto;
`;

export const CardEditButton = styled.div`
  display: flex;
  justfy-content: center;
`;

export const Button = styled.button`
  border: none;

`;
export const Label = styled.label`
  font-size: 1.15em;
`;

//Styling for Posts.js
export const FullDiv = styled.div`
  width: auto;
  background-color:	#0A235C;
  padding: 2em;
  height: ${window.innerHeight}px;
`;

//Styling for AddPosts.js
export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 7em;
  margin-right: 7em;
  padding: 0.5em;
  background-color: #f5f5f5;
  height: auto;
  border-radius: 2em;
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
`;

export const Textarea = styled.textarea`
  background-color: rgba(255, 175, 175, 0.3);
  border-radius: 0.25em;
  border: 0.04em solid #ffafaf;
`;

export const Select = styled.select`
  background-color: rgba(255, 175, 175, 0.3);
  border-radius: 0.25em;
  border: 0.04em solid #ffafaf;
`;

export const Input = styled.input`
  background-color: rgba(255, 175, 175, 0.3);
  width: 30em;
  border-radius: 0.25em;
  border: 0.04em solid #ffafaf;
`;

export const SubmitButton = styled.button`
  background-color: rgba(10, 35, 92, 0.85);
  padding: 0.55em;
  border-radius: 0.25em;
  border: 0.04em solid #0a235c;
  color: #FFCC00;
`;

export const QuestionHeader = styled.h2`
  color: #FFCC00;
`;

//Styling by Mariam Farrukh for Posts Components

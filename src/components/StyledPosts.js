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
  font-size: 1.5em;
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
`;

//Styling by Mariam Farrukh for Posts Components

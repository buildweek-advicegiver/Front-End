import styled from "styled-components";

//Alexis
export const Sign = styled.div`
    margin: 0 auto;
    margin-top: 40px;
    border: 2px solid #E3E1E1;
    border-radius: 12px;
    box-shadow: 5px 5px 8px #BFBFBF;
    width: 30%;
    align-items: center;
    height: 700px;
    display: flex;
    justify-content: center;
`;

export const Context = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
    margin-top: 25px;
    margin-bottom: 25px;
    .form-group {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        margin-left: 10px;
        label {
            margin-bottom: 5px;
            display: flex;
            justify-content: space-between;
        }
    }
`;

export const Gender = styled.div`
   
    .form-group {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        
    }
    label {
        display: flex;
        justify-content: space-evenly;
        margin-right: 70px;
        margin-left: 20px;
        margin-top: 2px;
    }
`;


export const SignupBtn = styled.button`
    background-color: #0A235C;
    color: #FFCC00;
    font-size: 14px;
    border-radius: 8px;
    padding: 8px 8px;
    width: 40%;
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 20px;
`;

export const Header = styled.h2`
    font-size: 18px;
    color: #0A235C;
    text-align: center;
`;


//Kelly

export const LoginImg = styled.img`

display: block;
margin-left: auto;
margin-right: auto;
width: 89rem;
height: 46.8rem;

@media (max-width: 800px) {

   
    
  }

  @media (max-width: 500px) {
    display: none;
}



`;



export const LoginBtn = styled.button`

color: #FFCC00;
background: #0A235C;
padding: .5rem;
margin: 1rem;
border: none;
border-radius: 3px;
font-size: 1rem;
&:hover {
    background: #FFCC00;
    color: #0A235C;
    
    { cursor: pointer; }
}


@media (max-width: 800px) {
    
}



`;









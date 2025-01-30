import styled from "styled-components";

export const ListNextDayInfoStyled = styled.div`
  grid-column: span 2 / span 2;
  grid-row: span 3 / span 3;
  grid-column-start: 2;
  grid-row-start: 1;
  margin-top: 30px;
  height: 365px;
  width: 550px;
  background: linear-gradient(107deg, rgba(34,135,203,255) 0%, rgba(70,165,222,255) 100%);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 20px;
  position: relative;
  
  ul {
    height: 345px;
	width: 530px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    background: linear-gradient(107deg, rgba(22,157,239,255) 0%, rgba(85,186,238,255) 100%);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
import styled from "styled-components";


export const a=styled.div`

 `; 

export const Foto = styled.img`
  width: 274px;
  height:268px;

`;
export const NameCar = styled.ul`
  list-style: none;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  display: flex;
  padding: 0;
`;

export const NameCarLi = styled.li`
  margin: 2px;
  
`;

export const Descr = styled.ul`
  width: 274px;
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(18, 20, 23, 0.5);
  text-align: left;
  gap: 6px;
  padding: 0;
  
`;

export const DescrLi = styled.li`
display: inline;
 padding-left: 6px;
 padding-right: 6px;
 border-left: 10px;
 white-space: nowrap;
 &:first-child{
    padding-left: 0;
    padding-right: 6px;
 }
 &:last-child{
    padding-right: 0;
    border-right: 0;
 }
  width: 274px; 
`;
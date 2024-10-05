import IceAndFire from "./components/IceAndFire.tsx";
import { useState, useEffect } from 'react';
import styled from "styled-components";
import { Character } from "./interfaces/Characters.ts";

const StyledH=styled.h1`
  margin: auto;
  border: 3px gray dotted;
  background-color: red;
  text-align: center;
  color: white;
`;

const ParentDiv=styled.div`
  width: 80vw;
  margin: auto;
  border: 5px red solid; 
`;

export default function App() {
  const [data, setData] = useState<Character[]>([]);

  useEffect(() => {
    const randomPage = Math.floor(Math.random() * (214) + 1);
    async function fetchData(): Promise<void>{
      const rawData = await fetch(`https://anapioficeandfire.com/api/characters?page=${randomPage}&pageSize=10`);
      const results : Character[] = await rawData.json();
      setData(results);
    }
    fetchData()
      .then(() => console.log("Data fetched successfully " + randomPage))
      .catch((e: Error) => console.log("This was the error: " + e));
  }, []);

  return(
    <ParentDiv>
      <StyledH>A Song of Ice and Fire</StyledH>
      <IceAndFire data={data}/>
    </ParentDiv>
  )
}

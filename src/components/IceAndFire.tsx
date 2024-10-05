import styled from "styled-components";
import { Character } from "../interfaces/Characters.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: lightblue;
`;

const SingleCharDiv=styled.div<{died: string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 3%;
    border: ${(props) => (props.died !== "" ? `3px green solid` : `3px darkred solid`)};
    text-align: center;
    background-color: white;
`;

export default function IceAndFire({data}:{ data:Character[] }) {
    return(
        <AllCharsDiv>
            {
                data.map((char: Character) =>
                    <SingleCharDiv died={char.died}>
                        <h1>{char.name}</h1>
                        <p style={{color: "blue"}}>{char.culture}</p>
                        <p style={{color: "red"}}>{char.titles.join(", ")}</p>
                        <p>{char.tvSeries.join(", ")}</p>
                        <p style={{color: "green"}}>{char.playedBy}</p>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}

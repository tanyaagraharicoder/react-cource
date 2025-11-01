import styled from 'styled-components';
function App8(){
    // const Heading = styled.h1`
    // color : purple;
    // text-align : center;
    // background-color : lightyellow;
    // border : 2px solid red;
    // margin : 20px;
    // padding : 10px;
    // `;
    const Heading= styled.h1(
        {
            color : 'purple',
            textAlign : 'center',
            backgroundColor : 'lightyellow',
            border : '2px solid red',
            margin : '20px',
            padding : '10px',

        }
    )
    const StyledBtn= styled.button`
    background-color : lightblue;
    color : darkblue;
    padding : 10px 15px;
    border : none;
    border-radius : 5px;

    `

    return(
        <>
        <h1>Styled Component with react js </h1>
        <Heading> hello heading</Heading>
        <Heading> hello heading1</Heading>
        <Heading> hello heading2</Heading>
        <Heading> hello heading3</Heading>
        <Heading> hello heading4</Heading>
        <StyledBtn> login</StyledBtn>
        </>
    )
}
export default App8;
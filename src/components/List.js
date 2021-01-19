import styled from "styled-components";
import PropTypes from "prop-types";

export const ListWrapper = styled.section`
display: inline-block;
margin: 10px;
`

export const ListTitle = styled.div`
border: 1px solid #E6E6E6;
background: #F5F5F5;
padding: 10px;

h3 {
  margin-left: 10px;
  border-left: 6px solid #009F49;
  padding-left: 10px;
  font-size: 14px;
  color: #414141;
}
`

const ItemWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid #E6E6E6;
padding: 10px;

& > div {
  display: flex;
  align-items: center;
}
`

const ImageWrapper = styled.div`
display: inline-block;
padding: 5px;

& > img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
`

const InfoWrapper = styled.div`
width: 20vw;
display: inline-block;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h5 {
    color: ${props => props.isFinished? '#414141': '#3EB476' }
  }
`

const BtnArrow = styled.button`
margin: 10px;
border: solid #d1d1d1;
border-width: 0 3px 3px 0;
padding: 6px;
background: transparent;
transition: .2s all ease-in;
transform: rotate(-45deg);
-webkit-transform: rotate(-45deg);
cursor: pointer;

&:hover {
  border-color: #ababab;
}
&:focus {
  outline: transparent;
}
`

function ItemInfo({info}) {
  const isFinished = info.status.code === 3 || info.status.code === 4
  return (
    <InfoWrapper isFinished={isFinished}>
      <div>
        <h5>{info.status.type}</h5>
        {!isFinished && <p>預計出貨：{info.date}</p>}
      </div>
      <h4>{info.name}</h4>
    </InfoWrapper>
  )
}

export function ListItem({info}) {
  return (
    <ItemWrapper>
      <div>
        <ImageWrapper><img alt="" src={info.logo}/></ImageWrapper>
        <ItemInfo info={info}/>
      </div>
      <BtnArrow />
    </ItemWrapper>
  )
}

ListItem.propTypes = {
  info: PropTypes.object,
};

ItemInfo.propTypes = {
  info: PropTypes.object,
};
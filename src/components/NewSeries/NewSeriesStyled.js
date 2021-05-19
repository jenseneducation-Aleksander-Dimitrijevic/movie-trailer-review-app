import styled from 'styled-components';
import { HeaderBigPictures } from '../../components/TopRatedBigPictures/TopRatedBigPicturesStyled';
import { TopRatedContainer } from '../../components/TopRated/TopRatedStyled'
import { ColorsGlobal as color } from '../../styles/Colors'
 
export const HeaderNewSeries = styled(HeaderBigPictures)`
text-align:left;
margin-top: 2em;
span {
    margin-left: 10px;
}

`

export const NewSeriesContainer = styled(TopRatedContainer)`
display: flex;
justify-content:center;
grid-template-columns:unset;
`

export const NewSeriesData = styled.div`


img {
    width: 265px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}

aside {
    height: 90px;
    margin-top: -0.4em;
    background: ${color.darkBlue};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 0 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    .title-text {
      color: ${color.white};
      padding-top: 1.4em;
     
    }

    .release-text {
      color: ${color.grayBlue};
    }

    .rating-text {
      color: ${color.grayBlue};
    }
}
`


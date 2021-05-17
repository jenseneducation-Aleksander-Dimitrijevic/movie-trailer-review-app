import {FeedContainer,
        InnerLeft, 
        InnerRight,
        Background, 
        LeftContainer,
        CenterContainer, 
        } from './FeedStyled';
import Dummy from './Dummy';
import Collection from './Collection'; 
import WhoFollow from './WhoFollow';       
import logo from '../../assets/png/star.png';
import max from '../../assets/portrait/max.png';
import elam from '../../assets/portrait/elam.jpg';
import aleks from '../../assets/portrait/aleks.jpg';
import what from  '../../assets/png/what.png';
import mini from  '../../assets/png/mini.png';
import nail from  '../../assets/png/nail.png';




import { useState } from 'react';
import WatchList from './WatchList'



export const Feed = ({useQuery}) => {
    const [watchList , setWatchList] = useState(false);
    const [componentTwo , setSecond] = useState(false);
  
    function setComponent() {
        setWatchList(true)
        setSecond(false)
        };
        
        function secondComponent() {
        setWatchList(false)
        setSecond(true)
    }

 

    return(
        <FeedContainer>
            <section className="content">
            
            <CenterContainer>
            <InnerLeft>
                <img src={logo} alt="star.png"/>
                <span><p>Follow your friends to see what they watch</p></span>
                <div className="inner">
                <Dummy name="Max Aakre" userName="@Maximusprime" imgUrl={max} />
                <Dummy name="Aleksander Dimitrijevic" userName="@MrAl3ksD88" imgUrl={aleks}  />
                <Dummy name="Elam Nabi" userName="@Chupa" imgUrl={elam} />

                </div>
            </InnerLeft>
            <InnerRight  >
            <LeftContainer>
                <h3>Feed</h3>
                <ul>
                    <li onClick={() =>secondComponent()}  className={!watchList ? 'highlight' : ''}>Follow friends</li>
                    <li onClick={() =>setComponent()} className={watchList ? 'highlight' : ''} >Watchlist updates</li>
                </ul>
            </LeftContainer>
                {watchList ?  (
                   <WatchList useQuery={useQuery} />
                    ) :(
                        <Background>
                        <h3>Popular Collection</h3>
                        <Collection name="➕WHAT TO WATCH (LIST)" userName="@Maximusprime" imgUrl={what} />
                        <Collection name="😬 NAIL BITERS" userName="@MrAl3ksD88" imgUrl={mini}  />
                        <Collection name="MINI-ME 🧒👧" userName="@Chupa" imgUrl={nail} />
                        </Background>
                    )
                }
                
                {componentTwo ? (
                        <Background>
                            <h3>Who to follow</h3>
                            <WhoFollow name="Max Aakre" userName="@Maximusprime" imgUrl={max} />
                            <WhoFollow name="Elam Nabi" userName="Chupa" imgUrl={elam} />
                            <WhoFollow name="Aleksander Dimitrijevic" userName="@MrAl3ksD88" imgUrl={aleks}  />
                        </Background>
                    ):null
                }
            </InnerRight>
            </CenterContainer>
           
            </section>
        </FeedContainer>
    )
}
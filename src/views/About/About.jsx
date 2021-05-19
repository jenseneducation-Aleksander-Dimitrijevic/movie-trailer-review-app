import {AboutContainer,Cards} from './AboutStyled';
import max from '../../assets/portrait/max.png';
import elam from '../../assets/portrait/elam.jpg';
import aleks from '../../assets/portrait/aleks.jpg';
import Creators from './Creators';


export const About = () => {
    return (
        <AboutContainer>
            <section className="content">
            <h1>About Watchy</h1>
            <h4>Tired of imdb come to us and get a better experince of discussion and friendchip.</h4>
            <ul>
                <li>Serch across all streaming services to find out where to wach movies and shows in the app.</li>
                <li>Browse all titles from tour selected plan using lots of filters like IMDB raiting</li>
                <li>Track/save movies and shows using the Watchlist and get notified when new episodes or titles are released</li>
                <li>Follow friends with great taste in movies to explore their ratings and title collections</li>
                <li>Get recommendations on what to watch through the community or through our team of knowledgeable editors</li>

            </ul>
            <h3>About the company</h3>
            <h4>This is a examination project for our school. </h4>
            <h4>This product uses the TMDb API but is not endorsed or certified by TMDb.</h4>
            <Cards>
            <Creators name="Elam Nabi" userName="elam@watchy.com" email="elam@watchy.com" imgUrl={elam} />
            <Creators name="Aleksander Dimitrijevic" userName="aleksander@watchy.com" email="aleksander@watchy.com" imgUrl={aleks} />
            <Creators name="Max Aakre" userName="max@watchy.com" email="max@watchy.com" imgUrl={max} />

            </Cards>
            </section>
        </AboutContainer>
    )
}

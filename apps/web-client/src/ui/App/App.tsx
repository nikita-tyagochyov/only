import Grid from '../Grid/Grid';
import Circle from '../Circle/Circle';
import Years from '../Years/Years';
import Header from '../Header/Header';
import Swiper from '../Swiper/Swiper';
import Pages from '../Pages/Pages';

export function App() {
  return (
    <Grid>
      <Circle />
      <Header />
      <Years />
      <Pages />
      <Swiper />
    </Grid>
  );
}

export default App;

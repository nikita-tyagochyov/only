import { Swiper as SwiperLib, SwiperSlide } from 'swiper/react';
import { Navigation, Controller, Pagination } from 'swiper/modules';
import { useMemo } from 'react';
import { observer } from 'mobx-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { root } from '../../model';
import { useMedia, useOpacity } from '../../lib';

import SlideContent from '../SlideContent/SlideContent';

import styles from './Swiper.module.scss';

export const Swiper = observer(function Swiper() {
  const { state, _styles } = useOpacity(root.page.content);
  const matches = useMedia();

  const modules = useMemo(() => {
    const a = [Controller];
    matches ? a.push(Pagination) : a.push(Navigation);
    return a;
  }, [matches]);

  const slidesPerView = useMemo(() => {
    return !matches ? 3 : 1;
  }, [matches]);

  return (
    <SwiperLib
      modules={modules}
      slidesPerView={slidesPerView}
      navigation={!matches}
      pagination={matches}
      className={styles.container}
      style={_styles}
      spaceBetween={50}
    >
      {state.map((item) => (
        <SwiperSlide key={item.year}>
          <SlideContent {...item} />
        </SwiperSlide>
      ))}
    </SwiperLib>
  );
});

export default Swiper;

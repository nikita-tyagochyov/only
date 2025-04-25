import { makeAutoObservable } from 'mobx';

import { type Page, PAGES } from './mock';
import { CSSProperties, Key } from 'react';
import { ButtonProps } from '../ui/Button/Button';

export class RootStore {
  current = 0;

  pages: Page[] = PAGES; // Для mock данных ссылка на исходный массив.

  constructor() {
    makeAutoObservable(this);
  }

  setCurrent: ButtonProps['onClick'] = (event) => {
    this.current = Number(event.currentTarget.dataset.value);
  };

  get page() {
    return this.pages[this.current];
  }

  addZero = (n: number) => {
    return n < 10 ? `0${n}` : n.toString();
  };

  get currentPageView() {
    return `${this.addZero(this.current + 1)}/${this.addZero(
      this.pages.length
    )}`;
  }

  get disbledPageButton() {
    return {
      prev: this.current === 0,
      next: this.current < this.pages.length - 1,
    };
  }

  get years() {
    // В условии не указано сортированный или не сортированный. Предположим что сортирован по годам.
    return {
      first: this.page.content[0].year,
      last: this.page.content[this.page.content.length - 1].year,
    };
  }

  get rotate() {
    return (-360 / this.pages.length) * this.current;
  }

  get circleRotate() {
    return {
      transform: `translate(-50%, -50%) rotate(${this.rotate}deg)`,
    };
  }

  get angleStep() {
    return (2 * Math.PI) / this.pages.length;
  }

  get startAngleRad() {
    return ((-360 / 6) * Math.PI) / 180;
  }

  get circlePoints() {
    const points: { key: Key; style: CSSProperties }[] = [];
    const c = 237;
    const r = 265;

    for (let i = 0; i < this.pages.length; i += 1) {
      const angle = this.startAngleRad + i * this.angleStep;
      points.push({
        key: i,
        style: {
          transform: `rotate(${-this.rotate}deg)`,
          top: c + r * Math.sin(angle),
          left: c + r * Math.cos(angle),
        },
      });
    }
    return points;
  }
}

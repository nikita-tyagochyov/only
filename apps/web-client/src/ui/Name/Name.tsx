import { observer } from 'mobx-react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { root } from '../../model';
import { useOpacity } from '../../lib';

import classes from './Name.module.scss';

export const Name = observer(function Name({
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  const { state, _styles } = useOpacity(root.page.name);

  return (
    <h3 {...props} className={classes.container} style={_styles}>
      {state}
    </h3>
  );
});

export default Name;

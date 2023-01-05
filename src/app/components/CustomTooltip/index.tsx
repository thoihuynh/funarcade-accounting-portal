import React from 'react';
import { Tooltip } from '@mui/material';
import { FONT_WEIGHT_STYLES } from 'styles/variables';

const CustomTooltip = ({ title, children, ...props }) => (
  <Tooltip
    {...props}
    title={title}
    placement="bottom"
    componentsProps={{
      tooltip: {
        sx: {
          fontSize: '1.125rem',
          background: '#ffff',
          borderRadius: '12px',
          padding: '4px 12px',
          fontWeight: FONT_WEIGHT_STYLES.BOLD,
        },
      },
    }}
  >
    {children}
  </Tooltip>
);

export default CustomTooltip;

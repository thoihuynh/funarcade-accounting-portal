import React from 'react';
import { Tooltip } from '@mui/material';

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
          fontWeight: 700,
        },
      },
    }}
  >
    {children}
  </Tooltip>
);

export default CustomTooltip;

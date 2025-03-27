import { IconChartHistogram, IconTableRow } from '@tabler/icons-react';

const titleAreaStyle = 'flex items-center gap-1';
const titleIconStyle = 'w-4';
export const submenuItems: any = [{
  title: <div className={titleAreaStyle}><IconTableRow className={titleIconStyle} />Grid</div>,
  href: 'aggrid/grid',
  isActive: true,
  disabled: false,
}, {
  title: <div className={titleAreaStyle}><IconChartHistogram className={titleIconStyle}/>Chart</div>,
  href: 'aggrid/chart',
  isActive: false,
  disabled: false,
}, ];
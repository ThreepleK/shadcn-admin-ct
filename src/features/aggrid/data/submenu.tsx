import { IconChartHistogram, IconTableRow } from '@tabler/icons-react';

//* 서브 메뉴 구성
interface SmenuItem {
  code: string;       // 메뉴 코드
  icon: any;          // 메뉴 아이콘
  label: string;      // 표기될 이름
  href: string;       // 이동 할 경로
  disabled: boolean;  // 비활성화 여부 (true: 비활성, false: 활성)
}

//* 서브 메뉴
const submenuItems: SmenuItem[] = [{
  code: 'grid',
  icon: IconTableRow,
  label: 'Grid',
  href: '/aggrid/grid',
  disabled: false,
}, {
  code: 'chart',
  icon: IconChartHistogram,
  label: 'Chart',
  href: '/aggrid/chart',
  disabled: false,
}, ];

/**
 * TopNav에서
 * 사용 될 서브메뉴 가져오기
 * @param selectedItem 선택 할 메뉴 코드
 */
export const getSubmenuData = (selectedItem: string = 'grid') => {
  return submenuItems.map((item: any) => {
    const {code, icon: Icon, label, href, disabled} = item;

    return {
      title: <div className='flex items-center gap-1'><Icon className='w-4'/>{label}</div>,
      href,
      isActive: code === selectedItem,
      disabled
    };
  });
}
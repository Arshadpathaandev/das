import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import  MenuItem  from '@app/layouts/menu-sidebar/MenuItem.jsx';
import { Image } from '@profabric/react-components';
import styled from 'styled-components';
import i18n from '@app/utils/i18n';


export const MENU = [
  // {
  //   name: i18n.t('menusidebar.label.dashboard'),
  //   icon: 'fas fa-tachometer-alt nav-icon',
  //   path: '/opd-servicebooking',
  // },
  {
    name: i18n.t('Sidebar.FrontOffice.Registration.Registration'),
    icon: 'fas fa-regular fa-users',
    children: [
      {
        name: i18n.t('Sidebar.FrontOffice.Registration.Register_Modify'),
        icon: 'fas fa-regular fa-user',
        path: '/DirectPatientReg',
      },
      {
        name: i18n.t('Sidebar.FrontOffice.Registration.Patient_Black_List'),
        icon: 'fas fa-regular fa-user',
        path: '/PatientBlackList',
      },
    ],
  },

  {
    name: i18n.t('Sidebar.FrontOffice.OPD.OPD'),
    icon: 'fas fa-regular fa-users',
    children: [
      {
        name: i18n.t('Sidebar.FrontOffice.OPD.OPD_servicebooking'),
        icon: 'fas fa-regular fa-user',
        path: '/opd-servicebooking',
      },
      {
        name: i18n.t('Sidebar.FrontOffice.OPD.Confirmation'),
        icon: 'fas fa-regular fa-user',
        path: '/Confirmation',
      },
      {
        name: i18n.t('Sidebar.FrontOffice.OPD.opd-setellment'),
        icon: 'fas fa-regular fa-user',
        path: '/opd-setellment',
      },
      {
        name: i18n.t('Sidebar.FrontOffice.OPD.opd-refund'),
        icon: 'fas fa-regular fa-user',
        path: '/opd-refund',
      },
      {
        name: i18n.t('Sidebar.FrontOffice.OPD.opd-advance'),
        icon: 'fas fa-regular fa-user',
        path: '/opd-advance',
      }
    ],
  },
  

  {
    name: i18n.t('Sidebar.FrontOffice.Reprint.Reprint'),
    icon: 'fas fa-regular fa-receipt',
    children: [
      {
        name: i18n.t('Sidebar.FrontOffice.Reprint.Receipt-Re-Print'),
        icon: 'fas fa-regular fa-receipt',
        path: '/ReceiptReprint',
      },
    ],
  },
];

const StyledBrandImage = styled(Image)`
  float: left;
  line-height: 0.8;
  margin: -1px 8px 0 6px;
  opacity: 0.8;
  --pf-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23) !important;
`;

const StyledUserImage = styled(Image)`
  --pf-box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b !important;
`;

const MenuSidebar = () => {
  const sidebarSkin = useSelector((state) => state.ui.sidebarSkin);
  const menuItemFlat = useSelector((state) => state.ui.menuItemFlat);
  const menuChildIndent = useSelector((state) => state.ui.menuChildIndent);

  return (
    <aside className={`main-sidebar elevation-4 ${sidebarSkin}`}>
      <Link to="/" className="brand-link">
        <StyledBrandImage
          src="/img/logo.png"
          alt="AdminLTE Logo"
          width={33}
          height={33}
          rounded
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </Link>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <StyledUserImage
              // src={authentication?.profile.picture}
              fallbackSrc="/img/default-profile.png"
              alt="User"
              width={34}
              height={34}
              rounded
            />
          </div>
          <div className="info">
            <Link to="/profile" className="d-block">
              {/* {authentication?.profile.email} */}
            <span>priyam12@gmail.com</span>
            </Link>
          </div>
         
        </div>
        

     

        <nav className="mt-2">
          <ul
            className={`nav nav-pills nav-sidebar flex-column${
              menuItemFlat ? ' nav-flat' : ''
            }${menuChildIndent ? ' nav-child-indent' : ''}`}
            role="menu"
          >
            {MENU.map((menuItem) => (
              <MenuItem
                key={menuItem.name + menuItem.path}
                menuItem={menuItem}
              />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default MenuSidebar;

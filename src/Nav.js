import React from "react";
import { useLocation } from "react-router-dom";
import {
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SideNav,
  SideNavItems,
  SideNavLink,
} from "@carbon/react";

const Nav = () => {
  const location = useLocation(); // Get the current URL path

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="Portfolio Navigation">
            <HeaderMenuButton
              aria-label="Open menu"
              isActive={isSideNavExpanded}
              onClick={onClickSideNavExpand}
            />
            <HeaderName href="/" prefix="Carlo McGinley"></HeaderName>
            <HeaderNavigation aria-label="Portfolio Navigation">
              <HeaderMenuItem
                href="/"
                isActive={location.pathname === "/"}
              >
                About Me
              </HeaderMenuItem>
              <HeaderMenuItem
                href="/Experience"
                isActive={location.pathname === "/Experience"}
              >
                Experience
              </HeaderMenuItem>
              <HeaderMenuItem
                href="/Education"
                isActive={location.pathname === "/Education"}
              >
                Education
              </HeaderMenuItem>
              <HeaderMenuItem
                href="/Projects"
                isActive={location.pathname === "/Projects"}
              >
                Projects
              </HeaderMenuItem>
              <HeaderMenuItem
                href="/ContactMe"
                isActive={location.pathname === "/ContactMe"}
              >
                Contact Me
              </HeaderMenuItem>
            </HeaderNavigation>
          </Header>
          <SideNav
            isPersistent={false}
            expanded={isSideNavExpanded}
            aria-label="Side Navigation"
          >
            <SideNavItems>
              <SideNavLink
                href="/"
                isActive={location.pathname === "/"}
              >
                About Me
              </SideNavLink>
              <SideNavLink
                href="/Experience"
                isActive={location.pathname === "/Experience"}
              >
                Experience
              </SideNavLink>
              <SideNavLink
                href="/Education"
                isActive={location.pathname === "/Education"}
              >
                Education
              </SideNavLink>
              <SideNavLink
                href="/Projects"
                isActive={location.pathname === "/Projects"}
              >
                Projects
              </SideNavLink>
              <SideNavLink
                href="/ContactMe"
                isActive={location.pathname === "/ContactMe"}
              >
                Contact Me
              </SideNavLink>
            </SideNavItems>
          </SideNav>
        </>
      )}
    />
  );
};

export default Nav;

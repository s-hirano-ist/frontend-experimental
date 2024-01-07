"use client";
import {
  Science as ScienceIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState, MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { colorSchemeContext } from "@/common/stores/colorSchemeContext";

const EXPERIMENTAL_PAGES: { title: string; href: string; disabled: boolean }[] =
  [
    {
      title: "No Auth Page",
      href: "/experimental/no-auth",
      disabled: false,
    },
    {
      title: "Plain GraphQL CSR",
      href: "/experimental/plain-graphql-csr",
      disabled: false,
    },
    {
      title: "Plain GraphQL SSR",
      href: "/experimental/plain-graphql-ssr",
      disabled: true,
    },
    {
      title: "Plain REST OpenAPI CSR",
      href: "/experimental/plain-rest-csr",
      disabled: false,
    },
    {
      title: "Plain REST OpenAPI SSR",
      href: "/experimental/plain-rest-ssr",
      disabled: true,
    },
    {
      title: "Self GraphQL SSR",
      href: "/experimental/self-graphql-ssr",
      disabled: false,
    },
    {
      title: "Self Prisma CSR",
      href: "/experimental/self-prisma-csr",
      disabled: true,
    },
    {
      title: "Self Prisma SSR",
      href: "/experimental/self-prisma-ssr",
      disabled: false,
    },
    {
      title: "client side session",
      href: "/experimental/session-client",
      disabled: false,
    },
    {
      title: "server side session",
      href: "/experimental/session-server",
      disabled: false,
    },
    {
      title: "Typesafe GraphQL CSR",
      href: "/experimental/typesafe-graphql-csr",
      disabled: false,
    },
    {
      title: "Typesafe REST OpenAPI CSR",
      href: "/experimental/typesafe-rest-csr",
      disabled: false,
    },
    {
      title: "Typesafe GraphQL SSR",
      href: "/experimental/typesafe-graphql-ssr",
      disabled: true,
    },
    {
      title: "gRPC",
      href: "/experimental/g-rpc",
      disabled: true,
    },
    {
      title: "tRPC CSR",
      href: "/experimental/t-rpc-csr",
      disabled: true,
    },
    {
      title: "tRPC SSR",
      href: "/experimental/t-rpc-ssr",
      disabled: true,
    },
  ];

const Header = ({ title }: { title: string }) => {
  const [colorScheme, setColorScheme] = useRecoilState(colorSchemeContext);

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { status } = useSession();

  return (
    <>
      <AppBar position="static">
        <Box
          display="flex"
          alignItems="end"
          justifyContent="space-between"
          bgcolor="primary.main">
          <Link href="/">
            <Typography
              variant="subtitle1"
              color="white"
              textAlign="center"
              mt={2}
              mx={2}
              mb={1}>
              {title}
            </Typography>
          </Link>

          {status !== "loading" && (
            <Box>
              <Grid container direction="row" spacing={1}>
                {status === "authenticated" && (
                  <>
                    <IconButton
                      id="basic-button"
                      aria-controls={menuOpen ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={menuOpen ? "true" : undefined}
                      onClick={handleClick}>
                      <ScienceIcon color="secondary" />
                    </IconButton>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={menuOpen}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}>
                      {EXPERIMENTAL_PAGES.map(page => {
                        if (page.disabled) {
                          return (
                            <MenuItem
                              onClick={handleClose}
                              disabled={true}
                              key={page.href}>
                              {page.title}
                            </MenuItem>
                          );
                        } else {
                          return (
                            <Link href={page.href} key={page.href}>
                              <MenuItem onClick={handleClose} disabled={false}>
                                {page.title}
                              </MenuItem>
                            </Link>
                          );
                        }
                      })}
                    </Menu>
                  </>
                )}
                {colorScheme === "light" ? (
                  <IconButton onClick={toggleColorScheme}>
                    <LightModeIcon color="secondary" />
                  </IconButton>
                ) : (
                  <IconButton onClick={toggleColorScheme}>
                    <DarkModeIcon color="secondary" />
                  </IconButton>
                )}
                {status === "authenticated" ? (
                  <Link href="/api/auth/signout">
                    <IconButton>
                      <LogoutIcon color="secondary" />
                    </IconButton>
                  </Link>
                ) : (
                  <Link href="/api/auth/signin">
                    <IconButton>
                      <LoginIcon color="secondary" />
                    </IconButton>
                  </Link>
                )}
              </Grid>
            </Box>
          )}
        </Box>
      </AppBar>
    </>
  );
};

export default Header;

import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Divider from "@mui/material/Divider";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export const MyBreadcrums = ({ pageName, breadcrumsArray }) => {
  console.log("point2", breadcrumsArray);
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Pages
    </Link>,
    <Typography key="3" color="text.primary" style={{ opacity: 0.5 }}>
      Knowledge Base
    </Typography>,
  ];

  return (
    <>
      <h2 className="u-opacity-0-5"> {pageName}</h2>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        style={{ margin: "12px 12px" }}
      />

      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        style={{ color: "rgb(115, 103, 240)" }}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </>
  );
};

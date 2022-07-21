import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CircleIcon from "@mui/icons-material/Circle";

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(2),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: "var(--tree-view-color)",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));
function StyledTreeItem(props) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;
  const [selectedLabelTextArray, setSelectedLabelTextArray] = React.useState(
    []
  );
  React.useState(() => {
    if (selectedLabelTextArray.indexOf(labelText) === -1) {
      setSelectedLabelTextArray((arr) => arr.push(labelText));
    }
    other.getLabelTextArray(selectedLabelTextArray);
    console.log(selectedLabelTextArray);
  }, [props]);

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
          <Box component={LabelIcon} color="inherit" sx={{ ml: 0, pl: 0 }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "inherit",
              flexGrow: 1,
              textAlign: "left",
              marginLeft: "12px",
            }}
          >
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor,
      }}
      {...other}
    />
  );
}

const smallDot = (props) => {
  return <CircleIcon sx={{ fontSize: 12 }} />;
};

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

export const MyTreeview = ({ getBreadcrumsArray }) => {
  // React.useEffect(() => {
  //   setSelectedLabelTextArray(arr);
  //   getBreadcrumsArray(selectedLabelTextArray);
  // }, [arr]);

  const getLabelTextArray = (labelTextArray) => {
    getBreadcrumsArray(getBreadcrumsArray);
  };

  return (
    <TreeView
      aria-label="tree"
      // defaultExpanded={["3"]}
      // defaultCollapseIcon={<ArrowDropDownIcon />}
      // defaultExpandIcon={<ArrowRightIcon />}
      // defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      <StyledTreeItem
        nodeId="3"
        labelText="Pages"
        labelIcon={DescriptionOutlinedIcon}
        labelInfo={<ArrowDropDownIcon />}
        style={{ margin: "4px 0 0 -16px", alignItems: "center" }}
        getLabelTextArray={getLabelTextArray}
      >
        <StyledTreeItem
          nodeId="5"
          labelText="Knowledge Base"
          labelIcon={smallDot}
          color="#1a73e8"
          bgColor="#e8f0fe"
          getLabelTextArray={getLabelTextArray}
        />
      </StyledTreeItem>
    </TreeView>
  );
};

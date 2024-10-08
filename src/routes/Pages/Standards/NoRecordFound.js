import React from 'react';
import { Box } from '@material-ui/core';
import CmtImage from '../../../@coremat/CmtImage';
import makeStyles from '@material-ui/core/styles/makeStyles';
const searchFilter = '/images/icons/search-contact.png';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  emptyTitle: {
    fontSize: 16,
    color: theme.palette.text.disabled,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
    },
  },
}));

const NoRecordFound = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box mb={{ xs: 4, lg: 6 }}>
        <CmtImage src={searchFilter} alt="Empty Standards" />
      </Box>
      <p className={classes.emptyTitle}>{children}</p>
    </Box>
  );
};

export default NoRecordFound;

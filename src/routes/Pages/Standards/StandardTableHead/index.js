import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import PropTypes from 'prop-types';
import React from 'react';
import IntlMessages from '@jumbo/utils/IntlMessages';

const headCells = [
  {
    id: 'stdCode',
    numeric: false,
    disablePadding: true,
    label: <IntlMessages id="standards.appModule.codeHeader" />,
  },
  {
    id: 'stdName',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="standards.appModule.nameHeader" />,
  },
  {
    id: 'stdBuName',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="standards.appModule.businessUnitHeader" />,
  },
  {
    id: 'stdOrgDescription',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="standards.appModule.organizationHeader" />,
  },
  {
    id: 'stdPurcDescription',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="standards.appModule.purchaseAreaHeader" />,
  },
  {
    id: 'stdYear',
    numeric: true,
    disablePadding: false,
    label: <IntlMessages id="standards.appModule.yearHeader" />,
  },
  {
    id: 'stdVersion',
    numeric: true,
    disablePadding: false,
    label: <IntlMessages id="standards.appModule.versionHeader" />,
  },
  {
    id: 'stdStatus',
    numeric: false,
    disablePadding: false,
    label: <IntlMessages id="standards.appModule.statusHeader" />,
  },
];

function UserTableHead({ classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort }) {
  const onSortOrderChange = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={onSortOrderChange(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? (
                    <IntlMessages id="users.appModule.orderDesc" />
                  ) : (
                    <IntlMessages id="users.appModule.orderAsc" />
                  )}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="center">{<IntlMessages id="users.appModule.actions" />}</TableCell>
      </TableRow>
    </TableHead>
  );
}

UserTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default React.memo(UserTableHead);

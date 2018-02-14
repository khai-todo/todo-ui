import {Fragment} from 'react'
import MuiTypography from 'material-ui-next/Typography'
import MuiList, * as muiList from 'material-ui-next/List'
import Collapse from 'material-ui-next/transitions/Collapse'
import {baseProto, id as idComp} from '../utils'

export const Typography = idComp(MuiTypography)

export const ExpandableListItem = ({
  children,
  expanded = false,
  items = [],
  onClick = () => {},
  muiComponent = 'nav',
  muiSubheader = null
}) => {
  const onClickTitle = event =>
    onClick(baseProto(event, {target, expanded}))

  const target = <Fragment>
    <muiList.ListItem button onClick={onClickTitle}>
      <muiList.ListItemText inset>
        {children}
      </muiList.ListItemText>
    </muiList.ListItem>
    <Collapse in={expanded}>
      <MuiList component={muiComponent} subheader={muiSubheader}>{
        items.map((x, i) =>
          <muiList.ListItem key={i}>
            <muiList.ListItemText inset>
              {x}
            </muiList.ListItemText>
          </muiList.ListItem>
        )
      }</MuiList>
    </Collapse>
  </Fragment>

  return target
}

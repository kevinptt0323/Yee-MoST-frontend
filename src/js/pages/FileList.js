import React from 'react';
import { Link } from 'react-router'
import { Paper, IconButton } from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter} from 'material-ui/Table';

import FileDownload from 'material-ui/svg-icons/file/file-download';
import Search from 'material-ui/svg-icons/action/search';
import NavLeft from 'material-ui/svg-icons/navigation/chevron-left';
import NavRight from 'material-ui/svg-icons/navigation/chevron-right';

import request from 'superagent';
import superagent_prefix from 'superagent-prefix';
import { SERVER_HOST } from '../config';

const ROWS_PER_PAGE = 10;
const prefix = superagent_prefix(SERVER_HOST);

class FileList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lists: [] };
    this.loadData();
  }
  loadData() {
    request.get('/api/data')
      .use(prefix)
      .set('Authorization', `Bearer ${this.props.getToken()}`)
      .accept('json')
      .end((err, res) => {
        if( err ) {
          console.error(res);
          console.error(err);
          if( res.status == 401 || res.status == 400 ) {
            this.props.login();
          }
        } else {
          this.setState({ lists: res.body.data });
        }
      });

  }
  render() {
    const { lists } = this.state;
    const maxPage = (((lists.length-1)/ROWS_PER_PAGE)|0)+1;
    let { page = 1 } = this.props.location.query;
    page = parseInt(page);
    const table_rows = lists.slice((page-1)*ROWS_PER_PAGE, page*ROWS_PER_PAGE).map(file => (
      <TableRow key={file.id}>
        <TableRowColumn>{file.id}</TableRowColumn>
        <TableRowColumn>{file.filename}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(file.metadata)}</TableRowColumn>
        <TableRowColumn>{file.created_at}</TableRowColumn>
        <TableRowColumn>{file.updated_at}</TableRowColumn>
        <TableRowColumn>{<Link to={`/files/${file.filename}`}><IconButton><Search /></IconButton></Link>}</TableRowColumn>
        <TableRowColumn>{
          <a href={HOST + `/api/data/${file.filename}/raw?token=${this.props.getToken()}`}><IconButton><FileDownload /></IconButton></a>
        }</TableRowColumn>
      </TableRow>
    ));
    const navLeft =
      page>1 ? (
        <Link to={{ pathname: '/files', query: {page: page-1} }}><IconButton><NavLeft /></IconButton></Link>
      ) : (
        <IconButton disabled={true}><NavLeft /></IconButton>
      );
    const navRight =
      page<maxPage ? (
        <Link to={{ pathname: '/files', query: {page: page+1} }}><IconButton><NavRight /></IconButton></Link>
      ) : (
        <IconButton disabled={true}><NavRight /></IconButton>
      );
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>id</TableHeaderColumn>
            <TableHeaderColumn>filename</TableHeaderColumn>
            <TableHeaderColumn>metadata</TableHeaderColumn>
            <TableHeaderColumn>created_at</TableHeaderColumn>
            <TableHeaderColumn>updated_at</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody preScanRows={false}>
          { table_rows }
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableRowColumn colSpan="7" style={{textAlign: 'right'}}>
              { navLeft }
              <span style={{ display: 'inline-block', lineHeight: '48px', verticalAlign: 'top' }}>{`${page} / ${maxPage}`}</span>
              { navRight }
            </TableRowColumn>
          </TableRow>
        </TableFooter>
      </Table>
    );
  }
}

export default FileList;

import React from 'react';
import { Link } from 'react-router'
import { Paper, IconButton } from 'material-ui';
import FileDownload from 'material-ui/svg-icons/file/file-download';
import Search from 'material-ui/svg-icons/action/search';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import request from 'superagent';
import superagent_prefix from 'superagent-prefix';

const prefix = superagent_prefix('http://cswwwdev.cs.nctu.edu.tw:7122');

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
          console.error(err);
        } else {
          this.setState({ lists: res.body.data });
        }
      });

  }
  render() {
    let table_rows = this.state.lists.map(file => (
      <TableRow key={file.id}>
        <TableRowColumn>{file.id}</TableRowColumn>
        <TableRowColumn>{file.filename}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(file.metadata)}</TableRowColumn>
        <TableRowColumn>{file.created_at}</TableRowColumn>
        <TableRowColumn>{file.updated_at}</TableRowColumn>
        <TableRowColumn>{<Link to={`/show/${file.filename}`}><IconButton><Search /></IconButton></Link>}</TableRowColumn>
        <TableRowColumn>{<IconButton><FileDownload /></IconButton>}</TableRowColumn>
      </TableRow>
    ));
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
      </Table>
    );
  }
}

export default FileList;

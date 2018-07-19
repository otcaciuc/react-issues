import React, { Component } from "react";
import { connect } from 'react-redux';
import { Table } from "semantic-ui-react";
import * as actions from '../redux/actions/Issues.actions';

import IssuesListHeader from "./IssuesListHeader";
import IssuesListRow from "./IssuesListRow";

class IssuesList extends Component {
    componentDidMount = () => this.props._readIssues();

    render = () => {
        const issues = this.props.issues || [];
        const issueRows = issues.map(issueID => (
            <IssuesListRow
                issueID={issueID.id}
                key={issueID.id}
            />
        ));

        return (
            <Table celled>
                <IssuesListHeader />
                <Table.Body>
                    {issueRows}
                </Table.Body>
            </Table>
        )
    }
}

const mapStateToProps = (state) => ({
    issues: state.issues
});

const mapDispatchToProps = (dispatch) => ({
    _readIssues: () => dispatch(actions.readIssues())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IssuesList);

import React from "react";
import { connect } from "react-redux";
import { Table, Label } from "semantic-ui-react";

const mapState = (state, ownProps) => {
    const { issues } = state;
    const issue = issues.find(obj => obj.id === ownProps.issueID)

    return { issue };
}

const IssuesListRow = ({ issue = {} }) => {
    const {
        number = "",
        title = "",
        created_at = "",
        updated_at = "",
        state = ""
    } = issue;

    const createdDate = new Date(created_at).toLocaleDateString();
    const updatedDate = new Date(updated_at).toLocaleDateString();

    const issueLabels = issue.labels.map(label => (
        <Label key={label.name}>
            {label.name}
        </Label>
    ));

    return (
        <Table.Row>
            <Table.Cell>
                {number}
            </Table.Cell>
            <Table.Cell>
                {title}
            </Table.Cell>
            <Table.Cell>
                {createdDate}
            </Table.Cell>
            <Table.Cell>
                {updatedDate}
            </Table.Cell>
            <Table.Cell>
                {issueLabels}
            </Table.Cell>
            <Table.Cell>
                {state}
            </Table.Cell>
        </Table.Row>
    );
}

export default connect(mapState)(IssuesListRow);

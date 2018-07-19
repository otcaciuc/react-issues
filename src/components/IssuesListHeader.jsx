import React from "react";
import { Table } from "semantic-ui-react";

const IssuesListHeader = () => (
    <Table.Header>
        <Table.Row>
            <Table.HeaderCell width={2}>
                Issue Number
            </Table.HeaderCell>
            <Table.HeaderCell width={5}>
                Title
            </Table.HeaderCell>
            <Table.HeaderCell width={2}>
                Created At
            </Table.HeaderCell>
            <Table.HeaderCell width={2}>
                Updated At
            </Table.HeaderCell>
            <Table.HeaderCell width={3}>
                Labels
            </Table.HeaderCell>
            <Table.HeaderCell width={1}>
                State
            </Table.HeaderCell>
        </Table.Row>
    </Table.Header>
);

export default IssuesListHeader;

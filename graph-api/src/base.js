const Base = `
type Query {
    dummy: Boolean
}
type Mutation {
    dummy: Boolean
}
scalar Url
`;

export default () => [Base];
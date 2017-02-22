import Relay from 'react-relay';

export class CreateLinkMutation extends Relay.Mutation {
  getConfigs() {
    return [{
      type: 'RANGE_ADD',
      parentName: 'store',
      parentID: this.props.store.id,
      connectionName: 'link',
      edgeName: 'linkEdge',
      rangeBehaviors: {
        '': 'append'
      }
    }];
  }

  getFatQuery() {
    return Relay.QL`fragment on CreateLinkPayload {
      linkEdge,
      store {
        links
      }
    }`
  }

  getMutation() {
    return Relay.QL`mutation { 
      createLink 
    }`
  }

  getVariables() {
    return {
      title: this.props.title,
      url: this.props.url
    }
  }
}

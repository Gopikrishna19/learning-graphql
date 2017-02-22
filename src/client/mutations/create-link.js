import Relay from 'react-relay';

export class CreateLinkMutation extends Relay.Mutation {
  getConfigs() {
    return [{
      type: 'RANGE_ADD',
      parentName: 'store',
      parentID: this.props.store.id,
      connectionName: 'link',
      edgeName: 'link',
      rangeBehaviors: {
        '': 'append'
      }
    }];
  }

  getFatQuery() {
    return Relay.QL`fragment on CreateLinkPayload {
      link,
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

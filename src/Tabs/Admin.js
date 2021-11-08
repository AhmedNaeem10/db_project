import React, {Component} from 'react';
import jsonServerProvider from 'ra-data-json-server';
import {UserList, UserEdit, UserCreate} from "../components/users";
import restProvider from 'ra-data-simple-rest';
import { Admin, Resource, fetchUtils } from 'react-admin';

// const fetchJson = (url, options = {}) => {
//   if (!options.headers) {
//       options.headers = new Headers({ Accept: 'application/json' });
//   }
//   // add your own headers here
//   options.headers.set('X-Custom-Header', 'foobar');
//   return fetchUtils.fetchJson(url, options);
// }

const dataProvider = jsonServerProvider('http://localhost:4400');

class AdminPanel extends Component {
  render(){
   return (
       <Admin dataProvider={dataProvider}>
           <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}/>
           {/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/> */}
       </Admin>
   );
  }
}

export default AdminPanel;
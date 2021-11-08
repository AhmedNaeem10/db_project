import React from 'react';
import {List,
    TextInput,
    SimpleForm,
    Edit,
    Create,
    ReferenceInput,
    SelectInput,
    Datagrid,
    ReferenceField,
    TextField,
    EmailField,
    EditButton,
    DeleteButton,
    EditGuesser} from 'react-admin';

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
           <TextInput source="id"/>
           <TextInput source="userName"/>
           <TextInput source="password"/>
           <TextInput source="email"/>
           <TextInput source="phone"/>
        </SimpleForm>
    </Edit>
 );
 
 export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
           <TextInput source="id"/>
           <TextInput source="userName"/>
           <TextInput source="password"/>
           <TextInput source="email"/>
           <TextInput source="phone"/>
        </SimpleForm>
    </Create>
 );
export const UserList = props => (
   <List {...props}>
       <Datagrid rowClick="edit">
           <TextField source="id" />
           <TextField source="userName" />
           <TextField source="password" />
           <EmailField source="email" />
           <TextField source="phone" />
           <EditButton />
           <DeleteButton />
       </Datagrid>
   </List>
);
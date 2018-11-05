import React from 'react';

export default {
  navbarItems: [
    {text: 'Main', href: '/'},
    {text: 'Posts', href: '/posts'},
    {text: 'Comments', href: '/comments'},
    {text: 'Users', href: '/users'},
  ],

  sidebarContent: {
    header: {
      title: 'Sidebar header',
      text: 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    },
  
    archives: {
      name: 'Archives',
      items: [
        {text: 'October 2018', href: '#'},
        {text: 'September 2018', href: '#'},
        {text: 'August 2018', href: '#'},
        {text: 'July 2018', href: '#'},
        {text: 'June 2018', href: '#'},
        {text: 'May 2018', href: '#'},
        {text: 'April 2018', href: '#'},
        {text: 'March 2018', href: '#'},
        {text: 'February 2018', href: '#'},
        {text: 'January 2018', href: '#'},
      ],
    },
  
    elsewhere: {
      name: 'Elsewhere',
      items: [
        {text: 'GitHub', href: '#'},
        {text: 'Twitter', href: '#'},
        {text: 'Facebook', href: '#'},
      ],
    },
  },
}
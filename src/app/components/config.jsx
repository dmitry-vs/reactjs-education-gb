import React from 'react';

export default {
  header: {
    subscribeLink: {
      text: 'Subscribe Link',
      href: '#',
    },
    centerText: 'Center Text',
    searchLink: '#',
    signupButton: {
      text: 'Sign Up Button',
    },
  },
  
  navbarItems: [
    {text: 'NavItem 1', href: '#'},
    {text: 'NavItem 2', href: '#'},
    {text: 'NavItem 3', href: '#'},
    {text: 'NavItem 4', href: '#'},
    {text: 'NavItem 5', href: '#'},
    {text: 'NavItem 6', href: '#'},
    {text: 'NavItem 7', href: '#'},
    {text: 'NavItem 8', href: '#'},
  ],

  modal: {
    title: 'Sign up',
    emailPlaceholder: 'Enter your email',
    passwordPlaceholder: 'Enter your password',
    buttonCloseText: 'Close',
    buttonSubmitText: 'Create account',
  },

  postsBlockHeadline: 'Posts Block Headline',

  posts: [
    {
      title: 'Test post 1 title',
      date: '2018-10-29T14:10:15.404Z',
      author: 'TestAuthor 1',
      content: 'Test post 1 content Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde hic illo! Assumenda ad, ipsum dolorem laboriosam magni recusandae quae sed necessitatibus sapiente, eveniet amet delectus sequi? Voluptatem vel ullam possimus? Consequuntur sed eos laborum, sapiente nulla placeat veritatis sequi, atque iste quae laboriosam quas minus officiis quaerat, error alias?',
    },
    {
      title: 'Test post 2 title',
      date: '2018-10-29T14:10:35.403Z',
      author: 'TestAuthor 2',
      content: 'Test post 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde hic illo! Assumenda ad, ipsum dolorem laboriosam magni recusandae quae sed necessitatibus sapiente, eveniet amet delectus sequi? Voluptatem vel ullam possimus? Consequuntur sed eos laborum, sapiente nulla placeat veritatis sequi, atque iste quae laboriosam quas minus officiis quaerat, error alias?',
    },
    {
      title: 'Test post 3 title',
      date: '2018-10-29T14:10:42.698Z',
      author: 'TestAuthor 3',
      content: 'Test post 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde hic illo! Assumenda ad, ipsum dolorem laboriosam magni recusandae quae sed necessitatibus sapiente, eveniet amet delectus sequi? Voluptatem vel ullam possimus? Consequuntur sed eos laborum, sapiente nulla placeat veritatis sequi, atque iste quae laboriosam quas minus officiis quaerat, error alias?',
    },
    {
      title: 'Test post 4 title',
      date: '2018-10-29T14:10:50.251Z',
      author: 'TestAuthor 4',
      content: 'Test post 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde hic illo! Assumenda ad, ipsum dolorem laboriosam magni recusandae quae sed necessitatibus sapiente, eveniet amet delectus sequi? Voluptatem vel ullam possimus? Consequuntur sed eos laborum, sapiente nulla placeat veritatis sequi, atque iste quae laboriosam quas minus officiis quaerat, error alias?',
    },
  ],

  blogPagination: {
    older: {
      href: '#',
      text: 'Older',
    },
    newer: {
      href: '#',
      text: 'Newer',
    },
  },

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

  footerContent: <div><p>Footer content</p><p><a href="#">Back to top</a></p></div>,
}
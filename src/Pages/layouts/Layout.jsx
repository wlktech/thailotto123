import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import './Layout.css';

export default function Layout() {
  return (
    <>
    <Nav />
    <Outlet />
    </>
  )
}

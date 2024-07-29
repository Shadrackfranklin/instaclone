import React from 'react'


/* this main layout page is used helps provide a structure to every page 
it is like the base .html in django
changes in this can be seen throught out all pages mentioned inside it
*/

export default function BaseLayout({children}) {
  return (
    <div>{children}</div>
  )
}

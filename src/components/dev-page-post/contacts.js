import React from 'react'
import styled from 'styled-components'

import Contact from './contact'
import { DevPageHeading } from './index'

import vars from '../../vars'

const ContactRow = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: repeat(auto-fit, minmax(21rem, 0.35fr));
  }
`

const Contacts = ({ contacts, projectManager }) => {
  const projectMangerEmails = {
    'Chris Edwards': 'cedwards@elykinnovation.com',
    'Joe Lemire': 'jlemire@elykinnovation.com',
    'Jacob Jerris': 'jjerris@elykinnovation.com',
    'Barry Morrow': 'bmorrow@elykinnovation.com',
  }
  return (
    <>
      <DevPageHeading>Contact Information</DevPageHeading>
      <ContactRow>
        {contacts &&
          contacts.length > 0 &&
          contacts.map(contact => <Contact key={contact.name} {...contact} />)}
        {projectManager.length > 0 &&
          projectManager.map((manager, managerIndex) => (
            <Contact
              key={`${manager}_${managerIndex}`}
              company="Elyk Innovation"
              emailAddress={projectMangerEmails[manager]}
              name={manager}
              officePhone="(904) 998-1935"
            />
          ))}
      </ContactRow>
    </>
  )
}

export default Contacts

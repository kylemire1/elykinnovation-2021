import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'
import { Link } from 'gatsby'
import { rgba } from 'polished'

import vars from '../vars'
import { stripAnchorTags } from '../utils/stripHtml'

const StyledPostItem = styled.li`
  color: ${vars.colorAlmostBlack};
  border: solid ${vars.pixel};
  border-color: ${rgba(vars.colorGreen, 0)};
  border-radius: ${vars.borderRadiusLarge};
  transition: border-color 250ms ${vars.ease};
  padding: 1.5em 2em;

  a {
    color: currentColor;
  }

  :focus,
  :hover,
  :focus-within {
    border-color: ${rgba(vars.colorGreen, 1)};
    transition: border-color 250ms ${vars.ease};
  }
`

const PostHeader = styled.header`
  h2 {
    color: ${vars.colorGreen};
  }
`
const PostExcerpt = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;

  p:last-child {
    margin-bottom: 0;
  }
`

const PostDate = styled.small`
  display: block;
  margin-bottom: 0.5rem;
`

const PostItem = ({ uri, title, date, acfPostFields }) => {
  const [excerpt, setExcerpt] = useState(null)

  useEffect(() => {
    if (!excerpt && acfPostFields) {
      setExcerpt(
        stripAnchorTags(acfPostFields?.launchAnnouncementFields?.excerpt)
      )
    }
  }, [excerpt, acfPostFields])

  return (
    <StyledPostItem key={uri}>
      <article
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Link to={uri} itemProp="url">
          <PostHeader>
            <h2>
              <span itemProp="headline">{title && parse(title)}</span>
            </h2>
            <PostDate>{date}</PostDate>
          </PostHeader>
          <PostExcerpt itemProp="description">
            {excerpt && parse(excerpt)}
          </PostExcerpt>
        </Link>
      </article>
    </StyledPostItem>
  )
}

export default PostItem

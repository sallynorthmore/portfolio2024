import * as React from 'react'
import { Link } from 'gatsby'
import * as S from './styles'

const ProjectGrid = ({ items }) => {

  return (
    <S.Items>
      {items.map(node => (
          <S.Item key={node.id}>

              <S.Thumbnail src={node.frontmatter.thumbnail}  alt={`${node.frontmatter.title} thumbnail` } />
              <S.GridLink to={`/${node.frontmatter.slug}`} title={`${node.frontmatter.title} ${node.frontmatter.date}` } >
              <S.Title>{node.frontmatter.title}</S.Title>
							<S.Subtitle>{node.frontmatter.date}</S.Subtitle>
              </S.GridLink>
          </S.Item>
    ))
      } </S.Items>
  )
}

export default ProjectGrid

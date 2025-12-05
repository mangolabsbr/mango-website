'use client'

import { Repository } from "@/types/github"
import './style.css'
import { FiStar } from "react-icons/fi"
import { GoRepoForked } from "react-icons/go"

type Props = {
  repository: Repository,
  className?: string
}

const RepositoryCard = ({ className, repository }: Props) => {

  return (
    <a href={repository.html_url} target="_blank" className={`flex flex-col repository-card rounded-md border-2 border-black shadow-2 bg-white py-2 px-3 active:shadow-none relative active:top-0.5 active:left-0.5 focus-visible:outline -outline-offset-2 ${className || ''}`}>
      <h3 className="font-serif font-medium text-orange-900">{repository.name}</h3>
      <p className="text-sm mb-4 grow">{repository.description}</p>
      <div className="text-neutral-500 text-sm space-x-4 flex items-center">
        <span className="inline-block">{repository.language}</span>
        {repository.stargazers_count > 0 && (
          <span className="inline-flex items-center space-x-1">
            <FiStar className="inline-block" />
            <span className="inline-block">{repository.stargazers_count}</span>
          </span>
        )}
        {repository.forks_count > 0 && (
          <span className="inline-flex items-center space-x-1">
            <GoRepoForked className="inline-block" />
            <span className="inline-block">{repository.forks_count}</span>
          </span>
        )}
      </div>
    </a>
  )
}

export default RepositoryCard

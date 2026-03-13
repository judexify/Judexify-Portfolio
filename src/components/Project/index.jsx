import './index.css'
import projects from './project.json'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Project() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(function () {
    setInterval(() => setIsLoading(false), 500)
  }, [])

  return (
    <>
      <div className=" project-page">
        <div className="text-zone">
          <h1>Projects</h1>
        </div>
        <ProjectsDone projects={projects} />
      </div>
      {isLoading && <div className="loader" />}
    </>
  )
}

function ProjectsDone({ projects }) {
  const [selectedId, setSelectedId] = useState(0)

  const selectedProj = projects.find((p) => p.id === selectedId)

  return (
    <div className="projects-wrapper">
      {projects.map((proj) => (
        <div
          className="project-card"
          key={proj.id}
          onClick={() => setSelectedId(proj.id)}
        >
          <div className="project-card__body">
            <span className="project-card__index">0{proj.id}</span>
            <h3 className="project-card__title">{proj.title}</h3>
            <div className="project-card__stack">
              {proj.tags?.map((tech) => (
                <span key={tech} className="project-card__tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="project-card__actions">
            {proj.github && (
              <a
                href={proj.github}
                target="_blank"
                rel="noreferrer"
                className="project-card__link"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
            {proj.url && (
              <a
                href={proj.url}
                target="_blank"
                rel="noreferrer"
                className="project-card__link"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            )}
            <span className="project-card__hint">Tap the card to see more >>> </span>
          </div>
        </div>
      ))}

      {selectedProj && (
        <Modal project={selectedProj} onClose={() => setSelectedId(null)} />
      )}
    </div>
  )
}

function Modal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          ✕
        </button>

        {project.tagline && (
          <span className="modal__tagline">{project.tagline}</span>
        )}

        <h3>{project.title}</h3>

        {project.highlights?.length > 0 && (
          <ul className="modal__highlights">
            {project.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}

        {project.challenge && (
          <div className="modal__challenge">
            <span className="modal__challenge-label">Challenge</span>
            <p>{project.challenge}</p>
          </div>
        )}

        <div className="modal__footer">
          <div className="modal__tags">
            {project.tags?.map((tech) => (
              <span key={tech} className="project-card__tag">
                {tech}
              </span>
            ))}
          </div>
          <div className="modal__actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="modal__link"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="modal__link"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

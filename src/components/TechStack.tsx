interface TechStackProps {
  title: string
  technologies: string[]
}

export default function TechStack({ title, technologies }: TechStackProps) {
  return (
    <div className="mb-4">
      <h4 className="font-bold text-primary-navy mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-primary-blue/10 text-primary-blue px-3 py-1 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

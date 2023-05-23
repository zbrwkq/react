import { useParams } from 'react-router-dom'
import data from '../assets/data/data.json'
import Layout from '../components/layout/Layout'

const Experience = () => {
    const { id } = useParams()
    const experience = data.experiences.find((data) => data.id == id)
    return (
        <Layout>
            <h1>{experience.title}</h1>
            <h2>{experience.content}</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{experience.details}</p>
        </Layout>
    )
}

export default Experience

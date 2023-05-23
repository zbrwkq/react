import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Section from '../components/Section'
import Card from '../components/Card'
import data from '../assets/data/data.json'
import List from '../components/List'
import PairedList from '../components/PairedList'

const Home = () => {
    const experiences = data.experiences.map((data) => (
        <Link to={`Experience/${data.id}`} key={data.id}>
            <Card title={data.title} content={data.content} />
        </Link>
    ))
    return (
        <Layout>
            <div className='header'>
                <h1>Bonjor, Damien Chauveau à l&apos;appareil.</h1>
                <p>Actuellement Developeur Web.</p>
            </div>
            <Section title='Compétences'>
                <PairedList elements={data.competences} />
            </Section>
            <Section title='Expériences professionelles'>{experiences}</Section>
            <Section title="Centres d'intérêts">
                <List elements={data.interets} />
            </Section>
            <section>
                <a href='https://www.google.com' target='_blank' rel='noreferrer'>
                    Accéder a mon linkedin
                </a>
            </section>
        </Layout>
    )
}

export default Home

import './App.css'
import Layout from './components/layout/layout'
import Section from './components/section'
import Card from './components/card'
import List from './components/List'
import PairedList from './components/pairedList'
import data from './assets/data/data.json'

function App() {
    console.log(data)
    const experiences = data.experiences.map(data => <Card key={data.id} title={data.title} content={data.content}/>)
    return (
        <div className='App'>
            <Layout>
                <Section title='Compétences'>
                    <PairedList elements={data.competences} />
                </Section>
                <Section title='Expériences professionelles'>
                    {experiences}
                </Section>
                <Section title="Centres d'intérêts">
                    <List elements={data.interets} />
                </Section>
                <section>
                    <a href='https://www.google.com' target='_blank' rel='noreferrer'>
                        Accéder a mon linkedin
                    </a>
                </section>
            </Layout>
        </div>
    )
}

export default App

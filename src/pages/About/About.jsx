import React from 'react';
import Collapse from '../../components/Collapse/Collapse';
import styles from './About.module.css';
import bannerApropos from '../../assets/Banner-about.png';
import Banner from '../../components/Banner/Banner';

const About = () => {
  const AboutData = [
    {
      "id": "1",
      "title": "Fiabilité",
      "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
      "id": "2",
      "title": "Respect",
      "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      "id": "3",
      "title": "Service",
      "content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
      "id": "4",
      "title": "Sécurité",
      "content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ];

  return (
    <div>
      <div>
        <Banner imageUrl={bannerApropos} />
      </div>

      <div className={styles.collapse}>
        {AboutData.map((data) => (
          <Collapse
            key={data.id}
            title={<h3 className={styles.title}>{data.title}</h3>}
            content={<div className={styles.content}>{data.content}</div>}
          />
        ))}
      </div>
    </div>
  );
};

export default About;


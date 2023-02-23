import React, { useState } from 'react';
import {
IonContent,
IonHeader,
IonPage,
IonTitle,
IonToolbar,
IonList,
IonCard,
IonCardContent,
IonCardHeader,
IonCardSubtitle,
IonCardTitle,
IonButton,
IonModal,
IonInput,
IonLabel,
IonItem,
IonTextarea,
} from '@ionic/react';
import './Tab3.css';
import Tab2 from './Tab2';
interface Match {
id: number;
team1: string;
team2: string;
jour: string;
heure: string;
}

interface Pronostic {
id: number;
matchId: number;
equipeGagnante: string;
score: string;
}

const Tab3: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [pronostics, setPronostics] = useState<Pronostic[]>([]);
  const [selectedMatchId, setSelectedMatchId] = useState<number | null>(null);
  const [selectedMatchTitle, setSelectedMatchTitle] = useState('');
  const [selectedMatchDateTime, setSelectedMatchDateTime] = useState('');
  const [equipeGagnante, setEquipeGagnante] = useState('');
  const [score, setScore] = useState('');
  const [matches, setMatches] = useState<Match[]>([]);

const handleAddPronostic = (equipeGagnante: string, score: string) => {
if (selectedMatchId !== null) {
const maxId = pronostics.reduce((max, pronostic) => (pronostic.id > max ? pronostic.id : max), 0);
const newPronostic: Pronostic = {
id: maxId + 1,
matchId: selectedMatchId,
equipeGagnante,
score,
};
setPronostics([...pronostics, newPronostic]);
setShowModal(false);
setSelectedMatchId(null);
setSelectedMatchTitle('');
setSelectedMatchDateTime('');
}
};

return (

  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Pronostics</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonList>
      {pronostics.map((pronostic, index) => {
      const match = matches.find((m) => m.id === pronostic.matchId);
      if (!match) {
        return null;
      }
      return (
      <IonCard key={index}>
        <IonCardHeader>
          <IonCardTitle>{match.team1} vs {match.team2}</IonCardTitle>
          <IonCardSubtitle>{match.jour} {match.heure}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <p>Equipe gagnante : {pronostic.equipeGagnante}</p>
          <p>Score : {pronostic.score}</p>
        </IonCardContent>
      </IonCard>
      );
      })}
    </IonList>
        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{selectedMatchTitle}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem>
                <IonLabel position="floating">Equipe gagnante</IonLabel>
                <IonInput onIonChange={(e) => setEquipeGagnante(e.detail.value!)}/>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Score</IonLabel>
                <IonInput onIonChange={(e) => setScore(e.detail.value!)} />
              </IonItem>
              <IonButton onClick={() => handleAddPronostic(equipeGagnante, score)}>Ajouter</IonButton>
            </IonCardContent>
          </IonCard>
        </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Ajouter un pronostic</IonButton>
    </IonContent>
  </IonPage>
);
};
export default Tab3;





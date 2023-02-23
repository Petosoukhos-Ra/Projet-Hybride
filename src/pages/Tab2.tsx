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
  IonIcon,
} from '@ionic/react';
import { trash } from 'ionicons/icons';
import './Tab2.css';
import Tab3 from './Tab3';
interface Match {
  id: number;
  team1: string;
  team2: string;
  jour: string;
  heure: string;
}

const Tab2: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPronosticModal, setShowPronosticModal] = useState(false);
  const [selectedMatchIndex, setSelectedMatchIndex] = useState<number | null>(null);
  const [Matches, setMatches] = useState<Match[]>([
    {
      id: 1,
      team1: "Paris",
      team2: "Marseille",
      jour: '2023-03-01',
      heure:'20:00'
    },
    {
      id: 2,
      team1: "Barcelona",
      team2: "Real Madrid",
      jour: '2023-03-05',
      heure:'16:45'
    },
    {
      id: 3,
      team1: "Bayern Munich",
      team2: "Dortmund",
      jour: '2023-03-15',
      heure:'19:00'
    },
   
  ]);
  const [newMatchesTeam1, setNewMatchesTeam1] = useState('');
  const [newMatchesTeam2, setNewMatchesTeam2] = useState('');
  const [newMatchesHeure, setNewMatchesHeure] = useState('');
  const [newMatchesJour, setNewMatchesJour] = useState('');
  const [selectedMatchesIndex, setSelectedMatchesIndex] = useState<number | null>(null);



  const handleAddMatches = () => {
    const maxId = Matches.reduce((max, match) => (match.id > max ? match.id : max), 0);
    const newMatches: Match = {
      id: maxId + 1,
      team1:newMatchesTeam1,
      team2:newMatchesTeam2,
      jour: newMatchesHeure,
      heure:newMatchesJour,
    
    };
    setMatches([...Matches, newMatches]);
    setShowModal(false);
    setNewMatchesTeam1('');
    setNewMatchesTeam2('');
    setNewMatchesHeure('');
    setNewMatchesJour('');
  };
  const handleEditMatches = () => {
    if (selectedMatchesIndex !== null) {
      const updatedMatches: Match = {
        id:1,
        team1:newMatchesTeam1,
        team2:newMatchesTeam2,
        jour: newMatchesHeure,
        heure:newMatchesJour,
      };
      const updatedMatche = [...Matches];
      updatedMatche[selectedMatchesIndex] = updatedMatches;
      setMatches(updatedMatche);
      setSelectedMatchesIndex(null);
      setNewMatchesTeam1('');
      setNewMatchesTeam2('');
      setNewMatchesHeure('');
      setNewMatchesJour('');
      setShowEditModal(false);
    }
  };
  const handleDeleteMatch = (index: number) => {
    const updatedMatches = [...Matches];
    updatedMatches.splice(index, 1);
    setMatches(updatedMatches);
  };

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Liste des Matchs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Matchs</IonTitle>
            </IonToolbar>
          </IonHeader>

          {Matches.map((match, index) => (
  <IonCard key={index}>
    <IonCardHeader>
      <IonCardTitle>{match.team1} vs {match.team2}</IonCardTitle>
      <IonCardSubtitle>{match.jour} {match.heure}</IonCardSubtitle>
    </IonCardHeader>

    <IonButton /*onClick={() => {
      setSelectedMatchIndex(index);
      setShowPronosticModal(true);
    }}*/href="Tab3">
      Pronostiquer
    </IonButton>

    <IonButton onClick={() => {
      setSelectedMatchIndex(index);
      setShowEditModal(true);
      setNewMatchesTeam1(match.team1);
      setNewMatchesTeam2(match.team2);
      setNewMatchesJour(match.jour);
      setNewMatchesHeure(match.heure);
    }}>
      Modifier
    </IonButton>
    <IonButton onClick={() => handleDeleteMatch(index)}>
      <IonIcon icon={trash} color="danger"/>
    </IonButton>
  </IonCard>
))}

    </IonList>

    <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Ajouter un Match</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonLabel position="floating">Equipe 1</IonLabel>
            <IonInput
              value={newMatchesTeam1}
              onIonChange={(e) => setNewMatchesTeam1(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Equipe 2</IonLabel>
            <IonInput
              value={newMatchesTeam2}
              onIonChange={(e) => setNewMatchesTeam2(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Jour</IonLabel>
            <IonInput
              value={newMatchesJour}
              onIonChange={(e) => setNewMatchesJour(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Heure</IonLabel>
            <IonInput
              value={newMatchesHeure}
              onIonChange={(e) => setNewMatchesHeure(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonButton expand="block" onClick={handleAddMatches}>
            Ajouter
          </IonButton>
          <IonButton expand="block" color="danger" onClick={() => setShowModal(false)}>
            Annuler
          </IonButton>
        </IonCardContent>
      </IonCard>
    </IonModal>

    <IonModal isOpen={showEditModal} onDidDismiss={() => setShowEditModal(false)}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Modifier un Match</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonLabel position="floating">Equipe 1</IonLabel>
            <IonInput
              value={newMatchesTeam1}
              onIonChange={(e) => setNewMatchesTeam1(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Equipe 2</IonLabel>
            <IonInput
              value={newMatchesTeam2}
              onIonChange={(e) => setNewMatchesTeam2(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Heure</IonLabel>
            <IonInput
              value={newMatchesHeure}
              onIonChange={(e) => setNewMatchesHeure(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Jour</IonLabel>
            <IonInput
              value={newMatchesJour}
              onIonChange={(e) => setNewMatchesJour(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonButton expand="block" onClick={handleEditMatches}>
            Enregistrer
          </IonButton>
          <IonButton expand="block" color="danger" onClick={() => setShowEditModal(false)}>
            Annuler
          </IonButton>
        </IonCardContent>
      </IonCard>
    </IonModal>

    <IonButton expand="block" onClick={() => setShowModal(true)}>
      Ajouter un Match
    </IonButton>
  </IonContent>
</IonPage>
);
};

export default Tab2;

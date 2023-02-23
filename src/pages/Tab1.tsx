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
import './Tab1.css';

interface Competition {
  name: string;
  type: string;
}

const Tab1: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [competitions, setCompetitions] = useState<Competition[]>([
    {
      name: 'Ligue 1',
      type: 'Championnat de football',
    },
    {
      name: 'Ligue 2',
      type: 'Championnat de football',
    },
    {
      name: 'Champions League',
      type: 'Tournois de football',
    },
    {
      name: 'Coupe de Fance',
      type: 'Tournois de football',
    },
    {
      name: 'Coupe du monde',
      type: 'Tournois de football',
    },
  ]);
  const [newCompetitionName, setNewCompetitionName] = useState('');
  const [newCompetitionType, setNewCompetitionType] = useState('');
  const [selectedCompetitionIndex, setSelectedCompetitionIndex] = useState<number | null>(null);

  const handleAddCompetition = () => {
    const newCompetition: Competition = {
      name: newCompetitionName,
      type: newCompetitionType,
    };
    setCompetitions([...competitions, newCompetition]);
    setShowModal(false);
    setNewCompetitionName('');
    setNewCompetitionType('');
  };

  const handleEditCompetition = () => {
    if (selectedCompetitionIndex !== null) {
      const updatedCompetition: Competition = {
        name: newCompetitionName,
        type: newCompetitionType,
      };
      const updatedCompetitions = [...competitions];
      updatedCompetitions[selectedCompetitionIndex] = updatedCompetition;
      setCompetitions(updatedCompetitions);
      setSelectedCompetitionIndex(null);
      setNewCompetitionName('');
      setNewCompetitionType('');
      setShowEditModal(false);
    }
  };

  const handleDeleteCompetition = (index: number) => {
    const updatedCompetitions = [...competitions];
    updatedCompetitions.splice(index, 1);
    setCompetitions(updatedCompetitions);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Liste des Compétitions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Compétitions</IonTitle>
            </IonToolbar>
          </IonHeader>

          {competitions.map((competition, index) => (
            <IonCard key={index}>
              <IonCardHeader>
                <IonCardTitle>{competition.name}</IonCardTitle>
                <IonCardSubtitle>{competition.type}</IonCardSubtitle>
              </IonCardHeader>

              <IonButton            onClick={() => {
              setSelectedCompetitionIndex(index);
              setShowEditModal(true);
              setNewCompetitionName(competition.name);
              setNewCompetitionType(competition.type);
            }}
          >
            Modifier
          </IonButton>
          <IonButton onClick={() => handleDeleteCompetition(index)}>
            <IonIcon icon={trash} color="danger"/>
          </IonButton>
        </IonCard>
      ))}
    </IonList>

    <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Ajouter une compétition</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonLabel position="floating">Nom</IonLabel>
            <IonInput
              value={newCompetitionName}
              onIonChange={(e) => setNewCompetitionName(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Type</IonLabel>
            <IonInput
              value={newCompetitionType}
              onIonChange={(e) => setNewCompetitionType(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonButton expand="block" onClick={handleAddCompetition}>
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
          <IonCardTitle>Modifier une compétition</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonLabel position="floating">Nom</IonLabel>
            <IonInput
              value={newCompetitionName}
              onIonChange={(e) => setNewCompetitionName(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Type</IonLabel>
            <IonInput
              value={newCompetitionType}
              onIonChange={(e) => setNewCompetitionType(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonButton expand="block" onClick={handleEditCompetition}>
            Enregistrer
          </IonButton>
          <IonButton expand="block" color="danger" onClick={() => setShowEditModal(false)}>
            Annuler
          </IonButton>
        </IonCardContent>
      </IonCard>
    </IonModal>

    <IonButton expand="block" onClick={() => setShowModal(true)}>
      Ajouter une compétition
    </IonButton>
  </IonContent>
</IonPage>
);
};

export default Tab1;

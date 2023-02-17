import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import React, { useState } from 'react';

const AddCompetitionPage: React.FC = () => {
  const [competitionName, setCompetitionName] = useState<string>('');
  const [competitionSubtitle, setCompetitionSubtitle] = useState<string>('');

  const handleAddCompetition = () => {
    
    console.log('Ajout de la nouvelle compétition', competitionName, competitionSubtitle);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ajouter une compétition</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonLabel position="stacked">Nom de la compétition</IonLabel>
          <IonInput value={competitionName} onIonChange={e => setCompetitionName(e.detail.value!)}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Sous-titre de la compétition</IonLabel>
          <IonInput value={competitionSubtitle} onIonChange={e => setCompetitionSubtitle(e.detail.value!)}></IonInput>
        </IonItem>
        <IonButton expand="block" onClick={handleAddCompetition}>Ajouter la compétition</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddCompetitionPage;

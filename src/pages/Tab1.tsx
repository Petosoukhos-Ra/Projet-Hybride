import React from 'react';
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
  IonButton
} from '@ionic/react';

interface Tab1Props {
  competitions: string[];
}

const Tab1: React.FC<Tab1Props> = ({ competitions }) => {
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
                <IonCardTitle>{competition.split(' - ')[0]}</IonCardTitle>
                <IonCardSubtitle>{competition.split(' - ')[1]}</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                {competition.split(' - ')[0]}
              </IonCardContent>

              <IonButton fill="clear">Liste des matchs</IonButton>
            </IonCard>
          ))}

          <IonButton expand="block" routerLink="/add-competition">Ajouter une compétition</IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

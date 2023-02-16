import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonList } from '@ionic/react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
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

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Ligue 1</IonCardTitle>
            <IonCardSubtitle>Championnat de football</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Ligue 1 Uber Eats
          </IonCardContent>

          <IonButton fill="clear">Liste des matchs</IonButton>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Ligue 2 </IonCardTitle>
            <IonCardSubtitle>Championnat de football</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Ligue 2 Conforama
          </IonCardContent>

          <IonButton fill="clear">Liste des matchs</IonButton>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Champions League</IonCardTitle>
            <IonCardSubtitle>Tournois de football</IonCardSubtitle>
          </IonCardHeader>

          <IonButton fill="clear">Liste des matchs</IonButton>
        </IonCard>
        
      

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Coupe de Fance</IonCardTitle>
            <IonCardSubtitle>Tournois de football</IonCardSubtitle>
          </IonCardHeader>

          <IonButton fill="clear">Voir les Matchs</IonButton>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Coupe du monde</IonCardTitle>
            <IonCardSubtitle>Tournois de football</IonCardSubtitle>
          </IonCardHeader>

          <IonButton fill="clear">Voir les Matchs</IonButton>
        </IonCard>

        <IonButton expand="block">Ajouter une compétition</IonButton>

        </IonList>
      </IonContent>


    </IonPage>
  );
};

export default Tab1;

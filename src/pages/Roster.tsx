import React, { useState } from "react";
import { Presence, Student, useStudents } from "../student-hook";
import {
  IonHeader,
  IonToast,
  IonPage,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonList,
  IonIcon,
  IonItemSliding,
  IonItem,
  IonItemOptions,
  IonItemOption,
  IonActionSheet,
  IonButton,
  IonButtons,
  IonAlert,
  IonMenuButton,
} from "@ionic/react";
import {
  eyeOffOutline,
  personOutline,
  eye,
  trash,
  close,
  ellipsisHorizontalOutline,
  chevronForwardOutline,
} from "ionicons/icons";

const Roster: React.FC = () => {
  const emptyStudent: Student = { id: "", firstname: "", lastname: "" };
  const [selectedStudent, setSelectedStudent] = useState(emptyStudent);
  const [students, setStudents] = useStudents();
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showDeleteToast, setShowDeleteToast] = useState(false);

  function deleteStudent(student: Student) {
    setStudents(students.filter((x) => x.id !== student.id));
    setShowDeleteToast(true);
  }

  function clickStudent(student: Student) {
    setSelectedStudent(student);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Roster</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {students.map((student) => {
            return (
              <IonItemSliding key={student.id}>
                <IonItem>
                  <IonIcon slot="start" icon={personOutline}></IonIcon>
                  <IonLabel>
                    {student.lastname}, {student.firstname}
                  </IonLabel>
                  {student.status === Presence.Present && (
                    <IonIcon slot="end" icon={eye}></IonIcon>
                  )}
                  {student.status === Presence.Absent && (
                    <IonIcon slot="end" icon={eyeOffOutline}></IonIcon>
                  )}
                  <IonButtons slot="end">
                    <IonButton onClick={() => clickStudent(student)}>
                      <IonIcon
                        slot="icon-only"
                        icon={ellipsisHorizontalOutline}
                      ></IonIcon>
                    </IonButton>
                    <IonButton>
                      <IonIcon
                        slot="icon-only"
                        icon={chevronForwardOutline}
                        onClick={() => deleteStudent(student)}
                      ></IonIcon>
                    </IonButton>
                  </IonButtons>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption
                    color="danger"
                    onClick={() => deleteStudent(student)}
                  >
                    Delete
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            );
          })}
        </IonList>
        <IonActionSheet
          isOpen={!!selectedStudent.id}
          header={`${selectedStudent.firstname} ${selectedStudent.lastname}`}
          onDidDismiss={() => setSelectedStudent(emptyStudent)}
          buttons={[
            {
              text: "Delete",
              role: "destructive",
              icon: trash,
              handler: () => {
                setShowDeleteAlert(true);
              },
            },
            {
              text: "Mark Present",
              icon: eye,
              handler: () => {
                selectedStudent.status = Presence.Present;
              },
            },
            {
              text: "Mark Absent",
              icon: eyeOffOutline,
              handler: () => {
                selectedStudent.status = Presence.Absent;
              },
            },
            {
              text: "Cancel",
              icon: close,
              role: "cancel",
            },
          ]}
        ></IonActionSheet>
        <IonAlert
          isOpen={showDeleteAlert}
          onDidDismiss={() => setShowDeleteAlert(false)}
          header="Delete this student?"
          message="This operation can not be undone."
          subHeader={`${selectedStudent.firstname} ${selectedStudent.lastname}`}
          buttons={[
            {
              text: "Delete",
              handler: () => {
                deleteStudent(selectedStudent);
              },
            },
            {
              text: "Cancel",
              role: "cancel",
            },
          ]}
        ></IonAlert>
        <IonToast
          isOpen={showDeleteToast}
          onDidDismiss={() => setShowDeleteToast(false)}
          message="Student deleted."
          duration={3000}
          position="bottom"
        ></IonToast>
      </IonContent>
    </IonPage>
  );
};

export default Roster;

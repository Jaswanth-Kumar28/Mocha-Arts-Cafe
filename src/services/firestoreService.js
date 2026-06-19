import { collection, addDoc, serverTimestamp, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export async function saveTableBooking(data) {
  return addDoc(collection(db, "tableBookings"), {
    ...data,
    status: "new",
    createdAt: serverTimestamp()
  });
}

export async function saveBirthdayBooking(data) {
  return addDoc(collection(db, "birthdayBookings"), {
    ...data,
    status: "new",
    createdAt: serverTimestamp()
  });
}

export async function saveContactMessage(data) {
  return addDoc(collection(db, "contactMessages"), {
    ...data,
    status: "new",
    createdAt: serverTimestamp()
  });
}

export async function getTableBookings() {
  const q = query(collection(db, "tableBookings"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getBirthdayBookings() {
  const q = query(collection(db, "birthdayBookings"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getContactMessages() {
  const q = query(collection(db, "contactMessages"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

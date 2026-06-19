import { collection, addDoc, serverTimestamp } from "firebase/firestore";
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
